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
    <a class="btn btn-outline-dark" href="https://www.swcc.edu/_files/ugd/82aa45_cf30083804ec45a990f7f47ff07e3036.pdf" target="_blank" rel="noopener">Download Grant Flyer</a>
  </div>
</section>
''')

add("loans.html", "Loans", "Federal, state, and private loan options for Southwestern Christian College students.", f'''
{plain_hero("Financial Aid", "Loans", "Federal, state, and private options when scholarships and grants don&rsquo;t cover the full cost.")}
<section class="section on-paper">
  <div class="container prose">
    <h2>Federal Loans</h2>
    <h3>Subsidized</h3>
    <p>Requires demonstrated financial need. The government covers accruing interest while you&rsquo;re enrolled at least half-time, and for the first six months after graduation or withdrawal.</p>
    <h3>Unsubsidized</h3>
    <p>Available regardless of financial need. Interest begins accruing from the date of disbursement.</p>
    <h2>State Loans</h2>
    <p>The Texas College Access Loan (CAL) Program is an alternative loan for students who can&rsquo;t meet the full cost of attendance after exhausting other aid. Requires at least half-time enrollment and credit approval.</p>
    <h2>Private Loans</h2>
    <p>A supplement when federal aid doesn&rsquo;t fully cover cost. SwCC directs students to ELM Select, a neutral, non-recommended comparison of private lenders.</p>
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
