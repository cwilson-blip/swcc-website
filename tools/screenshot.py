"""Accurate-viewport screenshots via raw Chrome DevTools Protocol.
Works around headless Chrome's ~500px --window-size floor so true mobile
widths (e.g. 390px) can be captured.

Usage: python3 tools/screenshot.py <url> <width> <height> <outfile> [--full]
"""
import base64
import json
import subprocess
import sys
import time
import urllib.request

import websocket

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT = 9333


def cdp_send(ws, msg_id, method, params=None):
    ws.send(json.dumps({"id": msg_id, "method": method, "params": params or {}}))
    while True:
        resp = json.loads(ws.recv())
        if resp.get("id") == msg_id:
            return resp
        # ignore other events


def main():
    url, width, height, outfile = sys.argv[1:5]
    full_page = "--full" in sys.argv[5:]
    width, height = int(width), int(height)

    proc = subprocess.Popen([
        CHROME, "--headless=new", "--disable-gpu",
        f"--remote-debugging-port={PORT}", "--remote-allow-origins=*",
        "--hide-scrollbars", "--no-first-run",
        "--user-data-dir=/tmp/cdp-profile-" + str(PORT),
    ], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        for _ in range(50):
            try:
                with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json/version", timeout=0.5) as r:
                    json.loads(r.read())
                break
            except Exception:
                time.sleep(0.2)

        req = urllib.request.Request(f"http://127.0.0.1:{PORT}/json/new?{url}", method="PUT")
        with urllib.request.urlopen(req, timeout=5) as r:
            tab = json.loads(r.read())
        ws_url = tab["webSocketDebuggerUrl"]

        ws = websocket.create_connection(ws_url, timeout=15)
        mid = [0]

        def send(method, params=None):
            mid[0] += 1
            return cdp_send(ws, mid[0], method, params)

        send("Page.enable")
        send("Emulation.setDeviceMetricsOverride", {
            "width": width, "height": height,
            "deviceScaleFactor": 2, "mobile": width < 700,
        })
        send("Page.navigate", {"url": url})
        time.sleep(2.2)

        capture_params = {"format": "png"}
        if full_page:
            metrics = send("Page.getLayoutMetrics")
            content_size = metrics["result"]["cssContentSize"]
            capture_params["clip"] = {
                "x": 0, "y": 0,
                "width": content_size["width"],
                "height": content_size["height"],
                "scale": 1,
            }
            send("Emulation.setDeviceMetricsOverride", {
                "width": width, "height": int(content_size["height"]),
                "deviceScaleFactor": 2, "mobile": width < 700,
            })
            time.sleep(0.3)

        shot = send("Page.captureScreenshot", capture_params)
        data = base64.b64decode(shot["result"]["data"])
        with open(outfile, "wb") as f:
            f.write(data)
        ws.close()
        print("saved", outfile)
    finally:
        proc.terminate()
        proc.wait()


if __name__ == "__main__":
    main()
