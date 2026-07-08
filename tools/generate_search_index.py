"""Builds a client-side search index (JSON) from every page's real content,
so the site can offer instant search with zero backend/server.
Consumed by js/search.js (static site) and react-app's SearchOverlay.
"""
import html as html_lib
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(__file__))

from pages import (
    home,
    about_cluster,
    admissions_cluster,
    financial_aid_cluster,
    academics_cluster,
    programs_cluster,
    initiatives_cluster,
    student_achievement,
    events_cluster,
    consumer_cluster,
    misc_cluster,
)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

CLUSTERS = [
    about_cluster,
    admissions_cluster,
    financial_aid_cluster,
    academics_cluster,
    programs_cluster,
    initiatives_cluster,
    student_achievement,
    events_cluster,
    consumer_cluster,
    misc_cluster,
]

TAG_RE = re.compile(r"<[^>]+>")
WS_RE = re.compile(r"\s+")


def strip_html(body):
    text = TAG_RE.sub(" ", body)
    text = html_lib.unescape(text)
    text = WS_RE.sub(" ", text).strip()
    return text


def main():
    entries = [home.page()]
    for cluster in CLUSTERS:
        entries.extend(cluster.PAGES)

    index = []
    for filename, title, description, body in entries:
        text = strip_html(body)
        # keep the index lean: a few hundred chars of body text is enough for matching
        index.append({
            "url": filename,
            "title": title,
            "description": description,
            "text": text[:2000],
        })

    out = json.dumps(index, ensure_ascii=False)

    static_path = os.path.join(ROOT, "assets", "search-index.json")
    with open(static_path, "w") as f:
        f.write(out)
    print("wrote", static_path)

    react_path = os.path.join(ROOT, "react-app", "src", "searchIndex.json")
    with open(react_path, "w") as f:
        f.write(out)
    print("wrote", react_path)

    print(f"{len(index)} pages indexed")


if __name__ == "__main__":
    main()
