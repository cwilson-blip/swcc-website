from common import photo_hero, plain_hero, APPLY_URL, FAFSA_URL

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


add("financial-aid.html", "Financial Aid Office", "The Financial Aid Office at Southwestern Christian College — scholarships, grants, loans, and work study.", f'''
{plain_hero("Financial Aid", "The Financial Aid Office", "Welcome to the experience of your lifetime. We&rsquo;re here to help you find every dollar of support you qualify for.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <p>The Office of Financial Aid partners with families to determine cost-share and available aid. Once accepted, check your email and Populi account regularly for your award status and any outstanding requirements.</p>
      <p>Grant awards are accepted automatically. For loans, log into Populi to accept the loan, complete a Master Promissory Note, and finish loan entrance counseling.</p>
      <div class="fafsa-code" style="margin-top:8px;">
        <span>SwCC FAFSA School Code</span>
        <strong>003618</strong>
      </div>
      <a class="btn btn-outline-dark" href="{FAFSA_URL}" target="_blank" rel="noopener">Complete Your FAFSA</a>
      <h2 style="margin-top:48px;">Explore Your Options</h2>
      <div class="grid grid-4" style="margin-top:8px;">
        <a class="plaque" href="scholarships.html" style="display:block;"><h4>Scholarships</h4></a>
        <a class="plaque" href="grants.html" style="display:block;"><h4>Grants</h4></a>
        <a class="plaque" href="loans.html" style="display:block;"><h4>Loans</h4></a>
        <a class="plaque" href="work-study.html" style="display:block;"><h4>Work Study</h4></a>
      </div>
      <div class="btn-row" style="margin-top:28px;">
        <a class="btn btn-outline-dark" href="verification-forms.html">Verification Forms</a>
        <a class="btn btn-outline-dark" href="assets/docs/satisfactory-academic-progress-policy.pdf" target="_blank" rel="noopener">SAP Policy</a>
        <a class="btn btn-outline-dark" href="assets/docs/sap-appeal-form.pdf" target="_blank" rel="noopener">SAP Appeal Form</a>
      </div>
    </div>
    <aside class="side-card">
      <h4>Financial Aid Office</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">(972) 524-3341 ext. 129</a></dd>
        <dt>Email</dt><dd><a href="mailto:Financialaid@swcc.edu">Financialaid@swcc.edu</a></dd>
        <dt>Hours</dt><dd>Mon&ndash;Thu 9am&ndash;5pm, Fri 9am&ndash;4pm</dd>
        <dt>Location</dt><dd>Timothy Hunt Science Building</dd>
        <dt>Mailing Address</dt><dd>P.O. Box 10, Terrell, TX 75160, Attn: Financial Aid Office</dd>
      </dl>
      <a class="btn btn-brass" href="{APPLY_URL}" target="_blank" rel="noopener">Apply Now</a>
    </aside>
  </div>
</section>
''')

add("verification-forms.html", "Verification Forms", "Financial aid verification forms for Southwestern Christian College students: verification worksheets, non-tax filer forms, dependency override, homeless verification, and enrollment history.", f'''
{plain_hero("Financial Aid", "Verification Forms", "Forms to complete if your FAFSA is selected for verification.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <p>If your Free Application for Federal Student Aid (FAFSA) is selected for verification, the Financial Aid Office will let you know which of these forms to complete and return.</p>
      <ul class="doc-list">
        <li><a href="assets/docs/verification-worksheet-v1-2018-19.pdf" target="_blank" rel="noopener">2018&ndash;2019 Institutional Verification Worksheet (V1) <span class="tag">PDF</span></a></li>
        <li><a href="assets/docs/verification-worksheet-v4-2018-19.pdf" target="_blank" rel="noopener">2018&ndash;2019 Institutional Verification Worksheet (V4) <span class="tag">PDF</span></a></li>
        <li><a href="assets/docs/verification-worksheet-v5-2018-19.pdf" target="_blank" rel="noopener">2018&ndash;2019 Institutional Verification Worksheet (V5) <span class="tag">PDF</span></a></li>
        <li><a href="assets/docs/household-resources-verification-2017-18.pdf" target="_blank" rel="noopener">2017&ndash;2018 Household Resources Verification (Low Income Documentation) <span class="tag">PDF</span></a></li>
        <li><a href="assets/docs/non-tax-filer-verification-student-2017-18.pdf" target="_blank" rel="noopener">Verification of Income for Non-Tax Filer &mdash; Student (2017&ndash;18) <span class="tag">PDF</span></a></li>
        <li><a href="assets/docs/non-tax-filer-verification-parent-2017-18.pdf" target="_blank" rel="noopener">Verification of Income for Non-Tax Filer &mdash; Parent (2017&ndash;18) <span class="tag">PDF</span></a></li>
        <li><a href="assets/docs/late-filers-instructions-2018-19.pdf" target="_blank" rel="noopener">Late Filers Instructions: 2018&ndash;2019 Verification of 2016 Income Information for Individuals with Unusual Circumstances <span class="tag">PDF</span></a></li>
        <li><a href="assets/docs/dependency-override-request-form.pdf" target="_blank" rel="noopener">Dependency Override Request <span class="tag">PDF</span></a></li>
        <li><a href="assets/docs/homeless-verification-form.pdf" target="_blank" rel="noopener">Homeless or Risk of being Homeless Verification Form <span class="tag">PDF</span></a></li>
        <li><a href="assets/docs/enrollment-history-verification-form.pdf" target="_blank" rel="noopener">Enrollment History Verification Form <span class="tag">PDF</span></a></li>
      </ul>
      <a class="btn btn-outline-dark" href="financial-aid.html" style="margin-top:32px;">Back to Financial Aid</a>
    </div>
    <aside class="side-card">
      <h4>Financial Aid Office</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">(972) 524-3341 ext. 129</a></dd>
        <dt>Email</dt><dd><a href="mailto:Financialaid@swcc.edu">Financialaid@swcc.edu</a></dd>
        <dt>Hours</dt><dd>Mon&ndash;Thu 9am&ndash;5pm, Fri 9am&ndash;4pm</dd>
        <dt>Location</dt><dd>Timothy Hunt Science Building</dd>
        <dt>Mailing Address</dt><dd>P.O. Box 10, Terrell, TX 75160, Attn: Financial Aid Office</dd>
      </dl>
    </aside>
  </div>
</section>
''')

add("scholarships.html", "Scholarships", "Scholarship opportunities at Southwestern Christian College, from academic and ministerial awards to athletic and music scholarships.", f'''
{photo_hero("Financial Aid", "Scholarship Opportunities", "Awards for academics, ministry, music, athletics, and regional legacy &mdash; built to recognize the RAMs who earn them.", "assets/images/campus/graduates-group-stoles.jpg", "SwCC graduates wearing scholarship stoles")}
<section class="section on-paper">
  <div class="container">
    <h2 style="margin-bottom:24px;">Institutional Scholarships</h2>
    <div class="grid grid-4 plaque-grid">
      <div class="plaque"><span class="plaque-amount">$1,000</span><h4>Academic Scholarship</h4><p>Per semester, 3.5 GPA or higher.</p></div>
      <div class="plaque"><span class="plaque-amount">$1,000</span><h4>Chorus Scholarship</h4><p>Section leaders up to $1,000; non-section leaders $750, per semester.</p></div>
      <div class="plaque"><span class="plaque-amount">$2,000</span><h4>Ministerial Scholarship</h4><p>Per semester, for students pursuing ministry and Religious Studies.</p></div>
      <div class="plaque"><span class="plaque-amount">$2,000</span><h4>Presidential Scholarship</h4><p>Per semester, 3.7 GPA or higher, for student leaders.</p></div>
    </div>
    <h2 style="margin:48px 0 24px;">Special &amp; Regional Scholarships</h2>
    <div class="grid grid-3 plaque-grid">
      <div class="plaque"><span class="plaque-amount">$2,000</span><h4>Abraham &amp; Nancy Jones Gray</h4><p>For residents of Alabama or the District of Columbia.</p></div>
      <div class="plaque"><span class="plaque-amount">$2,000</span><h4>Bay Workers Memorial Fund</h4><p>For residents of the Bay Area or Northern California.</p></div>
      <div class="plaque"><span class="plaque-amount">$2,000</span><h4>Legacy Scholarship</h4><p>For first- or second-generation family members of SwCC graduates.</p></div>
      <div class="plaque"><span class="plaque-amount">$2,000</span><h4>Annie Mae Davis Endowed</h4><p>For first- or second-generation family members of SwCC graduates.</p></div>
      <div class="plaque"><span class="plaque-amount">$4,000</span><h4>Charles D. Gaskin Ministerial</h4><p>For aspiring ministerial students.</p></div>
      <div class="plaque"><span class="plaque-amount">$2,000</span><h4>J.S. Winston Sound Doctrine</h4><p>For aspiring ministerial students.</p></div>
      <div class="plaque"><span class="plaque-amount">$4,000</span><h4>Local Incentive Scholarship</h4><p>For residents of Terrell and the surrounding area.</p></div>
    </div>
    <h2 style="margin:48px 0 24px;">Athletic &amp; Program Scholarships</h2>
    <div class="grid grid-3 plaque-grid">
      <div class="plaque"><h4>Athletic Scholarships</h4><p>For men&rsquo;s and women&rsquo;s basketball, volleyball, and track, per NJCAA eligibility.</p></div>
      <div class="plaque"><h4>Grants in Aid</h4><p>$1,000 academic grants for incoming freshmen and sophomores with a 3.70 GPA; a $300/semester Presidential Incentive discount for a 3.0 GPA.</p></div>
      <div class="plaque"><h4>Program Scholarships</h4><p>Available for Criminal Justice and Interdisciplinary Studies students.</p></div>
    </div>
    <a class="btn btn-outline-dark" href="contact.html">Request a Scholarship Application</a>
  </div>
</section>
''')

add("grants.html", "Grants", "Grant programs available to Southwestern Christian College students, including FSEOG, Texas Equalization Grant, and Pell Grant.", f'''
{plain_hero("Financial Aid", "Grants", "Need-based support that doesn&rsquo;t need to be repaid.")}
<section class="section on-paper">
  <div class="container prose">
    <h2>Federal Supplemental Educational Opportunity Grant (FSEOG)</h2>
    <p>Priority goes to students with the lowest Student Aid Index (SAI) combined with Pell Grant eligibility &mdash; those demonstrating exceptional financial need.</p>
    <h2>Texas Equalization Grant (TEG)</h2>
    <p>For Texas residents with demonstrated financial need, enrolled in at least 9 credit hours. Funding is limited, so apply early.</p>
    <h2>Pell Grant</h2>
    <p>For students with exceptional financial need per the FAFSA. Award amount varies with enrolled credit hours, and usage is capped at 12 semesters of enrollment or upon earning a bachelor&rsquo;s degree.</p>
  </div>
</section>
''')

add("loans.html", "Loans", "Federal, state, and private loan options for Southwestern Christian College students, including federal borrowing limits for dependent and independent students.", f'''
{plain_hero("Financial Aid", "Loans", "Federal, state, and private options when scholarships and grants don&rsquo;t cover the full cost.")}
<section class="section on-paper">
  <div class="container prose">
    <h2>Federal Loans</h2>

    <h3>Subsidized Loans</h3>
    <p>Students are not responsible for interest on loan while enrolled in half-time or more credit hours, and for the first six months after graduation or withdrawing from school.</p>
    <ul>
      <li>Students must demonstrate financial need.</li>
      <li>The government pays the interest while the student is enrolled in half-time credit hours or more and for the first six months after graduating or withdrawing from school.</li>
    </ul>

    <h3>Unsubsidized Loans</h3>
    <p>Unlike the subsidized loan interest is accruing on the loan during enrollment and continues after graduation or withdrawing from school.</p>
    <ul>
      <li>Students are eligible for loan regardless of financial need.</li>
      <li>Interest on loan begins accruing from the date of disbursement.</li>
    </ul>

    <h3>Dependent Students</h3>
    <div class="loan-table-wrap">
      <table class="loan-table">
        <caption class="sr-only">Federal loan borrowing limits for dependent students</caption>
        <thead><tr><th scope="col">Year</th><th scope="col">Total Annual Borrowing limit</th><th scope="col">Subsidized loan limits</th><th scope="col">Total Amount (if dependent parent is denied parent plus loan)</th></tr></thead>
        <tbody>
          <tr><th scope="row">First-year undergraduate</th><td>5500</td><td>3500 (2000 - unsub)</td><td>9500</td></tr>
          <tr><th scope="row">Second-year undergraduate</th><td>6500</td><td>4500 (2000 - unsub)</td><td>10500</td></tr>
          <tr><th scope="row">Third-year Undergraduate and beyond</th><td>7500</td><td>5500 (2000 - unsub)</td><td>12500</td></tr>
        </tbody>
      </table>
    </div>

    <h3>Independent Students</h3>
    <div class="loan-table-wrap">
      <table class="loan-table">
        <caption class="sr-only">Federal loan borrowing limits for independent students</caption>
        <thead><tr><th scope="col">Year</th><th scope="col">Total Annual Borrowing limit</th><th scope="col">Subsidized loan limits</th></tr></thead>
        <tbody>
          <tr><th scope="row">First-year undergraduate</th><td>9500</td><td>3500 (6000 - unsub)</td></tr>
          <tr><th scope="row">Second-year Undergraduate</th><td>10500</td><td>4500 (6000 - unsub)</td></tr>
          <tr><th scope="row">Third-year Undergraduate and beyond</th><td>12500</td><td>5500 (7000 - unsub)</td></tr>
        </tbody>
      </table>
    </div>

    <h2>State</h2>
    <h3>State of Texas CAL Loan &mdash; College Access Loan Program</h3>
    <p>Alternative education loan made to students by the state for students who are unable to meet the cost of attendance after exhausting other awarded aid. Must be enrolled at least half-time. Credit approval is required.</p>

    <h2>Private Loans</h2>
    <p>Private or what is commonly referred to as alternative loans are typically used when a student&rsquo;s financial aid package &mdash; including grants, scholarships, and federal loans &mdash; doesn&rsquo;t fully cover the cost of attendance. These loans should only be considered after all federal loans options have been explored, as federal loans usually offer lower interest rates and more flexible repayment terms.</p>
    <p>Southwestern Christian College is prohibited from recommending any particular lender, so with that being said, the college uses <a href="https://www.elmselect.com/v4/" target="_blank" rel="noopener">ELM Select</a>, a neutral platform that allows students and parents to compare lenders and loan products. <a href="https://www.elmselect.com/v4/" target="_blank" rel="noopener">Click on the link to view the lender list.</a> The lenders are selected based on the quality of their products and services for students. Please keep in mind this list is provided as a resource. Parents and students are free to choose from any lender that best suits their needs.</p>
    <a class="btn btn-brass" href="https://www.elmselect.com/v4/" target="_blank" rel="noopener">View the ELM Select Lender List</a>
  </div>
</section>
''')

add("work-study.html", "Work Study", "The Federal Work-Study Program at Southwestern Christian College — on-campus jobs paired with financial need.", f'''
{plain_hero("Financial Aid", "Work Study", "On-campus work experience, paired with the aid you&rsquo;ve already qualified for.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>The Federal Work-Study Program</h2>
      <p>A federally funded, need-based aid program that helps cover educational expenses while giving students real on-campus work experience and professional development.</p>
      <h2>Eligibility</h2>
      <ul>
        <li>U.S. citizen, permanent resident, or eligible non-citizen per FAFSA/USCIS standards</li>
        <li>Demonstrated financial need</li>
        <li>Satisfactory academic progress, maintained annually</li>
        <li>Enrolled at least half-time (6+ credit hours)</li>
      </ul>
      <h2>Restrictions</h2>
      <ul>
        <li>Only one work-study position at a time</li>
        <li>No working during scheduled class or exam times</li>
        <li>No supervision by relatives</li>
        <li>Cannot combine work study with another campus job</li>
        <li>Maximum of 20 hours per week</li>
      </ul>
    </div>
    <aside class="side-card">
      <h4>Award Amounts</h4>
      <p>Maximum annual award: <strong>$2,000</strong> ($1,000 per term). Earnings cannot exceed the awarded amount.</p>
      <h4 style="margin-top:20px;">State Work Study</h4>
      <p style="color:var(--stone); font-size:0.92rem;">SwCC does not currently offer a state-funded work-study program.</p>
    </aside>
  </div>
</section>
''')
