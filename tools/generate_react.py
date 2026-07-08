import os
import re
import sys

sys.path.insert(0, os.path.dirname(__file__))

from html_to_jsx import convert
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

REACT_ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "react-app")
PAGES_DIR = os.path.join(REACT_ROOT, "src", "pages")

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


def filename_to_route(filename):
    if filename == "index.html":
        return "/"
    return "/" + filename[:-5]


def filename_to_component(filename):
    stem = filename[:-5] if filename != "index.html" else "home"
    parts = re.split(r"[-_]", stem)
    return "".join(p.capitalize() for p in parts) + "Page"


def main():
    all_pages = [home.page()]
    for cluster in CLUSTERS:
        all_pages.extend(cluster.PAGES)

    routes = []
    for filename, title, description, body_html in all_pages:
        component = filename_to_component(filename)
        route = filename_to_route(filename)
        jsx_body, uses_link = convert(body_html)
        link_import = 'import { Link } from "react-router-dom";\n' if uses_link else ""
        source = f'''import {{ useEffect }} from "react";
{link_import}
export default function {component}() {{
  useEffect(() => {{
    document.title = "{title} | Southwestern Christian College";
  }}, []);

  return (
    <>
{jsx_body}
    </>
  );
}}
'''
        out_path = os.path.join(PAGES_DIR, f"{component}.jsx")
        with open(out_path, "w") as f:
            f.write(source)
        routes.append((route, component, filename))
        print("wrote", f"{component}.jsx", "->", route)

    # write a routes manifest consumed by App.jsx
    manifest_path = os.path.join(REACT_ROOT, "src", "routes.js")
    with open(manifest_path, "w") as f:
        f.write('import { lazy } from "react";\n\n')
        for route, component, filename in routes:
            f.write(f'const {component} = lazy(() => import("./pages/{component}.jsx"));\n')
        f.write("\nexport const routes = [\n")
        for route, component, filename in routes:
            f.write(f'  {{ path: "{route}", Component: {component} }},\n')
        f.write("];\n")
    print(f"\n{len(routes)} React pages generated")


if __name__ == "__main__":
    main()
