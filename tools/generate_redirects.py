"""Writes small redirect pages so addresses from the old Wix site (www.swcc.edu)
keep working once the domain points at this site. GitHub Pages has no server-side
redirects, so each old path gets an HTML file that forwards to its new page.

Old paths that already match a new page name (e.g. /student-achievement) need no
entry: GitHub Pages serves /student-achievement from student-achievement.html.
"""
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# old path (from the Wix sitemaps, Oct 2026) -> new page
REDIRECTS = {
    # Pages renamed on the new site
    "contact-1": "contact.html",
    "our-school": "about.html",
    "meet-our-president": "president.html",
    "president-past-letters": "president.html",
    "meet-our-board": "board.html",
    "meet-our-faculty-staff": "faculty-staff.html",
    "guiding-philospohy": "guiding-philosophy.html",
    "our-history": "history.html",
    "financial-aid-office": "financial-aid.html",
    "documents-forms": "financial-aid.html",
    "workstudy": "work-study.html",
    "online-courses": "online-classes.html",
    "classes": "academics.html",
    "center-for-student-success": "student-success.html",
    "doris-johnson-library": "library.html",
    "acappella-chorus": "chorus.html",
    "consumer": "consumer-information.html",
    "events-1": "events.html",
    "2025-graduation": "graduation.html",
    "preview-day-2025": "preview-day.html",
    "news": "president.html",
    "audio-library": "videos.html",
    "faq": "admissions.html",
    "home": "index.html",
    # Wix's generic page names
    "blank": "privacy-policy.html",        # Privacy Policy
    "blank-3": "terms.html",               # Terms & Conditions
    "blank-1": "index.html",               # Accessibility Statement (unfinished template)
    "blank-2": "index.html",               # Shipping Policy (store template)
    "blank-4": "index.html",               # Refund Policy (store template)
    # Wix app pages (store, bookings, online programs, blog, events)
    "school-shop": "index.html",
    "book-online": "contact.html",
    "challenges": "index.html",
    "blog": "index.html",
    "service-page/academic-counseling": "student-success.html",
    "service-page/admissions-consultation": "admissions.html",
    "service-page/campus-visit": "admissions.html",
    "event-details-registration/2026-swcc-preview-day": "preview-day.html",
    "post/discover-your-future-at-southwestern-christian-college": "index.html",
    "post/top-reasons-to-choose-southwestern-christian-college": "index.html",
    "post/experience-campus-life-at-southwestern-christian-college": "index.html",
    "challenge-page/53ef9777-baa3-4a93-b19f-c8ced90259f8": "index.html",
    "challenge-page/5d47af83-befa-4cae-ae20-5310f32a6d56": "index.html",
    "challenge-page/7704f540-95fa-466a-8bf3-c7968188d7e6": "index.html",
    "category/student-supplies": "index.html",
    "category/all-products": "index.html",
    "category/college-apparel": "index.html",
    "category/home-decor": "index.html",
    "product-page/desert-water-bottle": "index.html",
    "product-page/canyon-throw-pillow": "index.html",
    "product-page/southwest-cap": "index.html",
    "product-page/scholar-notebook": "index.html",
    "product-page/campus-backpack": "index.html",
    "product-page/southwestern-mug": "index.html",
    "product-page/inspiration-wall-art": "index.html",
    "product-page/spirit-t-shirt": "index.html",
    "product-page/campus-hoodie": "index.html",
}


def page(target, depth):
    # Relative so it works both on github.io/swcc-website/ and at the root of swcc.edu
    href = "../" * depth + target
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Redirecting&hellip; | Southwestern Christian College</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="{href}">
<meta http-equiv="refresh" content="0; url={href}">
<script>location.replace("{href}" + location.hash);</script>
</head>
<body>
<p>This page has moved. <a href="{href}">Continue to the new page</a>.</p>
</body>
</html>
'''


def main():
    for old, target in REDIRECTS.items():
        assert os.path.exists(os.path.join(ROOT, target)), f"redirect target missing: {target}"
        assert not os.path.exists(os.path.join(ROOT, old + ".html")) or open(os.path.join(ROOT, old + ".html"), encoding="utf-8").read().find('name="robots" content="noindex"') > 0, f"would overwrite a real page: {old}.html"
        path = os.path.join(ROOT, old + ".html")
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            f.write(page(target, old.count("/")))
    print(f"{len(REDIRECTS)} redirects written")


if __name__ == "__main__":
    main()
