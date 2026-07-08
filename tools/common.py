"""Shared layout/chrome for the SWCC static site generator.
Run tools/generate.py to (re)write every .html file at the project root.
"""

SITE_NAME = "Southwestern Christian College"
APPLY_URL = "https://swcc.populiweb.com/router/admissions/onlineapplications/index?source=65912"
LECTURESHIP_URL = "https://www.swcclectureship.com/"
PURCHASE_SEATS_URL = "https://www.tickettailor.com/events/southwesternchristiancollege/1233313"
ATHLETICS_URL = "https://www.swccramathletics.com/landing/index"
FAFSA_URL = "https://studentaid.gov/h/apply-for-aid/fafsa"

NAV = [
    ("About", "about.html", [
        ("Our School", "about.html"),
        ("Meet Our President", "president.html"),
        ("Meet Our Board", "board.html"),
        ("Meet Our Faculty & Staff", "faculty-staff.html"),
        ("Guiding Philosophy", "guiding-philosophy.html"),
        ("Our History", "history.html"),
        ("Videos", "videos.html"),
        ("Alumni", "alumni.html"),
    ]),
    ("Admissions", "admissions.html", [
        ("Admissions Overview", "admissions.html"),
        ("How To Enroll", "how-to-enroll.html"),
        ("Campus Housing", "campus-housing.html"),
        ("Tuition & Fees", "tuition-fees.html"),
        ("Preview Day 2026", "preview-day.html"),
        ("Admissions (International)", "admissions-international.html"),
        ("Next Steps for Admitted RAMs", "admitted-next-steps.html"),
    ]),
    ("Financial Aid", "financial-aid.html", [
        ("Financial Aid Office", "financial-aid.html"),
        ("Scholarships", "scholarships.html"),
        ("Grants", "grants.html"),
        ("Loans", "loans.html"),
        ("Work Study", "work-study.html"),
    ]),
    ("Academics", "academics.html", [
        ("Academics Overview", "academics.html"),
        ("Degree Plans", "degree-plans.html"),
        ("Online Classes", "online-classes.html"),
        ("Academic Catalogs", "academic-catalogs.html"),
    ]),
    ("Programs", "programs.html", [
        ("Campus Life & Programs", "programs.html"),
        ("Athletics", ATHLETICS_URL),
        ("A Cappella Chorus", "chorus.html"),
        ("Career Opportunities", "career.html"),
    ]),
    ("Initiatives", "initiatives.html", [
        ("Institutional Effectiveness", "institutional-effectiveness.html"),
        ("CARES Act", "cares-act.html"),
        ("Title IX", "title-ix.html"),
    ]),
    ("Events", "events.html", [
        ("2026 Graduation", "graduation.html"),
        ("2025 Lectureship", LECTURESHIP_URL),
        ("Purchase Seats", PURCHASE_SEATS_URL),
    ]),
    ("Consumer Info", "consumer-information.html", [
        ("Overview", "consumer-information.html"),
        ("Resources", "resources.html"),
        ("Default Prevention", "default-prevention.html"),
        ("Campus Directory", "directory.html"),
        ("Policy Statements", "policy-statements.html"),
        ("Our Services", "services.html"),
        ("Doris Johnson Library", "library.html"),
        ("Center for Student Success", "student-success.html"),
        ("Campus Renovations", "campus-renovations.html"),
        ("Campus Safety", "campus-safety.html"),
    ]),
]

UTILITY = [
    ("Student Achievement", "student-achievement.html"),
    ("Donate", "donate.html"),
    ("Transcript Request", "transcript-request.html"),
    ("Contact", "contact.html"),
]


def _dropdown(items):
    lis = "\n".join(
        f'<li><a href="{href}">{label}</a></li>' for label, href in items
    )
    return f'<ul class="dropdown">{lis}</ul>'


def render_nav():
    parts = []
    for label, href, children in NAV:
        if children:
            parts.append(f'''<li>
              <button aria-haspopup="true" aria-expanded="false">{label} <span class="caret">&#9662;</span></button>
              {_dropdown(children)}
            </li>''')
        else:
            parts.append(f'<li><a href="{href}">{label}</a></li>')
    return "\n".join(parts)


def render_header(active=None):
    utility_links = "\n".join(f'<a href="{href}">{label}</a>' for label, href in UTILITY)
    return f'''<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="site-header-backdrop"></div>
  <div class="utility-bar">
    <div class="container">
      <div class="utility-links">
        {utility_links}
      </div>
      <div class="utility-contact">
        <a href="tel:9725243341">972-524-3341</a>
        <a href="mailto:info@swcc.edu">info@swcc.edu</a>
        <span>200 Bowser Circle, Terrell, TX</span>
      </div>
    </div>
  </div>
  <div class="container nav-row">
    <a class="brand" href="index.html">
      <img class="brand-mark-full" src="assets/images/logo-full-light.png" alt="Southwestern Christian College">
      <img class="brand-mark-shield" src="assets/images/logo-shield-light.png" alt="Southwestern Christian College">
    </a>
    <nav class="main-nav" aria-label="Primary">
      <ul>
        {render_nav()}
      </ul>
    </nav>
    <div class="nav-cta">
      <a class="btn btn-brass" href="{APPLY_URL}" target="_blank" rel="noopener">Apply Now</a>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>
'''


def render_footer():
    return f'''<footer class="site-footer">
  <div class="container footer-top">
    <div class="footer-brand">
      <img class="footer-logo" src="assets/images/logo-full-dark.png" alt="Southwestern Christian College">
      <p>200 Bowser Circle, Terrell, Texas 75160. A private, faith-based college inspiring excellence and building character since 1948.</p>
      <div class="footer-social">
        <a href="https://www.facebook.com/southwesternchristiancollegeterrell" target="_blank" rel="noopener" aria-label="Facebook">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 3h-3a5 5 0 0 0-5 5v3H6v4h3v9h4v-9h3.2l.8-4H13V8a1 1 0 0 1 1-1h3z"/></svg>
        </a>
        <a href="https://www.instagram.com/officialswcc" target="_blank" rel="noopener" aria-label="Instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
        </a>
        <a href="https://x.com/SWCC_WBBTX" target="_blank" rel="noopener" aria-label="X / Twitter, Women's Basketball">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.3 22H1.2l8.2-9.3L1 2h7.3l5 6.6zm-1.2 18h1.9L7.4 4h-2z"/></svg>
        </a>
        <a href="https://x.com/SWCCRAMSMBB" target="_blank" rel="noopener" aria-label="X / Twitter, Men's Basketball">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.3 22H1.2l8.2-9.3L1 2h7.3l5 6.6zm-1.2 18h1.9L7.4 4h-2z"/></svg>
        </a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Admissions</h5>
      <ul>
        <li><a href="admissions.html">Admissions Overview</a></li>
        <li><a href="how-to-enroll.html">How To Enroll</a></li>
        <li><a href="tuition-fees.html">Tuition &amp; Fees</a></li>
        <li><a href="campus-housing.html">Campus Housing</a></li>
        <li><a href="admitted-next-steps.html">Next Steps for Admitted RAMs</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Academics</h5>
      <ul>
        <li><a href="academics.html">Academics Overview</a></li>
        <li><a href="degree-plans.html">Degree Plans</a></li>
        <li><a href="financial-aid.html">Financial Aid</a></li>
        <li><a href="scholarships.html">Scholarships</a></li>
        <li><a href="student-achievement.html">Student Achievement</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>About</h5>
      <ul>
        <li><a href="about.html">Our School</a></li>
        <li><a href="president.html">Meet Our President</a></li>
        <li><a href="history.html">Our History</a></li>
        <li><a href="alumni.html">Alumni</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Resources</h5>
      <ul>
        <li><a href="consumer-information.html">Consumer Information</a></li>
        <li><a href="campus-safety.html">Campus Safety</a></li>
        <li><a href="directory.html">Campus Directory</a></li>
        <li><a href="transcript-request.html">Transcript Request</a></li>
        <li><a href="donate.html">Donate</a></li>
      </ul>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>&copy; 2026 Southwestern Christian College. Powered by DestinyPMC.</span>
    <div class="footer-bottom-links">
      <a href="privacy-policy.html">Privacy Policy</a>
      <a href="terms.html">Terms &amp; Conditions</a>
    </div>
  </div>
</footer>
'''


def photo_hero(eyebrow, title, lede, image, alt):
    return f'''<section class="page-hero">
  <div class="hero-media">
    <img src="{image}" alt="{alt}">
    <div class="hero-scrim"></div>
  </div>
  <div class="container page-hero-inner">
    <p class="eyebrow eyebrow-invert">{eyebrow}</p>
    <h1>{title}</h1>
    <p class="lede hero-lede">{lede}</p>
  </div>
</section>
'''


def plain_hero(eyebrow, title, lede=""):
    lede_html = f'<p class="lede">{lede}</p>' if lede else ""
    return f'''<section class="page-hero-plain">
  <div class="container">
    <p class="eyebrow eyebrow-invert">{eyebrow}</p>
    <h1>{title}</h1>
    {lede_html}
  </div>
</section>
'''


def render_page(title, description, body, active=None, extra_head=""):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | {SITE_NAME}</title>
<meta name="description" content="{description}">
<link rel="icon" type="image/png" href="assets/images/logo-shield.png">
<link rel="stylesheet" href="css/style.css">
{extra_head}</head>
<body>
{render_header(active)}
<main id="main">
{body}
</main>
{render_footer()}
<script src="js/main.js"></script>
</body>
</html>
'''
