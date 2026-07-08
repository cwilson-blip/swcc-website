from common import photo_hero, plain_hero

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


add("academics.html", "Academics", "Academics at Southwestern Christian College — Associate and Bachelor's degree programs built around the whole person.", f'''
{photo_hero("Academics", "Educating the Whole Person", "Southwestern Christian College is committed to excellence in Christian education, with a curriculum geared to the development of mind, character, and spirit together.", "assets/images/campus/classroom-teaching.jpg", "A professor teaching students in a small classroom")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>Our Academic Programs</h2>
      <ul>
        <li>Associate of Arts</li>
        <li>Associate of Science</li>
        <li>Bachelor of Science in Religious Studies</li>
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
        <li><a href="degree-plans.html">Degree Plans</a></li>
        <li><a href="online-classes.html">Online Classes</a></li>
        <li><a href="academic-catalogs.html">Academic Catalogs</a></li>
        <li><a href="financial-aid.html">Financial Aid</a></li>
      </ul>
    </aside>
  </div>
</section>
''')

add("degree-plans.html", "Degree Plans", "Degree plans and graduation requirements for Associate and Bachelor's programs at Southwestern Christian College.", f'''
{plain_hero("Academics", "Degree Plans", "Graduation requirements for every program of study at SwCC.")}
<section class="section on-paper">
  <div class="container prose">
    <h2>Associate of Arts &mdash; 62 Hours</h2>
    <p>Required coursework spans Bible, Computer Science, English, Foreign Language, History, Humanities, Mathematics, Physical Education, Psychology/Sociology, and Speech, plus electives.</p>
    <h2>Associate of Science &mdash; 62 Hours</h2>
    <p>Mirrors the Associate of Arts, substituting Natural Science coursework for the Foreign Language requirement.</p>
    <h2>Religious Studies Bachelor of Science &mdash; 131 Hours</h2>
    <p>Builds on the associate-level foundation with specialized coursework in Religion, Bible, and Ministry, an internship component, a minor, and additional electives.</p>
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
      <li><a href="https://www.swcc.edu/_files/ugd/82aa45_3e7b95121dbc4225b2f034d20f389c17.pdf" target="_blank" rel="noopener">2024&ndash;2025 Academic Catalog <span class="tag">PDF</span></a></li>
      <li><a href="https://www.swcc.edu/_files/ugd/82aa45_dfc7d371ac2e4d57aaff5036d10a1643.pdf" target="_blank" rel="noopener">2023&ndash;2024 Academic Catalog <span class="tag">PDF</span></a></li>
      <li><a href="https://www.swcc.edu/_files/ugd/82aa45_7c760a3ba12c48fc86f36945e8d04fdc.pdf" target="_blank" rel="noopener">2022&ndash;2023 Academic Catalog <span class="tag">PDF</span></a></li>
      <li><a href="https://www.swcc.edu/_files/ugd/82aa45_3d001c69665f473789bb54e8504f7232.pdf" target="_blank" rel="noopener">2019&ndash;2021 Academic Catalog <span class="tag">PDF</span></a></li>
    </ul>
  </div>
</section>
''')
