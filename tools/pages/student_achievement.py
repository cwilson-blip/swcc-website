from common import photo_hero

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


# ---------- Student achievement data ----------
# Transferred verbatim from https://www.swcc.edu/student-achievement (Oct 2026).
# Values, labels, and placeholders ("n/a", "----", "—-") are kept exactly as published.
YEARS = ["2025-2026", "2024-2025", "2023-2024", "2022-2023", "2021-2022"]

OVERALL = [
    ("Graduation Rate: 46%", ["7%", "23%", "21%", "17%", "22%"]),
    ("Retention Rate: 68%", ["19%", "30%", "33%", "46%", "29%"]),
]

PROGRAMS = [
    ("Associates of Arts", [
        ("Graduation Rate:", ["0%", "13%", "37%", "13%", "21%"]),
        ("Retention Rate:", ["16%", "29%", "22%", "57%", "18%"]),
    ]),
    ("Associates of Science", [
        ("Graduation Rate:", ["11%", "30%", "16%", "18%", "25%"]),
        ("Retention Rate:", ["18%", "27%", "31%", "41%", "30%"]),
    ]),
    ("Associates of Science in Criminal Justice", [
        ("Graduation Rate:", ["10%", "0%", "n/a", "n/a", "n/a"]),
        ("Retention Rate:", ["20%", "40%", "n/a", "n/a", "n/a"]),
    ]),
    ("Bachelor of Science in Interdisciplinary Studies", [
        ("Graduation Rate:", ["n/a", "n/a", "n/a", "n/a", "n/a"]),
        ("Retention Rate:", ["100%", "29%", "n/a", "n/a", "n/a"]),
    ]),
    ("Bachelor of Science in Religious Studies", [
        ("Graduation Rate:", ["100%", "10%", "80%", "14%", "38%"]),
        ("Retention Rate:", ["33%", "50%", "20%", "57%", "50%"]),
    ]),
]

GRADUATION_BY_RACE = [
    ("American Indian or Alaska Native", ["0%", "67%", "0%", "0%", "----"]),
    ("Asian or Pacific Islander", ["----", "----", "----", "----", "----"]),
    ("Black or African American", ["9%", "18%", "22%", "16%", "24%"]),
    ("Hispanic", ["4%", "22%", "17%", "38%", "0%"]),
    ("Two or more races", ["0%", "50%", "13%", "14%", "0%"]),
    ("U.S. Nonresident", ["0%", "0%", "n/a", "n/a", "n/a"]),
    ("White", ["17%", "0%", "0%", "0%", "&mdash;-"]),
    ("Unknown", ["0%", "67%", "&mdash;-", "&mdash;-", "0%"]),
]

RETENTION_BY_RACE = [
    ("American Indian or Alaska Native", ["0%", "33%", "100%", "100%", "----"]),
    ("Asian or Pacific Islander", ["----", "----", "----", "----", "----"]),
    ("Black or African American", ["20%", "30%", "31%", "53%", "28%"]),
    ("Hispanic", ["15%", "22%", "17%", "13%", "57%"]),
    ("Two or more races", ["25%", "13%", "63%", "0%", "0%"]),
    ("U.S. Nonresident", ["0%", "0%", "n/a", "n/a", "n/a"]),
    ("White", ["33%", "80%", "0%", "0%", "&mdash;-"]),
    ("Unknown", ["0%", "0%", "&mdash;-", "&mdash;-", "0%"]),
]

# Order matches the swcc.edu layout: 2024, 2023 / 2022, 2021
IPEDS_REPORTS = ["2024", "2023", "2022", "2021"]


def _data_table(first_header, rows, caption):
    head = "".join(f'<th scope="col">{y}</th>' for y in YEARS)
    body = "\n".join(
        f'<tr><th scope="row">{label}</th>' + "".join(f"<td>{v}</td>" for v in values) + "</tr>"
        for label, values in rows
    )
    return f'''<table class="sa-table">
        <caption class="sr-only">{caption}</caption>
        <thead><tr><th scope="col">{first_header}</th>{head}</tr></thead>
        <tbody>
{body}
        </tbody>
      </table>'''


_program_blocks = "\n".join(
    f'''    <div class="sa-program">
      <h3>{name}</h3>
      {_data_table("Categories of Achievement", rows, name + " graduation and retention rates by academic year")}
    </div>'''
    for name, rows in PROGRAMS
)

_report_cards = "\n".join(
    f'''      <figure class="sa-report">
        <a href="assets/docs/ipeds-data-feedback-report-{y}.pdf" target="_blank" rel="noopener">
          <img src="assets/images/campus/ipeds-report-{y}-cover.jpg" alt="Cover of the IPEDS Data Feedback Report {y}, Southwestern Christian College, Terrell, TX" loading="lazy">
        </a>
        <figcaption>
          <span>IPEDS Data Feedback Report {y}</span>
          <a class="btn btn-outline-dark" href="assets/docs/ipeds-data-feedback-report-{y}.pdf" target="_blank" rel="noopener">Download</a>
        </figcaption>
      </figure>'''
    for y in IPEDS_REPORTS
)


add("student-achievement.html", "Student Achievement", "Student achievement data for Southwestern Christian College — graduation and retention rates by year, program, and race, plus IPEDS Data Feedback Reports 2021–2024.", f'''
{photo_hero("Student Achievement", "Student Achievement", "A holistic educational program that motivates students to value and achieve academic excellence within a commitment to moral and spiritual values.", "assets/images/campus/graduation-candid-rows.jpg", "Graduates seated together at commencement")}
<section class="section on-paper">
  <div class="container">
    <p class="lede sa-mission">Our mission is to offer a holistic educational program that motivates our students to value and achieve academic excellence within the context of commitment to moral and spiritual values &mdash; and to prepare future leaders in distinct communities and the world at large.</p>
    <div class="section-head">
      <p class="eyebrow">Student Achievement Data</p>
      <h2>Categories of Achievement</h2>
    </div>
    <div class="sa-goals">
      <div class="sa-goal">
        <div class="sa-stat"><span class="sa-stat-label">Graduation Rate:</span><span class="sa-stat-num">46%</span></div>
        <div>
          <h3>Institutional Goals</h3>
          <p>Southwestern Christian College defines graduation as the complete fulfillment of core, academic program, and institutional requirements, as well as the resolution of all student financial accounts prior to graduation. Graduation rates are calculated based on cohort completion relative to the initial term of entry. The institutional goal is to attain a minimum annual graduation rate of 46%, aligning with or exceeding the eight-year HBCU average.</p>
        </div>
      </div>
      <div class="sa-goal">
        <div class="sa-stat"><span class="sa-stat-label">Retention Rate:</span><span class="sa-stat-num">68%</span></div>
        <div>
          <p>Southwestern Christian College measures retention using two distinct metrics: term-to-term persistence and (Fall-to-Fall) retention. Retention applies to students who maintain continuous enrollment with no break in attendance. The institution&rsquo;s benchmark goal is to attain an annual Fall-to-Fall retention rate of at least 71%.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section on-surface">
  <div class="container">
    <div class="sa-overall">
      {_data_table("Categories of Achievement", OVERALL, "Institution-wide graduation and retention rates by academic year")}
    </div>
    <div class="sa-programs">
{_program_blocks}
    </div>
  </div>
</section>

<section class="section on-paper">
  <div class="container sa-race">
    <div class="sa-program">
      <h3>Graduation by Race</h3>
      {_data_table("", GRADUATION_BY_RACE, "Graduation rates by race and academic year")}
    </div>
    <div class="sa-program">
      <h3>Retention by Race</h3>
      {_data_table("", RETENTION_BY_RACE, "Retention rates by race and academic year")}
    </div>
  </div>
</section>

<section class="section on-surface">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">IPEDS</p>
      <h2>Forms &amp; Downloads</h2>
    </div>
    <div class="sa-reports">
{_report_cards}
    </div>
  </div>
</section>
''')
