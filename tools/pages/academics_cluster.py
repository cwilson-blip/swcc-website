from common import photo_hero, plain_hero

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


# ---------- 2026-27 Academic Calendar ----------
# (month, dates, weekday, event, kind)  kind: "" | "key" | "closed" | "observance"
CALENDAR_PDF = "assets/docs/swcc-academic-calendar-2026-27.pdf"

FALL_2026 = [
    ("July", "14&ndash;15", "Tue&ndash;Wed", "Faculty/Staff Institute", ""),
    ("July", "27", "Mon", "Dorms and Dining Hall open for athletes arriving on campus", ""),
    ("August", "7", "Fri", "Resident Assistants check-in (9:00 AM &ndash; 12:00 PM)", ""),
    ("August", "8", "Sat", "<strong>SUPER Saturday</strong> &mdash; a one-stop event to help students transition to SwCC and prepare for registration: submit outstanding admissions documents, review FAFSA and scholarships, understand tuition and fees, take ID photos, and receive room keys if living on campus.", "key"),
    ("August", "10&ndash;14", "Mon&ndash;Fri", "<strong>Ram Week</strong> &mdash; student orientation, welcoming and connecting all incoming new students", ""),
    ("August", "10", "Mon", "Faculty Meeting, 9:00 &ndash; 11:30 AM. Accuplacer Placement Exam for new students, 1:30 &ndash; 5:00 PM", ""),
    ("August", "11&ndash;12", "Tue&ndash;Wed", "New student advising/registration and Accuplacer Placement Exam, 9:00 AM &ndash; 12:00 PM and 1:30 &ndash; 5:00 PM", ""),
    ("August", "13", "Thu", "New student advising/registration, 9:00 AM &ndash; 12:00 PM and 1:30 &ndash; 5:00 PM. Accuplacer Placement Exam, 4:00 &ndash; 5:30 PM", ""),
    ("August", "14", "Fri", "Advising and Registration (new and returning students), 9:00 AM &ndash; 12:00 PM and 1:30 &ndash; 3:30 PM", ""),
    ("August", "17", "Mon", "<strong>Classes Begin</strong>. Late Registration begins (late registration fee applied). Last day to receive 100% of tuition and fees (80% schedule begins)", "key"),
    ("August", "21", "Fri", "Last Day of Late Registration", ""),
    ("September", "1", "Tue", "Census Day (12th day of classes)", ""),
    ("September", "4", "Fri", "Last day to remove an Incomplete &ldquo;I&rdquo; grade from Spring semester", ""),
    ("September", "7", "Mon", "Labor Day Holiday", "closed"),
    ("September", "11", "Fri", "Last day to receive 80% of tuition and fees (40% schedule begins)", ""),
    ("September", "18", "Fri", "Last day to receive 40% of tuition and fees (no refund of tuition and fees after this date)", ""),
    ("September", "15 &ndash; Oct 15", "", "Hispanic Heritage Month", "observance"),
    ("October", "1", "Thu", "Deadline to apply for Fall Graduation", ""),
    ("October", "5&ndash;8", "Mon&ndash;Thu", "<strong>Mid-Term Exams</strong>", "key"),
    ("October", "12&ndash;13", "Mon&ndash;Tue", "Fall Break", "closed"),
    ("October", "13", "Tue", "Mid-Term grades due", ""),
    ("November", "1&ndash;30", "", "National Native American Heritage Month", "observance"),
    ("November", "2", "Mon", "Pre-registration for Spring 2027", ""),
    ("November", "22", "Sun", "Southwestern Christian College Founder&rsquo;s Day", ""),
    ("November", "22&ndash;25", "Sun&ndash;Wed", "Eighty-Ninth Annual Lectureship", ""),
    ("November", "26&ndash;27", "Thu&ndash;Fri", "Thanksgiving Break", "closed"),
    ("November", "30", "Mon", "Classes resume", ""),
    ("November", "30 &ndash; Dec 4", "Mon&ndash;Fri", "Review Week", ""),
    ("December", "4", "Fri", "Last day to drop a course with a &ldquo;W&rdquo;", ""),
    ("December", "7&ndash;10", "Mon&ndash;Thu", "<strong>Final Exams</strong>", "key"),
    ("December", "11", "Fri", "Residence Halls and Dining Hall close at 5:00 PM", ""),
    ("December", "16", "Wed", "Final grades due", ""),
    ("December", "18", "Fri", "Christmas Break begins. College closes at 5:00 PM", "closed"),
]

SPRING_2027 = [
    ("January", "5", "Tue", "Residence Halls and Dining Hall open", ""),
    ("January", "5&ndash;8", "Tue&ndash;Fri", "<strong>Orientation for New Students</strong>", "key"),
    ("January", "5&ndash;6", "Tue&ndash;Wed", "Placement Testing (Accuplacer, 8:00 &ndash; 10:30 AM)", ""),
    ("January", "6", "Wed", "Faculty Meeting at 9:00 AM (virtual)", ""),
    ("January", "7&ndash;8", "Thu&ndash;Fri", "Registration for New Students", ""),
    ("January", "11", "Mon", "<strong>Classes Begin</strong>. $50.00 late registration fee effective. Last day to receive 100% of tuition and fees (80% schedule begins)", "key"),
    ("January", "18", "Mon", "Martin Luther King, Jr. Day Holiday", "closed"),
    ("January", "20", "Wed", "Last day of registration and adding classes", ""),
    ("January", "27", "Wed", "Census Day (12th day of classes)", ""),
    ("January", "29", "Fri", "Last day to submit incomplete assignments from Fall 2026. Last day to receive 80% of tuition and fees (40% schedule begins)", ""),
    ("February", "1&ndash;28", "", "Black History Month", "observance"),
    ("February", "12", "Fri", "Last day to receive 40% of tuition and fees (no refund of tuition and fees after this date)", ""),
    ("February", "15", "Mon", "Presidents&rsquo; Day Holiday", "closed"),
    ("March", "2&ndash;4", "Tue&ndash;Thu", "<strong>Mid-Semester Exams</strong>", "key"),
    ("March", "8&ndash;12", "Mon&ndash;Fri", "Spring Break", "closed"),
    ("March", "15", "Mon", "Classes resume", ""),
    ("March", "25", "Thu", "Test: May Graduates", ""),
    ("March", "26", "Fri", "Good Friday Holiday", "closed"),
    ("March", "28", "Sun", "Easter", ""),
    ("April", "10", "Sat", "<a href=\"preview-day.html\">Preview Day</a>", ""),
    ("April", "16", "Fri", "Last day to drop a course with a &ldquo;W&rdquo;", ""),
    ("April", "19&ndash;23", "Mon&ndash;Fri", "Review Week", ""),
    ("April", "27&ndash;30", "Tue&ndash;Fri", "<strong>Final Exams</strong>", "key"),
    ("May", "1&ndash;31", "", "Asian/Pacific American Heritage Month", "observance"),
    ("May", "4", "Tue", "May graduates&rsquo; and seniors&rsquo; grades due in Populi by noon", ""),
    ("May", "5", "Wed", "Cinco de Mayo", "observance"),
    ("May", "8", "Sat", "<strong>SwCC 76th Commencement</strong>, 10:30 AM", "key"),
    ("May", "9", "Sun", "Dining Hall and Residence Halls close at 5:00 PM", ""),
    ("May", "10", "Mon", "Deadline for submission of all grades in Populi", ""),
]


def _calendar_term(title, span, rows):
    out, month = [], None
    for m, dates, day, event, kind in rows:
        if m != month:
            if month is not None:
                out.append("</ol>")
            out.append(f'<h4 class="cal-month">{m}</h4>\n<ol class="cal-list">')
            month = m
        tag = '<span class="cal-tag">No Classes</span>' if kind == "closed" else ""
        cls = f' class="cal-{kind}"' if kind else ""
        day_html = f'<span class="cal-day">{day}</span>' if day else ""
        out.append(f'<li{cls}><span class="cal-date">{dates}{day_html}</span><span class="cal-event">{event}{tag}</span></li>')
    out.append("</ol>")
    body = "\n".join(out)
    return f'''<div class="cal-term">
      <header class="cal-term-head"><h3>{title}</h3><span>{span}</span></header>
      {body}
    </div>'''


ACADEMIC_CALENDAR = f'''
<section class="section on-surface" id="academic-calendar">
  <div class="container">
    <div class="cal-head">
      <div>
        <p class="eyebrow">2026&ndash;27 Academic Year</p>
        <h2>Academic Calendar</h2>
      </div>
      <a class="btn btn-outline-dark" href="{CALENDAR_PDF}" target="_blank" rel="noopener">Download PDF</a>
    </div>
    <dl class="cal-keys">
      <div><dt>Fall classes begin</dt><dd>Aug 17, 2026</dd></div>
      <div><dt>Fall final exams</dt><dd>Dec 7&ndash;10</dd></div>
      <div><dt>Spring classes begin</dt><dd>Jan 11, 2027</dd></div>
      <div><dt>76th Commencement</dt><dd>May 8, 2027</dd></div>
    </dl>
    <div class="cal-terms">
      {_calendar_term("Fall 2026", "July &ndash; December", FALL_2026)}
      {_calendar_term("Spring 2027", "January &ndash; May", SPRING_2027)}
    </div>
    <p class="cal-disclaimer">The administration reserves the right to make changes to the Academic Calendar.</p>
  </div>
</section>
'''


# ---------- Degree plan course breakdowns ----------
# Transferred verbatim from https://www.swcc.edu/degree-plans (Oct 2026).
# On that page the hours column is a separate list read top-to-bottom alongside the courses.
# Natural Science corrected from 9 to 8 (typo on the old site, confirmed by SwCC Oct 2026).
CORE_COURSES_AA = [
    ("Bible (121, 122, 221, 222)", "8"),
    ("CS 131, Introduction to Computer Science", "3"),
    ("English (131, 132, 3 hours Literature)", "9"),
    ("Foreign Language (141, 142)", "8"),
    ("History (131, 132, 234)", "9"),
    ("Humanities (231 or 232)", "3"),
    ("Mathematics (MTH 135 or above)", "3"),
    ("Physical Education (Activity)", "2"),
    ("PSY 110, Freshman Orientation", "1"),
    ("UJI 110, UJIMA", "1"),
    ("PSY 131 or SOC 131", "3"),
    ("Speech 131", "3"),
    ("Electives", "9"),
]

CORE_COURSES_AS = [
    ("Bible (121, 122, 221, 222)", "8"),
    ("CS 131, Introduction to Computer Science", "3"),
    ("English (131, 132, 3 hours Literature)", "9"),
    ("History (131, 132, 234)", "9"),
    ("Humanities (231 or 232)", "3"),
    ("Mathematics (MTH 135 or above)", "3"),
    ("Natural Science", "8"),
    ("Physical Education (Activity)", "2"),
    ("PSY 110, Freshman Orientation", "1"),
    ("UJI 110, UJIMA", "1"),
    ("PSY 131 or SOC 131", "3"),
    ("Speech 131", "3"),
    ("Electives", "9"),
]

CORE_COURSES_BS_RELIGIOUS_STUDIES = [
    ("Bible (121, 122, 221, 222)", "8"),
    ("CS 131, Introduction to Computer Science", "3"),
    ("English (131, 132, 3 hours Literature)", "9"),
    ("History (131, 132, 234)", "9"),
    ("Humanities (231 or 232)", "3"),
    ("Mathematics (MTH 135 or above)", "3"),
    ("Natural Science", "8"),
    ("Physical Education (Activity)", "2"),
    ("PSY 110, Freshman Orientation", "1"),
    ("UJI 110, UJIMA", "1"),
    ("PSY 131 or SOC 131", "3"),
    ("Speech 131", "3"),
    ("*Religion", "22"),
    ("*Bible and Ministry", "27"),
    ("*Internship", "2"),
    ("*Minor1", "18"),
    ("*Elective", "9"),
]

# From the 2024-2025 Academic Catalog (Associate of Science - Criminal Justice).
CORE_COURSES_AS_CRIMINAL_JUSTICE = [
    ("Bible (121, 122, 221, 222)", "8"),
    ("CS 131, Introduction to Computer Science", "3"),
    ("English (131, 132, 3 hours Literature)", "9"),
    ("History (131, 132, 234)", "9"),
    ("Humanities (231 or 232)", "3"),
    ("Mathematics (MTH 135 or above)", "3"),
    ("Natural Science", "8"),
    ("Physical Education (Activity)", "2"),
    ("PSY 110, Freshman Orientation", "1"),
    ("UJI 110, UJIMA", "1"),
    ("PSY 131 or SOC 131", "3"),
    ("Speech 131", "3"),
    ("Program Electives**", "9"),
]

# **Program Electives (9 hours) — Criminal Justice course group, 2026-2027 catalog year
# (carried forward from the 2024-2025 definition), provided by SwCC Oct 2026.
CJ_PROGRAM_ELECTIVES = [
    ("CMJ131 Introduction to Criminal Justice", "3"),
    ("CMJ132 Introduction to Law Enforcement", "3"),
    ("CMJ231 Corrections", "3"),
    ("CMJ232 Juvenile Delinquency", "3"),
    ("CMJ233 Criminology", "3"),
    ("CMJ234 Homeland Security", "3"),
]


def _electives_table(rows, caption):
    body = "\n".join(f'<tr><td>{c}</td><td>{h}</td></tr>' for c, h in rows)
    return f'''<table class="dp-table dp-electives">
      <caption class="sr-only">{caption}</caption>
      <thead><tr><th scope="col">Course</th><th scope="col">Hours</th></tr></thead>
      <tbody>
{body}
      </tbody>
    </table>'''


CORE_COURSES_BS_INTERDISCIPLINARY_STUDIES = [
    ("Bible (121, 122, 221, 222)", "8"),
    ("Bible (300/400 level)", "12"),
    ("CS 131, Introduction to Computer Science", "3"),
    ("English (131, 132, 3 hours Literature)", "9"),
    ("History (131, 132, 234)", "9"),
    ("Humanities (231 or 232)", "3"),
    ("Mathematics (MTH 135 or above)", "3"),
    ("Natural Science", "8"),
    ("Physical Education (Activity)", "2"),
    ("PSY 110, Freshman Orientation", "1"),
    ("UJI 110, UJIMA", "1"),
    ("PSY 131 or SOC 131", "3"),
    ("Speech 131", "3"),
    ("Concentration I", "15"),
    ("Concentration II", "15"),
    ("*Concentration III", "15"),
    ("Electives", "10"),
]


def _degree_table(rows, total, caption):
    body = "\n".join(f'<tr><td>{c}</td><td>{h}</td></tr>' for c, h in rows)
    return f'''<table class="dp-table">
      <caption class="sr-only">{caption}</caption>
      <thead><tr><th scope="col">Courses</th><th scope="col">Hours</th></tr></thead>
      <tbody>
{body}
      </tbody>
      <tfoot><tr><th scope="row">Total Hours</th><td>{total}</td></tr></tfoot>
    </table>'''

add("academics.html", "Academics", "Academics at Southwestern Christian College — Associate and Bachelor's degree programs built around the whole person.", f'''
{photo_hero("Academics", "Educating the Whole Person", "Southwestern Christian College is committed to excellence in Christian education, with a curriculum geared to the development of mind, character, and spirit together.", "assets/images/campus/classroom-teaching.jpg", "A professor teaching students in a small classroom")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>Our Academic Programs</h2>
      <ul>
        <li>Associate of Arts</li>
        <li>Associate of Science</li>
        <li>Associate of Science in Criminal Justice</li>
        <li>Bachelor of Science in Religious Studies</li>
        <li>Bachelor of Science in Interdisciplinary Studies</li>
      </ul>
      <a class="btn btn-outline-dark" href="degree-plans.html">View Degree Plans</a>

      <h2>Associate Degree Requirements</h2>
      <ul>
        <li>Meet all entrance requirements and file a degree plan</li>
        <li>Earn 62 semester hours, excluding Basic Studies hours</li>
        <li>Maintain a cumulative GPA of 2.20</li>
        <li>Complete all required courses for your degree plan</li>
        <li>Complete a minimum of 45 semester hours at SwCC</li>
        <li>Take the ETS Proficiency Profile Exit Exam</li>
        <li>Satisfy all financial obligations and submit a formal graduation application by the sophomore-year deadline</li>
        <li>Maintain good moral character and participate in graduation exercises unless excused</li>
      </ul>

      <h2>Bachelor&rsquo;s Degree Requirements</h2>
      <ul>
        <li>Meet all entrance requirements and file a degree plan</li>
        <li>Complete a minimum of 53 semester hours of general education</li>
        <li>Complete a minimum of 78 semester hours required for the B.S.</li>
        <li>Complete a minimum of 95 semester hours at SwCC (up to 32 hours accepted from a school of preaching or unaccredited institution)</li>
        <li>Earn at least 131 hours, excluding Basic Studies, with a cumulative GPA of 2.40</li>
        <li>Complete two 1-hour internships, after 35 Bible/Religious Education hours and a 2.00 GPA</li>
        <li>Take the Religious Studies Division Exit Exam and the ETS Proficiency Profile Exit Exam</li>
        <li>Satisfy all financial obligations and submit a formal graduation application by the senior-year deadline</li>
      </ul>
    </div>
    <aside class="side-card">
      <h4>Explore Further</h4>
      <ul>
        <li><a href="#academic-calendar">2026&ndash;27 Academic Calendar</a></li>
        <li><a href="degree-plans.html">Degree Plans</a></li>
        <li><a href="online-classes.html">Online Classes</a></li>
        <li><a href="academic-catalogs.html">Academic Catalogs</a></li>
        <li><a href="financial-aid.html">Financial Aid</a></li>
      </ul>
    </aside>
  </div>
</section>
{ACADEMIC_CALENDAR}''')

add("degree-plans.html", "Degree Plans", "Degree plans and graduation requirements for Associate and Bachelor's programs at Southwestern Christian College.", f'''
{plain_hero("Academics", "Degree Plans", "Graduation requirements for every program of study at SwCC.")}
<section class="section on-paper">
  <div class="container prose">
    <h2>Associate of Arts &mdash; 62 Hours</h2>
    <p>Required coursework spans Bible, Computer Science, English, Foreign Language, History, Humanities, Mathematics, Physical Education, Psychology/Sociology, and Speech, plus electives.</p>
    {_degree_table(CORE_COURSES_AA, "62", "Associate of Arts courses and hours")}
    <h2>Associate of Science &mdash; 62 Hours</h2>
    <p>Mirrors the Associate of Arts, substituting Natural Science coursework for the Foreign Language requirement.</p>
    {_degree_table(CORE_COURSES_AS, "62", "Associate of Science courses and hours")}
    <h2>Associate of Science in Criminal Justice &mdash; 62 Hours</h2>
    <p>The Associate of Science foundation paired with nine hours of Criminal Justice program electives. <a href="criminal-justice.html">Learn about the Criminal Justice program</a>.</p>
    {_degree_table(CORE_COURSES_AS_CRIMINAL_JUSTICE, "62", "Associate of Science in Criminal Justice courses and hours")}
    <h3 class="dp-sub">**Program Electives (9 hours)</h3>
    {_electives_table(CJ_PROGRAM_ELECTIVES, "Criminal Justice program electives")}
    <h2>Religious Studies Bachelor of Science &mdash; 131 Hours</h2>
    <p>Builds on the associate-level foundation with specialized coursework in Religion, Bible, and Ministry, an internship component, a minor, and additional electives.</p>
    {_degree_table(CORE_COURSES_BS_RELIGIOUS_STUDIES, "131", "Religious Studies Bachelor of Science courses and hours")}
    <h2>Interdisciplinary Studies Bachelor of Science &mdash; 120 Hours</h2>
    <p>Builds on the general education foundation with upper-level Bible coursework, three 15-hour concentrations, and electives.</p>
    {_degree_table(CORE_COURSES_BS_INTERDISCIPLINARY_STUDIES, "120", "Interdisciplinary Studies Bachelor of Science courses and hours")}
    <a class="btn btn-outline-dark" href="academic-catalogs.html">See Full Course Catalogs</a>
  </div>
</section>
''')

add("online-classes.html", "Online Classes", "Online class information for Southwestern Christian College students.", f'''
{plain_hero("Academics", "Online Classes", "")}
<section class="section on-paper">
  <div class="container prose">
    <p>For current information on online course offerings, formats, and schedules, please contact the Office of Admissions directly.</p>
    <a class="btn btn-outline-dark" href="mailto:admissions@swcc.edu">Email admissions@swcc.edu</a>
  </div>
</section>
''')

add("academic-catalogs.html", "Academic Catalogs", "Download the Southwestern Christian College academic catalog for any recent year.", f'''
{plain_hero("Academics", "Academic Catalogs", "Full course descriptions, degree requirements, and academic policy, by year.")}
<section class="section on-paper">
  <div class="container">
    <ul class="doc-list">
      <li><a href="assets/docs/academic-catalog-2024-2025.pdf" target="_blank" rel="noopener">2024&ndash;2025 Academic Catalog <span class="tag">PDF</span></a></li>
      <li><a href="assets/docs/academic-catalog-2023-2024.pdf" target="_blank" rel="noopener">2023&ndash;2024 Academic Catalog <span class="tag">PDF</span></a></li>
      <li><a href="assets/docs/academic-catalog-2022-2023.pdf" target="_blank" rel="noopener">2022&ndash;2023 Academic Catalog <span class="tag">PDF</span></a></li>
      <li><a href="assets/docs/academic-catalog-2019-2021.pdf" target="_blank" rel="noopener">2019&ndash;2021 Academic Catalog <span class="tag">PDF</span></a></li>
    </ul>
  </div>
</section>
''')
