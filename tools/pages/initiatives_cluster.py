from common import plain_hero

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


add("initiatives.html", "Initiatives", "Institutional initiatives at Southwestern Christian College: Institutional Effectiveness, the CARES Act, and Title IX.", f'''
{plain_hero("Initiatives", "College Initiatives", "The programs and policies that keep SwCC accountable to its students and community.")}
<section class="section on-paper">
  <div class="container">
    <div class="grid grid-3 plaque-grid">
      <a class="plaque" href="institutional-effectiveness.html" style="display:block;"><h4>Institutional Effectiveness</h4><p>Data-informed decision making for continuous improvement.</p></a>
      <a class="plaque" href="cares-act.html" style="display:block;"><h4>CARES Act Reporting</h4><p>HEERF emergency student aid disclosures.</p></a>
      <a class="plaque" href="title-ix.html" style="display:block;"><h4>Title IX</h4><p>Non-discrimination policy and reporting resources.</p></a>
    </div>
  </div>
</section>
''')

add("institutional-effectiveness.html", "Institutional Effectiveness", "The Office of Institutional Effectiveness at Southwestern Christian College supports data-informed decision making and accreditation.", f'''
{plain_hero("Initiatives", "The Office of Institutional Effectiveness", "Data-informed decision making that leads to institutional improvement and enhanced student learning.")}
<section class="section on-paper">
  <div class="container prose">
    <p>The Office of Institutional Effectiveness is a team of professionals who support the college-wide effort to promote data-informed decision making. The office assists the campus with accreditation, assessment, analysis, training, and information dissemination.</p>
    <p>Institutional Effectiveness means the systematic collection, analysis, organization, warehousing, and dissemination of quantitative and qualitative information concerning the characteristics and performance of the institution.</p>
    <h2>Our Continuous Improvement Cycle</h2>
    <ol>
      <li>Define and revise strategic goals</li>
      <li>Develop and refine assessment measures</li>
      <li>Collect and analyze data</li>
      <li>Leverage results for enhancements</li>
    </ol>
    <h2>Three Strategic Goals</h2>
    <h3>Academic Excellence</h3>
    <p>Knowledge, intellectual growth, and scholarly work across the liberal arts, including a stronger first-year experience and writing culture.</p>
    <h3>Access and Affordability</h3>
    <p>Recruiting diverse, talented students and expanding opportunity through recruitment and financial aid initiatives.</p>
    <h3>A Thriving and Inclusive College Community</h3>
    <p>Student well-being programs, diverse hiring, and long-term athletics planning.</p>
  </div>
</section>
''')

add("cares-act.html", "CARES Act Reporting", "CARES Act HEERF emergency student aid reporting for Southwestern Christian College.", f'''
{plain_hero("Initiatives", "CARES Act &mdash; Reporting", "")}
<section class="section on-paper">
  <div class="container prose">
    <p>In accordance with Section 18004(e) of the Coronavirus Aid, Relief, and Economic Security Act (&ldquo;CARES Act&rdquo;), Southwestern Christian College discloses the following.</p>
    <p>SwCC signed the Certification and Agreement under Section 18004(a)(1) to receive HEERF funds, including HEERF III (CRRSAA) funds, of which 50% is designated for emergency student grants.</p>
    <div class="callout">
      <p>The College received <strong>$437,977.00</strong> in funding from the U.S. Department of Education to award emergency financial aid grants to students. No awards were made as an emergency financial aid grant for the quarter of January 1, 2024 through March 31, 2024.</p>
    </div>
    <p>Eligibility covers domestic undergraduate, degree-seeking students enrolled in Spring 2024 with demonstrated need per their FAFSA Expected Family Contribution. Funds may be used for housing, food, health care, counseling, childcare, and tuition.</p>
    <h2>Quarterly HEERF Reports</h2>
    <p>Reports are published quarterly and available upon request from the Business Office, covering each quarter from September 30, 2020 through the current reporting period.</p>
  </div>
</section>
''')

add("title-ix.html", "Title IX", "Title IX non-discrimination policy, reporting contacts, and resources at Southwestern Christian College.", f'''
{plain_hero("Initiatives", "Title IX of the Education Amendments of 1972", "")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>Non-Discrimination Statement</h2>
      <p>Southwestern Christian College is committed to providing a workplace and educational environment, and other benefits, programs, and activities, that are free from sex discrimination. This commitment extends to race, color, national or ethnic origin, religion, age, veteran status, disabilities, and sexual orientation.</p>
      <p>&ldquo;No person in the United States shall, on the basis of sex, be excluded from participation in, be denied the benefits of, or be subjected to discrimination under any program or activity receiving Federal financial assistance.&rdquo;</p>
      <h2>Amnesty Policy</h2>
      <p>Good-faith reporters of gender-based violence are not sanctioned for related alcohol or drug conduct violations.</p>
      <h2>Report an Incident</h2>
      <p>Incidents can be reported to the Title IX Coordinator through the SwCC Incident Report Form, or directly to Campus Police.</p>
    </div>
    <aside class="side-card">
      <h4>Reporting Contacts</h4>
      <dl>
        <dt>SwCC Campus Police (24/7)</dt><dd><a href="tel:6828002408">(682) 800-2408</a> or ext. 131</dd>
        <dt>Terrell Police Department</dt><dd><a href="tel:4694742700">(469) 474-2700</a></dd>
        <dt>Women&rsquo;s Center of Terrell</dt><dd><a href="tel:9725635555">(972) 563-5555</a></dd>
        <dt>Domestic Violence Hotline</dt><dd><a href="tel:2149411991">(214) 941-1991</a></dd>
        <dt>Crisis Center</dt><dd><a href="tel:9034549999">(903) 454-9999</a></dd>
      </dl>
    </aside>
  </div>
</section>
''')
