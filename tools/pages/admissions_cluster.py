from common import photo_hero, plain_hero, APPLY_URL, FAFSA_URL

RAM_PASS_URL = "https://lp.constantcontactpages.com/ev/reg/wy6gut4/lp/c2d87ad5-8e46-49d3-8e78-6da48310ed9e"

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


# ---------------------------------------------------------------- Admissions overview
add("admissions.html", "Admissions", "Admissions at Southwestern Christian College — how to apply, deadlines, and next steps toward becoming a RAM.", f'''
{photo_hero("Office of Admissions", "Your Future Starts Here.", "Thank you for considering Southwestern Christian College. Our Office of Admissions is ready to help freshman, transfer, and international students take the next step.", "assets/images/campus/graduates-group-stoles.jpg", "SwCC graduates in caps, gowns, and stoles")}
<section class="section on-paper">
  <div class="container">
    <div class="section-head center">
      <p class="eyebrow">Getting Started</p>
      <h2>Everything you need to apply.</h2>
    </div>
    <div class="grid grid-3">
      <div class="apply-card">
        <h3>How To Enroll</h3>
        <p>Due dates, required forms, and the documents every applicant needs to submit.</p>
        <a class="btn btn-outline-dark" href="how-to-enroll.html">View Steps</a>
      </div>
      <div class="apply-card">
        <h3>Tuition &amp; Fees</h3>
        <p>What it costs to become a RAM, and how financial aid fits in.</p>
        <a class="btn btn-outline-dark" href="tuition-fees.html">See Cost of Attendance</a>
      </div>
      <div class="apply-card">
        <h3>Admissions (International)</h3>
        <p>Requirements and F-1 visa documentation for international applicants.</p>
        <a class="btn btn-outline-dark" href="admissions-international.html">International Admissions</a>
      </div>
    </div>
  </div>
</section>
<section class="section on-dark">
  <div class="container quote-block">
    <p class="eyebrow on-dark">Ready to Become a RAM?</p>
    <h2 style="color:#fff; margin:16px 0 24px;">Submit your application today.</h2>
    <a class="btn btn-brass" href="{APPLY_URL}" target="_blank" rel="noopener">Apply Now</a>
  </div>
</section>
''')

# ---------------------------------------------------------------- How To Enroll
add("how-to-enroll.html", "How To Enroll", "How to apply to Southwestern Christian College in five steps: submit your application, transcripts, FAFSA, and enrollment documents, then visit campus and enroll.", f'''
{plain_hero("Admissions", "How To Enroll", "Our staff is ready to help freshman, transfer, and international students complete every step below.")}
<section class="section on-paper">
  <div class="container two-col">
    <div>
      <div class="steps">
        <div class="step">
          <span class="step-num" aria-hidden="true"></span>
          <div>
            <h3>Submit Application</h3>
            <p>Complete the <a href="https://www.swcc.edu/_files/ugd/0775cf_ecf226ff444146489895e96ee545f949.pdf" target="_blank" rel="noopener">General Application</a> and pay the $20 non-refundable application fee. Fall semester applications are due August 17; spring semester applications are due January 10.</p>
          </div>
        </div>
        <div class="step">
          <span class="step-num" aria-hidden="true"></span>
          <div>
            <h3>Submit Transcripts</h3>
            <p>Freshman applicants: submit an official high school transcript. Transfer applicants: submit transcripts from all colleges attended.</p>
          </div>
        </div>
        <div class="step">
          <span class="step-num" aria-hidden="true"></span>
          <div>
            <h3>Complete FAFSA <span style="color:var(--stone); font-weight:400;">(Code: 003618)</span></h3>
            <p>Apply for financial assistance using the <a href="{FAFSA_URL}" target="_blank" rel="noopener">FAFSA</a> and SwCC&rsquo;s school code <strong>003618</strong>.</p>
          </div>
        </div>
        <div class="step">
          <span class="step-num" aria-hidden="true"></span>
          <div>
            <h3>Submit Enrollment Documents</h3>
            <p>Complete your Medical Record, Academic Recommendation, Character Recommendation, and Residence Hall forms, along with an immunization record, a current 2x2 photograph, and the required 600-word essay.</p>
            <ul class="doc-list" style="margin-top:14px;">
              <li><a href="https://www.swcc.edu/_files/ugd/0775cf_ad8c95e8a294416a8bd743e4382e937f.pdf" target="_blank" rel="noopener">Medical Record <span class="tag">PDF</span></a></li>
              <li><a href="https://www.swcc.edu/_files/ugd/0775cf_79b963539b324290b4409d1536ef2f65.pdf" target="_blank" rel="noopener">Academic Recommendation <span class="tag">PDF</span></a></li>
              <li><a href="https://www.swcc.edu/_files/ugd/0775cf_48f0f9cb321c4bf3b4734a79b12d9e41.pdf" target="_blank" rel="noopener">Character Recommendation <span class="tag">PDF</span></a></li>
              <li><a href="https://www.swcc.edu/_files/ugd/0775cf_08fbb8858b444d59832669d232388e4c.pdf" target="_blank" rel="noopener">Residence Hall Form <span class="tag">PDF</span></a></li>
              <li><a href="http://swcc.edu/2017Required_Essay_Question.pdf" target="_blank" rel="noopener">Required Essay Question <span class="tag">PDF</span></a></li>
            </ul>
            <p style="margin-top:14px;">Prefer to mail your forms? Send them to: Southwestern Christian College, P.O. Box 10, Terrell, TX 75160.</p>
            <p>A $50 non-refundable dorm room deposit reserves your housing space.</p>
          </div>
        </div>
        <div class="step">
          <span class="step-num" aria-hidden="true"></span>
          <div>
            <h3>Visit Campus &amp; Enroll</h3>
            <p>Tour the campus, meet our faculty and staff, and complete your enrollment.</p>
          </div>
        </div>
      </div>
    </div>
    <aside class="side-card">
      <h4>Apply Now</h4>
      <p style="color:var(--stone); font-size:0.92rem;">Ready to submit? Start your application online.</p>
      <a class="btn btn-brass" href="{APPLY_URL}" target="_blank" rel="noopener">Apply Now</a>
      <h4 style="margin-top:24px;">Questions?</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">972-524-3341</a></dd>
        <dt>Email</dt><dd><a href="mailto:info@swcc.edu">info@swcc.edu</a></dd>
      </dl>
    </aside>
  </div>
</section>
<section class="section on-dark" id="tours">
  <div class="container quote-block">
    <p class="eyebrow on-dark">Campus Tours</p>
    <h2 style="color:#fff; margin:16px 0 20px;">See the campus for yourself.</h2>
    <p style="color:rgba(255,255,255,0.72); max-width:60ch; margin:0 auto 24px;">To schedule a group visit, email <a href="mailto:admissions@swcc.edu" style="color:#fff;">admissions@swcc.edu</a>. Individual tour scheduling will be available soon.</p>
    <a class="btn btn-brass" href="mailto:admissions@swcc.edu">Email Admissions</a>
  </div>
</section>
''')

# ---------------------------------------------------------------- Campus Housing
add("campus-housing.html", "Campus Housing", "Campus housing at Southwestern Christian College — modern, air-conditioned residence halls for men and women.", f'''
{photo_hero("Admissions", "Campus Housing", "Modern, air-conditioned residence halls, with separate facilities for men and women.", "assets/images/campus/mary-carpenter-hall.jpg", "Students touring Mary Carpenter Hall, a SwCC residence hall")}
<section class="section on-paper">
  <div class="container prose">
    <h2>SwCC Residence Halls</h2>
    <p>Southwestern Christian College houses students in modern, air-conditioned, two-story residence halls, with separate facilities for men and women. Each hall is built for comfortable, close-knit community living &mdash; the kind of shared experience that turns classmates into lifelong friends.</p>
    <p>A $50 non-refundable dorm room deposit reserves your space. See the <a href="how-to-enroll.html">How To Enroll</a> page for full application steps, or the <a href="tuition-fees.html">Tuition &amp; Fees</a> page for the full cost of attendance.</p>
    <a class="btn btn-outline-dark" href="how-to-enroll.html">Start Your Application</a>
  </div>
</section>
<section class="section section-tight on-surface">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Take a Look Inside</p>
      <h2>Life in the Halls</h2>
    </div>
    <div class="grid grid-3 photo-grid">
      <figure class="photo-card">
        <img src="assets/images/campus/residence-hall-common-room.jpg" alt="Residence hall common room with a television and seating">
        <figcaption>Common Room</figcaption>
      </figure>
      <figure class="photo-card">
        <img src="assets/images/campus/residence-hall-lounge.jpg" alt="Residence hall lounge with couches and a chair">
        <figcaption>Resident Lounge</figcaption>
      </figure>
      <figure class="photo-card">
        <img src="assets/images/campus/residence-hall-corridor.jpg" alt="Hallway of dorm rooms inside a SwCC residence hall">
        <figcaption>Residence Hall Corridor</figcaption>
      </figure>
    </div>
  </div>
</section>
''')

# ---------------------------------------------------------------- Tuition & Fees
add("tuition-fees.html", "Tuition & Fees", "Cost of attendance at Southwestern Christian College, including tuition, fees, and financial aid options.", f'''
{plain_hero("Admissions", "Tuition &amp; Fees", "The full cost of attendance, and how financial aid can help close the gap.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>Cost of Attendance</h2>
      <p>Your full, itemized Cost of Attendance &mdash; tuition, room, board, and fees &mdash; is published each year. Request the current breakdown from the Office of Admissions, or start with financial aid to see what SwCC can offer toward your total cost.</p>
      <div class="def-grid">
        <div><dt>Application Fee</dt><dd>$20 (domestic), non-refundable</dd></div>
        <div><dt>International Application Fee</dt><dd>$100, non-refundable</dd></div>
        <div><dt>Dorm Room Deposit</dt><dd>$50, non-refundable</dd></div>
        <div><dt>FAFSA School Code</dt><dd>003618</dd></div>
      </div>
      <a class="btn btn-outline-dark" href="contact.html">Request a Full Cost Breakdown</a>
    </div>
    <aside class="side-card">
      <h4>Financial Aid</h4>
      <p style="color:var(--stone); font-size:0.92rem;">Scholarships, grants, loans, and work study can all reduce your out-of-pocket cost.</p>
      <a class="btn btn-outline-dark" href="financial-aid.html">Visit Financial Aid</a>
    </aside>
  </div>
</section>
''')

# ---------------------------------------------------------------- Preview Day
add("preview-day.html", "Preview Day 2026", "Preview Day 2026 at Southwestern Christian College — see the campus, meet faculty, and imagine yourself as a RAM.", f'''
{photo_hero("Admissions Events", "Preview Day 2026", "Thank you for visiting &mdash; come see what makes SwCC home.", "assets/images/campus/entrance-sign-graduate.jpg", "A graduate poses at the Southwestern Christian College entrance sign")}
<section class="section on-paper">
  <div class="container prose">
    <p>Preview Day gives prospective students and families a firsthand look at campus &mdash; classrooms, residence halls, chapel, and the people who make SwCC feel like home. Download the full event flyer for this year&rsquo;s date, schedule, and registration details.</p>
    <a class="btn btn-outline-dark" href="https://www.swcc.edu/_files/ugd/82aa45_cf30083804ec45a990f7f47ff07e3036.pdf" target="_blank" rel="noopener">Download the Preview Day Flyer</a>
  </div>
</section>
''')

# ---------------------------------------------------------------- Admissions International
add("admissions-international.html", "Admissions (International)", "Admissions requirements for international students at Southwestern Christian College, including F-1 visa documentation.", f'''
{plain_hero("Admissions", "Admissions (International)", "Greetings, future international students &mdash; here is everything you need to apply.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>Step 1 &mdash; Due Dates</h2>
      <div class="def-grid">
        <div><dt>Fall Semester</dt><dd>August 17</dd></div>
        <div><dt>Spring Semester</dt><dd>January 10</dd></div>
      </div>
      <h2>Step 2 &mdash; Forms Required</h2>
      <p>Complete your <a href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?embedded=1&amp;application_form=40497&amp;source=65912" target="_blank" rel="noopener">International Application</a> online, plus the following forms:</p>
      <ul class="doc-list">
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_ad8c95e8a294416a8bd743e4382e937f.pdf" target="_blank" rel="noopener">Medical Record <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_79b963539b324290b4409d1536ef2f65.pdf" target="_blank" rel="noopener">Academic Recommendation <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_48f0f9cb321c4bf3b4734a79b12d9e41.pdf" target="_blank" rel="noopener">Character Recommendation <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_08fbb8858b444d59832669d232388e4c.pdf" target="_blank" rel="noopener">Residence Hall Form <span class="tag">PDF</span></a></li>
      </ul>
      <h2>Step 3 &mdash; Other Documents (F-1 Visa)</h2>
      <ul>
        <li>Freshman applicants: official high school transcript(s); transfer applicants: transcripts from all colleges attended</li>
        <li>Immunization record (copy of shot records)</li>
        <li>A current photograph (2x2 preferred)</li>
      </ul>
      <p>F-1 visa documentation:</p>
      <ul class="doc-list">
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_eb63a1980fe04b9989dce3496c4a3100.pdf" target="_blank" rel="noopener">F-1 Travel Handout <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_48d74e1834c34b988dee289b3d71fb87.pdf" target="_blank" rel="noopener">How to Get a SSN <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_79ee44ebc098455a9aedd16d1a24ef6e.pdf" target="_blank" rel="noopener">F-1 Employment Info <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_9eabb942b7e14af68f518ae2a8e5f273.pdf" target="_blank" rel="noopener">F-1 Registration Data Sheet <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_1669e01458aa4d0ba07196184246f166.pdf" target="_blank" rel="noopener">F-1 &ldquo;In&rdquo; Form <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_745d21920bda43da9567fd2967f6cb6f.pdf" target="_blank" rel="noopener">F-1 Transfer-Out Form <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_ac314197228149fa9e7c324a300ecd60.pdf" target="_blank" rel="noopener">I-20 Application <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_686dd7693cbc45a4b9e5be739b7b45ff.pdf" target="_blank" rel="noopener">I-20 Extension <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_6b38b466ff5d42c989edd8305f83ca62.pdf" target="_blank" rel="noopener">F-1 and I-20 Updates <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_21205e42076f4a1382f9a39af00e1d73.pdf" target="_blank" rel="noopener">RCL Application <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_ccf1986acb414fb7a7b4004c4654162c.pdf" target="_blank" rel="noopener">Financial Verification <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_8f5faa4a98854969b64984fe31e4e1a4.pdf" target="_blank" rel="noopener">Fast Fact Sheet <span class="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_4c66658664044876acfef830262ccc4f.pdf" target="_blank" rel="noopener">Letter from Admissions <span class="tag">PDF</span></a></li>
      </ul>
      <p><em>All scholarships, gifts, and awards for international students must be approved in writing by the President&rsquo;s office.</em></p>
      <h2>Step 4 &mdash; Fees</h2>
      <div class="def-grid">
        <div><dt>Application Fee</dt><dd>$100, non-refundable</dd></div>
        <div><dt>Dorm Room Deposit</dt><dd>$50, non-refundable</dd></div>
      </div>
      <p>Mailing address: P.O. Box 10, Terrell, TX 75160.</p>
    </div>
    <aside class="side-card">
      <h4>Download All Forms</h4>
      <p style="color:var(--stone); font-size:0.92rem;">Every F-1 document in one packet.</p>
      <a class="btn btn-brass" href="https://www.swcc.edu/_files/ugd/82aa45_916e6a63eb434a95bdcf942bd797c1d4.pdf" target="_blank" rel="noopener">Download Forms</a>
      <a class="btn btn-outline-dark" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?embedded=1&amp;application_form=40497&amp;source=65912" target="_blank" rel="noopener">Start International Application</a>
    </aside>
  </div>
</section>
''')

# ---------------------------------------------------------------- Admitted Students Next Steps
add("admitted-next-steps.html", "Next Steps for Admitted RAMs", "Congratulations, future RAM! Follow these steps to complete enrollment and prepare for your first semester at Southwestern Christian College.", f'''
{plain_hero("Admitted Students", "Congratulations, Future RAM!", "Welcome to the SwCC family. Follow these steps to complete your enrollment and prepare for your first semester.")}
<section class="section section-tight on-surface">
  <div class="container banner-figure">
    <img src="assets/images/campaign-bound-banner.png" alt="Admitted and Bound — you're in, you belong, you're a RAM">
  </div>
</section>
<section class="section on-paper">
  <div class="container">
    <div class="two-col">
      <div>
        <div class="steps">
          <div class="step">
            <span class="step-num" aria-hidden="true"></span>
            <div>
              <h3>Submit Your Final Documents</h3>
              <p>Provide your official transcripts, immunization records, and any remaining enrollment forms.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-num" aria-hidden="true"></span>
            <div>
              <h3>Apply for Financial Aid</h3>
              <p>Complete your FAFSA, any scholarship applications, and verification documents if requested.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-num" aria-hidden="true"></span>
            <div>
              <h3>Register for the Future RAM Summer Series</h3>
              <p>Earn your RAM Pass and complete important enrollment requirements before move-in.</p>
              <a class="btn btn-outline-dark" href="{RAM_PASS_URL}" target="_blank" rel="noopener" style="margin-top:14px;">Register Here</a>
            </div>
          </div>
          <div class="step">
            <span class="step-num" aria-hidden="true"></span>
            <div>
              <h3>Secure Housing</h3>
              <p>Complete your housing forms and confirm your room assignment.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-num" aria-hidden="true"></span>
            <div>
              <h3>Obtain Move-In Clearance</h3>
              <p>Students who complete the Future RAM Summer Series can receive move-in clearance before arrival.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-num" aria-hidden="true"></span>
            <div>
              <h3>Attend New Student RAM Orientation</h3>
              <p>Meet fellow students, faculty, and staff while learning about campus resources.</p>
              <span class="tag-soon">More details coming soon</span>
            </div>
          </div>
          <div class="step">
            <span class="step-num" aria-hidden="true"></span>
            <div>
              <h3>Become a RAM!</h3>
              <p>Move in, get involved, and start your academic journey.</p>
            </div>
          </div>
        </div>
      </div>
      <aside class="side-card">
        <h4>Need Assistance?</h4>
        <p style="color:var(--stone); font-size:0.92rem;">Contact the Admissions Office for personalized support throughout the enrollment process.</p>
        <dl>
          <dt>Phone</dt><dd><a href="tel:9725243341">972-524-3341</a></dd>
          <dt>Email</dt><dd><a href="mailto:admissions@swcc.edu">admissions@swcc.edu</a></dd>
        </dl>
      </aside>
    </div>
  </div>
</section>
''')
