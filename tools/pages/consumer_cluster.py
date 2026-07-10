from common import plain_hero

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


add("consumer-information.html", "Consumer Information", "Consumer information disclosures required of Southwestern Christian College under the Higher Education Act.", f'''
{plain_hero("Consumer Information", "Consumer Information", "“Right to Know” source information, disclosed per the Higher Education Act of 2008. Paper copies of all information are available upon request.")}
<section class="section on-paper">
  <div class="container">
    <h2 style="margin-bottom:8px;">Academic Information &amp; Policies</h2>
    <ul class="doc-list">
      <li><a href="academics.html">Academic Programs</a></li>
      <li><a href="https://www.sacscoc.org" target="_blank" rel="noopener">Accreditation &mdash; SACSCOC</a></li>
      <li><a href="institutional-effectiveness.html">Institutional Assessment</a></li>
      <li><a href="student-achievement.html">Student Achievement</a></li>
      <li><a href="financial-aid.html">Applying for Aid</a></li>
      <li><a href="tuition-fees.html">Cost of Attendance</a></li>
    </ul>
    <h2 style="margin:40px 0 8px;">General Institution Information</h2>
    <ul class="doc-list">
      <li><a href="resources.html">Campus Facilities &amp; Map</a></li>
    </ul>
    <h2 style="margin:40px 0 8px;">Intercollegiate Athletics</h2>
    <ul class="doc-list">
      <li><a href="https://www.swccramathletics.com/landing/index" target="_blank" rel="noopener">Athletics</a></li>
    </ul>
    <h2 style="margin:40px 0 8px;">Safety Information</h2>
    <ul class="doc-list">
      <li><a href="campus-safety.html">Fire and Safety Report</a></li>
    </ul>
    <h2 style="margin:40px 0 8px;">Student Rights</h2>
    <ul class="doc-list">
      <li><a href="grievance-policy.html">Student Grievance Policy &amp; Procedure</a></li>
    </ul>
    <h2 style="margin:40px 0 16px;">More Consumer Information</h2>
    <div class="grid grid-4 plaque-grid">
      <a class="plaque" href="resources.html" style="display:block;"><h4>Resources</h4></a>
      <a class="plaque" href="default-prevention.html" style="display:block;"><h4>Default Prevention</h4></a>
      <a class="plaque" href="directory.html" style="display:block;"><h4>Campus Directory</h4></a>
      <a class="plaque" href="policy-statements.html" style="display:block;"><h4>Policy Statements</h4></a>
      <a class="plaque" href="grievance-policy.html" style="display:block;"><h4>Student Grievance Policy</h4></a>
      <a class="plaque" href="services.html" style="display:block;"><h4>Our Services</h4></a>
      <a class="plaque" href="library.html" style="display:block;"><h4>Doris Johnson Library</h4></a>
      <a class="plaque" href="student-success.html" style="display:block;"><h4>Center for Student Success</h4></a>
      <a class="plaque" href="campus-renovations.html" style="display:block;"><h4>Campus Renovations</h4></a>
    </div>
  </div>
</section>
''')

add("resources.html", "Resources", "Campus resources at Southwestern Christian College: location, directory, calendar, and catalog.", f'''
{plain_hero("Consumer Information", "Resources", "")}
<section class="section on-paper">
  <div class="container">
    <div class="grid grid-4 plaque-grid">
      <div class="plaque"><h4>Location</h4><p>200 Bowser Circle, Terrell, Texas 75160.</p></div>
      <a class="plaque" href="directory.html" style="display:block;"><h4>Directory</h4><p>Find any office or staff extension.</p></a>
      <div class="plaque"><h4>Calendar</h4><p>Academic year calendar, available on request.</p></div>
      <div class="plaque"><h4>Catalog</h4><p>Public class schedule via the Populi student portal.</p></div>
    </div>
  </div>
</section>
''')

add("default-prevention.html", "Default Prevention", "Student loan default prevention resources at Southwestern Christian College.", f'''
{plain_hero("Consumer Information", "Default Prevention", "The Default Prevention Department wants to help you bring your account current.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>Borrower Responsibilities</h2>
      <ul>
        <li>Repay your loan regardless of employment or completion status</li>
        <li>Notify your lender before your due date if you&rsquo;re unable to pay</li>
        <li>Make minimum monthly payments on time</li>
        <li>Notify your lender within 10 days of an address, name, or employment change</li>
        <li>Notify your lender within 10 days of a transfer or enrollment change</li>
      </ul>
      <h2>Consequences of Default (270+ Days Past Due)</h2>
      <ul>
        <li>Immediate full balance due</li>
        <li>Credit bureau reporting</li>
        <li>Federal tax refund seizure and wage garnishment</li>
        <li>Ineligibility for future financial aid</li>
        <li>Collection agency referral or civil suit, with borrower responsible for collection costs and attorney fees</li>
        <li>Possible bar on state professional license renewal</li>
      </ul>
      <h2>Borrower Options</h2>
      <ul>
        <li>Deferment (economic hardship, in-school, unemployment, or disability)</li>
        <li>Forbearance (mandatory or economic hardship)</li>
        <li>Consolidation</li>
        <li>Alternative payment plans (income-sensitive, graduated, or lowered payment)</li>
      </ul>
    </div>
    <aside class="side-card">
      <h4>Default Prevention Department</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">(972) 524-3341 ext. 135</a></dd>
        <dt>Fax</dt><dd>(972) 563-7133</dd>
        <dt>Toll Free</dt><dd>1-800-925-9357</dd>
      </dl>
    </aside>
  </div>
</section>
''')

DIRECTORY_ROWS = [
    ("101", "Gloria Rice", "Admissions / Comptroller&rsquo;s Office", "gloria.rice@swcc.edu"),
    ("102", "Shirley Hudson", "Librarian", "shirley.hudson@swcc.edu"),
    ("106", "Lois Walker", "Admin. Assistant, Business Office", "lois.walker@swcc.edu"),
    ("109", "Drew Johnson", "Facilities Manager", "drew.johnson@swcc.edu"),
    ("110", "Dwayne Pugh", "Dean of Chapel", "dwayne.pugh@swcc.edu"),
    ("111", "Yalonda Coats", "Police Commissioner", "yalonda.coats@swcc.edu"),
    ("112", "Ben Foster", "Dean of Student Affairs", "ben.foster@swcc.edu"),
    ("114", "Alva Baker", "CFO", "alva.baker@swcc.edu"),
    ("117", "Kenny Fox", "Comptroller", "kenny.fox@swcc.edu"),
    ("124", "Robert Morrow", "Supervisor, Men&rsquo;s Residence", "robert.morrow@swcc.edu"),
    ("125", "Charles Hanks", "Kitchenette, Student Union", "charles.hanks@swcc.edu"),
    ("128", "Dustin White", "Dining Hall Manager", "dustin.white@swcc.edu"),
    ("129", "Kecia Baker-Morris", "Asst. Director of Financial Aid / Title III", ""),
    ("130", "Vernesha Cathey", "Athletic Director", "vernesha.cathey@swcc.edu"),
    ("&mdash;", "Registrar&rsquo;s Office", "Registrar", "registrar@swcc.edu"),
]


def _directory_rows():
    rows = []
    for ext, name, title, email in DIRECTORY_ROWS:
        email_html = f'<a href="mailto:{email}">{email}</a>' if email else ""
        rows.append(f'<tr><td>{ext}</td><td>{name}</td><td>{title}</td><td>{email_html}</td></tr>')
    return "".join(rows)


add("directory.html", "Campus Directory", "Campus directory and staff extensions for Southwestern Christian College.", f'''
{plain_hero("Consumer Information", "Campus Directory", "Main number: 972-524-3341")}
<section class="section on-paper">
  <div class="container">
    <p class="scroll-hint">Swipe to see the full directory &rarr;</p>
    <div class="table-scroll">
      <table class="info-table">
        <thead><tr><th>Ext.</th><th>Name</th><th>Title</th><th>Email</th></tr></thead>
        <tbody>{_directory_rows()}</tbody>
      </table>
    </div>
  </div>
</section>
''')

add("policy-statements.html", "Policy Statements", "Intellectual Property Policy for Southwestern Christian College.", f'''
{plain_hero("Consumer Information", "Policy Statements", "Intellectual Property Policy")}
<section class="section on-paper">
  <div class="container prose">
    <p>Southwestern Christian College supports the development, production, and dissemination of intellectual property by its faculty, staff, and students &mdash; including computer programs, literary works, musical works, and distance-education course development.</p>
    <h2>Student-Created IP</h2>
    <p>Work created by students remains the sole and exclusive property of the student author or inventor, except where the student voluntarily transfers that property to the college, or where the work was created as part of assigned college employment.</p>
    <h2>Staff-Created IP</h2>
    <p>Work tied to job duties is the sole and exclusive property of the college. Staff retain rights to work created outside their job duties or through independent professional development.</p>
    <h2>Teaching Materials</h2>
    <p>Syllabi, assignments, and tests remain faculty property, though the college retains the right to use them internally. Faculty must preserve institutional rights when transferring copyright to outside publishers.</p>
    <h2>Governance</h2>
    <p>The Faculty Senate administers and monitors these standards, conducts periodic review of the policy, and resolves related disputes.</p>
  </div>
</section>
''')

GRIEVANCE_FORM_URL = "https://swcc.populiweb.com/router/forms/respond/8/671dfab93639f74b7208b3300058e356"

add("grievance-policy.html", "Student Grievance Policy", "Grievance Policies & Procedure for Southwestern Christian College students, including how to file a formal grievance against a faculty or staff member.", f'''
{plain_hero("Consumer Information", "Grievance Policies &amp; Procedure", "Student Grievance Policy")}
<section class="section section-tight on-surface">
  <div class="container">
    <div class="callout" style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:20px; margin:0;">
      <div>
        <h4 style="margin-bottom:6px;">Ready to file a grievance?</h4>
        <p style="color:var(--stone); font-size:0.95rem; margin:0;">Complete the Grievance/Complaint Form online through Populi.</p>
      </div>
      <a class="btn btn-brass" href="{GRIEVANCE_FORM_URL}" target="_blank" rel="noopener">File a Grievance</a>
    </div>
  </div>
</section>
<section class="section on-paper">
  <div class="container prose">
    <h2>Student Grievance Policy</h2>
    <p>The purpose of this policy is to set out the guidelines and standards for the filing of a formal grievance by a student against a faculty or staff member. A grievance may arise out of a decision reached or action taken in the course of official duty by a member of the faculty or staff. Any student has the right to file a grievance. The SwCC Grievance Policy is applicable to complaints or grievances associated with discrimination; disability accommodations; harassment; grade disputes such as academic probation, suspension and/or academic dismissal, academic dishonesty; absences; disciplinary actions for social offenses, and Financial Aid.</p>

    <h2>Administrative Procedures</h2>
    <p>All offices should maintain a log of student grievances using SG form-003. The log sheet shall record:</p>
    <ul>
      <li>The tracking number of the student grievance;</li>
      <li>Date and the time grievance was reported;</li>
      <li>Student name;</li>
      <li>Summary of grievance; and</li>
      <li>Satisfactory or unsatisfactory resolution of the case by the student.</li>
    </ul>
    <p>Tracking number codes should use a six digit number with the following prefix in the first two numbers:</p>
    <div class="def-grid">
      <div><dt>Academic Affairs</dt><dd>22 _ _ _ _</dd></div>
      <div><dt>Student Affairs</dt><dd>33 _ _ _ _</dd></div>
      <div><dt>Financial Affairs</dt><dd>44 _ _ _ _</dd></div>
      <div><dt>President&rsquo;s Office</dt><dd>55 _ _ _ _</dd></div>
    </div>
    <p>The Vice President of Student Affairs/Dean of Students is responsible for centralizing the log of student grievances from all offices. To facilitate this process, each office will send to the Vice President of Student Affairs Office their monthly log of student grievances either by email or hard copy.</p>
    <p>In addition to documenting a log of student grievances, the President&rsquo;s Office, the Business Office, Vice President of Academic Affairs, and Vice President of Student Affairs will have blank copies of the Student Grievance Forms to issue to a student when a complaint is to be filed.</p>
    <p>Each office will investigate the student complaint as well as follow-up with a student within three business days.</p>
    <p>If a student does not return to a particular office to request a response to the investigation, it is the responsibility of the particular office to follow up with the student via email, phone, or conference.</p>
    <p>Each office will document each student&rsquo;s satisfaction or dissatisfaction with the resolution.</p>
  </div>
</section>
<section class="section on-surface">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">How To File</p>
      <h2>Student Procedures for Filing Grievances</h2>
      <p class="lede">Prior to filing a formal grievance, a student has the right to engage in informal discourse or negotiation privately with the faculty or staff member, or the immediate supervisor of the staff member or academic dean of the faculty member. If this avenue has been exhausted without providing a satisfactory conclusion, and the student desires to file a formal grievance, the following course of action should be taken.</p>
    </div>
    <div class="callout">
      <p><strong>Note:</strong> All student grievances and all steps in the grievance process must be documented on the Grievance/Complaint Form (GCF). Digital and hard copies shall be kept in each of the appropriate offices of the institution.</p>
    </div>
    <div class="steps">
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>The GCF shall be available and on file in the offices of each unit on the campus of the institution. The form shall also be available as a downloadable, &ldquo;fill-in&rdquo; PDF file on the school website.</p></div>
      </div>
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>Students shall follow all instructions on the form.</p></div>
      </div>
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>Student complaints shall be concise and to the point of the complaint.</p></div>
      </div>
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>Students should use the &ldquo;Complaint Origination Date&rdquo; to record when the event occurred that brought on the complaint.</p></div>
      </div>
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>Students shall complete and submit the form to the appropriate office within 14 days of the incident.</p></div>
      </div>
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>The office shall assign a tracking number in the gray box in the upper right-hand corner of the form and inform the student of the number.</p></div>
      </div>
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>Students shall return to the appropriate office and request a response if one has not been received within three (3) business days.</p></div>
      </div>
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>After the above action has taken place, students shall initial the form at the appropriate place to indicate that the issue has been resolved or not resolved, and whether further action is requested.</p></div>
      </div>
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>Provision is made to resubmit the form if the response is unsatisfactory to the student.</p></div>
      </div>
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>If the student and the parties involved cannot arrive at a satisfactory resolution, the student may submit the form to a higher authority and document such action on the form.</p></div>
      </div>
      <div class="step">
        <span class="step-num" aria-hidden="true"></span>
        <div><p>The student should submit the form to the office of the President ONLY after all other options have been exhausted.</p></div>
      </div>
    </div>
    <div class="btn-row" style="margin-top:36px;">
      <a class="btn btn-brass" href="{GRIEVANCE_FORM_URL}" target="_blank" rel="noopener">File a Grievance</a>
    </div>
  </div>
</section>
''')

add("services.html", "Our Services", "Campus services at Southwestern Christian College: campus safety, the Center for Student Success, and more.", f'''
{plain_hero("Consumer Information", "Our Services", "Safety, Security, and Supervision is our priority.")}
<section class="section on-paper">
  <div class="container">
    <div class="grid grid-3 plaque-grid">
      <a class="plaque" href="campus-safety.html" style="display:block;"><h4>Campus Safety</h4><p>24/7 campus police, TCOLE-certified since 2018.</p></a>
      <a class="plaque" href="student-success.html" style="display:block;"><h4>Center for Student Success</h4><p>Tutorials, counseling, and workshops.</p></a>
      <a class="plaque" href="library.html" style="display:block;"><h4>Doris Johnson Library</h4><p>Over 26,000 volumes and growing.</p></a>
      <a class="plaque" href="default-prevention.html" style="display:block;"><h4>Default Prevention</h4><p>Helping students keep loans out of default.</p></a>
      <div class="plaque"><h4>Student Support Services</h4><p>Federally funded tutorials, counseling, and structured learning support.</p></div>
    </div>
  </div>
</section>
''')

add("library.html", "Doris Johnson Library", "The Doris Johnson Library at Southwestern Christian College holds over 26,000 volumes in the Hogan-Steward Learning Center.", f'''
{plain_hero("Consumer Information", "Doris Johnson Library", "Named for the college&rsquo;s head librarian, housed in the Hogan-Steward Learning Center.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <p>The Doris Johnson Library sits west of the campus entrance, in a facility built in 1974 and expanded by 1,800 square feet in a 1988 renovation &mdash; 5,000 square feet in total.</p>
      <p>The collection contains over 26,000 volumes, with subscriptions to more than 190 nationally recognized magazines, journals, and newspapers, alongside microforms, CD-ROMs, and electronic databases. Special collections include extensive Bible and Religious Studies holdings and an African American Studies Collection reflecting SwCC&rsquo;s HBCU heritage.</p>
    </div>
    <aside class="side-card">
      <h4>Services</h4>
      <ul>
        <li>Online library catalog</li>
        <li>Library orientation programs</li>
        <li>Internet access &amp; online databases</li>
        <li>Microfiche/microfilm reader &amp; printer</li>
        <li>Books on tape</li>
      </ul>
    </aside>
  </div>
</section>
''')

add("student-success.html", "Center for Student Success", "The Center for Student Success at Southwestern Christian College offers tutorials, counseling, and workshops.", f'''
{plain_hero("Consumer Information", "Center for Student Success", "A place where amazing things get done.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <p>The Center for Student Success offers the skill sets essential for earning a college degree &mdash; note-taking instruction, study skills training, time management coaching, test-taking strategies, structured motivational learning experiences, and peer tutoring.</p>
    </div>
    <aside class="side-card">
      <h4>Director</h4>
      <dl>
        <dt>Name</dt><dd>Kecia Baker</dd>
        <dt>Phone</dt><dd><a href="tel:9725243341">(972) 524-3341</a></dd>
        <dt>Email</dt><dd><a href="mailto:Kecia.Baker@swcc.edu">Kecia.Baker@swcc.edu</a></dd>
        <dt>Location</dt><dd>Science Building</dd>
      </dl>
    </aside>
  </div>
</section>
''')

add("campus-renovations.html", "Campus Renovations", "Ongoing campus renovation projects at Southwestern Christian College.", f'''
{plain_hero("Consumer Information", "Campus Renovations", "Rebuilding and renewing the campus, one project at a time.")}
<section class="section on-paper">
  <div class="container">
    <div class="grid grid-4 plaque-grid">
      <div class="plaque"><h4>Administration Building</h4><p>Final Phase &amp; Phase 1</p></div>
      <div class="plaque"><h4>GKF Performing Arts Center</h4></div>
      <div class="plaque"><h4>G.P. Bowser Memorial Gymnasium</h4><p>Phase 1</p></div>
      <div class="plaque"><h4>Men&rsquo;s Residence Hall</h4></div>
      <div class="plaque"><h4>Women&rsquo;s Residence Hall</h4><p>Phase 1 &amp; 2</p></div>
      <div class="plaque"><h4>Round House</h4><p>Phase 3</p></div>
      <div class="plaque"><h4>Student Union Building</h4><p>Phase 1 &amp; 3</p></div>
      <div class="plaque"><h4>Entrance &amp; Circle</h4></div>
      <div class="plaque"><h4>Guest Housing</h4><p>Phase 3</p></div>
      <div class="plaque"><h4>Health &amp; Wellness Center</h4></div>
      <div class="plaque"><h4>Library Roof</h4><p>Phase 1 &amp; 2</p></div>
    </div>
  </div>
</section>
''')

add("campus-safety.html", "Campus Safety", "Campus Safety and Police at Southwestern Christian College — Clery Act reporting and emergency contacts.", f'''
{plain_hero("Consumer Information", "Campus Safety", "Safety, Security, and Supervision is our priority.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <p>The SwCC Campus Police Department was approved by the State of Texas and activated on October 4, 2018 through the Texas Commission on Law Enforcement (TCOLE). All campus police officers are TCOLE-certified and commissioned by the department, serving as the primary law enforcement agency responsible for the care, custody, and control of SwCC students, staff, and supporters.</p>
      <p>In accordance with the Jeanne Clery Disclosure of Campus Security Policy and Campus Crime Statistics Act of 1998, the Campus Police Department keeps a rolling 60-day crime log of all reported incidents on or near college property.</p>
      <h2>Annual Security &amp; Fire Safety Reports</h2>
      <ul class="doc-list">
        <li><a href="contact.html">2023 Report</a></li>
        <li><a href="contact.html">2022 Report</a></li>
        <li><a href="contact.html">2021 Report</a></li>
        <li><a href="contact.html">2020 Report</a></li>
      </ul>
    </div>
    <aside class="side-card">
      <h4>SwCC Campus Police</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">972.524.3341 ext. 131</a></dd>
        <dt>24/7 Line</dt><dd><a href="tel:6828002408">682.800.2408</a></dd>
        <dt>Email</dt><dd><a href="mailto:SwCCPD@SwCC.edu">SwCCPD@SwCC.edu</a></dd>
        <dt>Chief of Police</dt><dd>Dr. Yalonda Coats, PhD</dd>
        <dt>Location</dt><dd>Timothy Hunt Science Building, 1st Floor</dd>
      </dl>
      <a class="btn btn-outline-dark" href="http://www.swccpolice.org/" target="_blank" rel="noopener">Anonymous Reporting Portal</a>
    </aside>
  </div>
</section>
''')
