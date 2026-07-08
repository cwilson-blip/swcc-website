import os
import sys

sys.path.insert(0, os.path.dirname(__file__))

from common import render_page
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


def main():
    all_pages = [home.page()]
    for cluster in CLUSTERS:
        all_pages.extend(cluster.PAGES)

    seen = set()
    for filename, title, description, body in all_pages:
        if filename in seen:
            raise SystemExit(f"duplicate filename: {filename}")
        seen.add(filename)
        html = render_page(title, description, body, active=filename)
        path = os.path.join(ROOT, filename)
        with open(path, "w") as f:
            f.write(html)
        print("wrote", filename)
    print(f"\n{len(all_pages)} pages generated")


if __name__ == "__main__":
    main()
