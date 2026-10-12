from common import photo_hero, plain_hero, ATHLETICS_URL, APPLY_URL

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


add("programs.html", "Campus Life & Programs", "Programs and campus life at Southwestern Christian College — Criminal Justice, the Upper Room Studios, athletics, and the A Cappella Chorus.", f'''
{photo_hero("Programs", "Campus Life &amp; Programs", "A choice of clubs and organizations for your pleasure and on-campus networking.", "assets/images/campus/gym-community-event.jpg", "Community gathering in the campus gymnasium")}
<section class="section on-paper">
  <div class="container">
    <div class="grid grid-2 plaque-grid">
      <a class="plaque" href="criminal-justice.html" style="display:block;">
        <h4>Criminal Justice</h4>
        <p>An associate degree preparing ethical, faith-grounded leaders for careers in public service.</p>
      </a>
      <a class="plaque" href="studio.html" style="display:block;">
        <h4>The Upper Room Studios</h4>
        <p>A hybrid recording facility built around an SSL Origin 32 console, open for booked sessions.</p>
      </a>
      <a class="plaque" href="{ATHLETICS_URL}" target="_blank" rel="noopener" style="display:block;">
        <h4>Athletics</h4>
        <p>NJCAA Region 5 basketball, volleyball, track &amp; field, soccer, and cross country.</p>
      </a>
      <a class="plaque" href="chorus.html" style="display:block;">
        <h4>A Cappella Chorus</h4>
        <p>Campus social life through music, friendship, and performance.</p>
      </a>
    </div>
  </div>
</section>
''')

add("criminal-justice.html", "Criminal Justice", "Earn an Associate Degree in Criminal Justice at Southwestern Christian College — faith-based, ethics-driven preparation for careers in law enforcement, corrections, courts, and public safety.", f'''
<section class="page-hero-plain cj-hero">
  <div class="container">
    <p class="eyebrow eyebrow-invert">Programs &middot; Associate Degree</p>
    <h1>Criminal Justice</h1>
    <p class="cj-tagline">Today&rsquo;s Students. <em>Tomorrow&rsquo;s Guardians of Justice.</em></p>
    <ul class="cj-motto" aria-label="Program motto">
      <li>Learn</li><li>Lead</li><li>Serve</li><li>Protect</li>
    </ul>
  </div>
</section>

<section class="cj-poster-band">
  <div class="container">
    <figure class="cj-poster">
      <img src="assets/images/campus/criminal-justice-guardians-poster.jpg" alt="Three SwCC Criminal Justice students walk across campus toward a gold shield showing the scales of justice and silhouetted officers. Text reads: Today&rsquo;s Students, Tomorrow&rsquo;s Guardians of Justice &mdash; Learn, Lead, Serve, Protect &mdash; with Micah 6:8.">
    </figure>
  </div>
</section>

<section class="section on-paper cj-intro">
  <div class="container two-col">
    <div class="prose">
      <p class="eyebrow">Why Choose Criminal Justice at SwCC?</p>
      <h2 style="margin-top:14px;">More than a badge. A calling.</h2>
      <p>A career in criminal justice is more than earning a badge or enforcing laws &mdash; it is answering a calling to protect communities, defend constitutional rights, serve with integrity, and lead with compassion. At Southwestern Christian College (SwCC), students receive an education that blends academic excellence, Christian values, ethical leadership, and practical criminal justice knowledge to prepare them for meaningful careers in public service.</p>
      <p>Southwestern Christian College&rsquo;s mission is to develop future leaders through a holistic education grounded in moral, spiritual, and academic excellence. That philosophy aligns naturally with the criminal justice profession, where <strong>character is just as important as competence.</strong></p>
    </div>
    <aside class="side-card">
      <h4>Program at a Glance</h4>
      <dl>
        <dt>Credential</dt><dd>Associate Degree in Criminal Justice</dd>
        <dt>Campus</dt><dd>Terrell, Texas</dd>
        <dt>Pathways</dt><dd>Enter the workforce or transfer to a bachelor&rsquo;s program</dd>
        <dt>Scholarships</dt><dd><a href="scholarships.html">Program scholarships available</a></dd>
      </dl>
      <a class="btn btn-brass" href="{APPLY_URL}" target="_blank" rel="noopener">Apply Now</a>
      <a class="btn btn-outline-dark" href="degree-plans.html">View Degree Plans</a>
    </aside>
  </div>
</section>

<section class="section on-dark">
  <div class="container cj-split">
    <div>
      <p class="eyebrow">Why Criminal Justice Matters</p>
      <h2 style="margin-top:14px;">Justice for all takes people prepared for all of it.</h2>
      <p style="margin-top:18px;">America needs criminal justice professionals who are educated, ethical, culturally competent, and committed to justice for all. Today&rsquo;s criminal justice professionals face increasingly complex challenges.</p>
    </div>
    <div>
      <ul class="cj-ruled cj-ruled-2 cj-ruled-dark">
        <li>Community trust and police legitimacy</li>
        <li>Cybercrime and digital investigations</li>
        <li>Human trafficking</li>
        <li>Mental health crisis intervention</li>
        <li>School and campus safety</li>
        <li>Constitutional policing</li>
        <li>Victim advocacy</li>
        <li>Emergency management</li>
        <li>Homeland security</li>
        <li>Criminal investigations using advanced technology</li>
      </ul>
      <p class="cj-pull">These challenges require professionals who can think critically, communicate effectively, and make sound ethical decisions &mdash; not simply enforce laws.</p>
    </div>
  </div>
</section>

<section class="section on-surface">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Why Earn an Associate Degree?</p>
      <h2>The academic foundation for a rewarding career.</h2>
      <p class="lede">An Associate Degree in Criminal Justice provides students with the academic foundation needed to begin a rewarding career or continue toward a bachelor&rsquo;s degree. Students develop knowledge in:</p>
    </div>
    <ul class="cj-terms">
      <li>Criminal Law</li>
      <li>Constitutional Law</li>
      <li>Ethics</li>
      <li>Investigations</li>
      <li>Evidence</li>
      <li>Courts</li>
      <li>Corrections</li>
      <li>Community Relations</li>
      <li>Criminology</li>
      <li>Leadership</li>
      <li>Communication</li>
      <li>Critical Thinking</li>
    </ul>
    <p class="cj-note">Modern criminal justice education emphasizes understanding how law, policy, research, and community engagement work together to create a fair and effective justice system.</p>
  </div>
</section>

<section class="section on-paper">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Career Opportunities</p>
      <h2>Where graduates can serve.</h2>
    </div>
    <div class="cj-careers">
      <div>
        <h3>Law Enforcement</h3>
        <ul>
          <li>Police Officer</li>
          <li>Sheriff&rsquo;s Deputy</li>
          <li>Campus Police Officer</li>
          <li>Federal Law Enforcement</li>
        </ul>
      </div>
      <div>
        <h3>Corrections &amp; Supervision</h3>
        <ul>
          <li>Correctional Officer</li>
          <li>Juvenile Justice</li>
          <li>Probation Officer</li>
          <li>Parole Officer</li>
        </ul>
      </div>
      <div>
        <h3>Investigations &amp; Courts</h3>
        <ul>
          <li>Criminal Investigator</li>
          <li>Crime Scene Technician</li>
          <li>Court Administration</li>
          <li>Intelligence Analysis</li>
        </ul>
      </div>
      <div>
        <h3>Public Safety &amp; Service</h3>
        <ul>
          <li>Homeland Security</li>
          <li>Emergency Management</li>
          <li>Private Security Management</li>
          <li>Victim Services</li>
          <li>Public Safety Administration</li>
        </ul>
      </div>
    </div>
    <div class="callout cj-transfer">
      <p><strong>Planning to keep going?</strong> An associate degree also serves as an excellent foundation for transfer into bachelor&rsquo;s programs in criminal justice, criminology, homeland security, forensic science, public administration, or law.</p>
    </div>
  </div>
</section>

<section class="section on-surface">
  <div class="container cj-diff">
    <div class="cj-diff-aside">
      <p class="eyebrow">What Makes SwCC Different?</p>
      <h2 style="margin-top:14px;">Justice begins with character.</h2>
      <figure class="cj-poster-small">
        <img src="assets/images/campus/criminal-justice-future-guardians-poster.jpg" alt="SwCC Criminal Justice students in navy hoodies stand before the campus clock tower beside Lady Justice and a police cruiser, under the headline Today&rsquo;s Students, Tomorrow&rsquo;s Guardians of Justice.">
      </figure>
    </div>
    <div class="cj-diff-list">
      <article>
        <h3>Faith-Based Leadership</h3>
        <p>Students learn that justice begins with character. SwCC prepares graduates to lead with integrity, accountability, respect, compassion, service, and ethical decision-making. These principles are essential for earning public trust and becoming effective leaders.</p>
      </article>
      <article>
        <h3>HBCU Legacy</h3>
        <p>As a Historically Black College, Southwestern Christian College understands the importance of developing leaders who are culturally aware, community focused, and prepared to serve diverse populations.</p>
        <p>Students are encouraged to become agents of positive change while honoring the rich history of servant leadership found within HBCUs.</p>
      </article>
      <article>
        <h3>Learning from Real-World Leaders</h3>
        <p>Students benefit from instruction by experienced criminal justice professionals who understand today&rsquo;s challenges and bring practical experience into the classroom. Learning extends beyond textbooks to include leadership, professionalism, critical thinking, and ethical decision-making.</p>
      </article>
      <article>
        <h3>Leadership Development</h3>
        <p>Employers increasingly seek professionals who can lead teams, solve problems, communicate effectively, analyze situations, and make sound decisions under pressure. These leadership skills distinguish graduates throughout their careers.</p>
      </article>
    </div>
  </div>
</section>

<section class="section on-dark">
  <div class="container cj-split">
    <div>
      <p class="eyebrow">How Will This Degree Benefit My Career?</p>
      <h2 style="margin-top:14px;">An investment that keeps paying dividends.</h2>
      <p style="margin-top:18px;">An associate degree demonstrates that you possess the discipline, education, and professionalism employers value.</p>
      <p>Whether entering law enforcement, corrections, probation, homeland security, or continuing toward a bachelor&rsquo;s or graduate degree, your education becomes an investment that continues to pay dividends throughout your career.</p>
    </div>
    <ul class="check-list cj-checks">
      <li>Greater competitiveness for employment</li>
      <li>Increased opportunities for promotion</li>
      <li>Stronger communication and writing skills</li>
      <li>Better critical-thinking abilities</li>
      <li>Enhanced leadership potential</li>
      <li>Preparation for supervisory positions</li>
      <li>Foundation for advanced education</li>
      <li>Greater confidence in decision-making</li>
      <li>Improved understanding of constitutional law and ethics</li>
      <li>Lifelong professional growth</li>
    </ul>
  </div>
</section>

<section class="section on-paper cj-commitment">
  <div class="container">
    <p class="eyebrow">Our Commitment</p>
    <blockquote>Because tomorrow&rsquo;s justice system depends on the leaders we educate today.</blockquote>
    <div class="cj-commitment-body">
      <p>At Southwestern Christian College Criminal Justice, we believe education transforms lives. Our goal is not simply to prepare students for jobs but to also inspire students to see themselves as future protectors of society.</p>
      <p>Our goal is to prepare ethical leaders who protect constitutional rights, strengthen communities, inspire confidence in the justice system, and serve others with honor.</p>
    </div>
    <div class="btn-row">
      <a class="btn btn-brass" href="{APPLY_URL}" target="_blank" rel="noopener">Apply Now</a>
      <a class="btn btn-outline-dark" href="how-to-enroll.html">How To Enroll</a>
      <a class="btn btn-outline-dark" href="contact.html">Contact Admissions</a>
    </div>
  </div>
</section>
''')

add("studio.html", "The Upper Room Studios", "The Upper Room Studios at Southwestern Christian College — a hybrid recording facility built around an SSL Origin 32 console. Hourly and session-block rates, every session with a professional engineer.", f'''
{photo_hero("Programs &middot; Recording Studio", "The Upper Room Studios", "A hybrid recording facility at Southwestern Christian College, built around an SSL Origin 32 console. Every session includes a professional engineer.", "assets/images/campus/studio-ssl-console.jpg", "The SSL Origin 32 console and Genelec monitors in the Upper Room Studios control room")}

<section class="section on-paper">
  <div class="container studio-intro">
    <div>
      <p class="eyebrow">Hybrid Recording Facility</p>
      <h2>Analog warmth, digital reach.</h2>
    </div>
    <div>
      <p class="lede">The Upper Room pairs a 32-channel SSL analog console and a rack of classic outboard gear with Pro Tools, Luna, and Logic &mdash; so a session can move freely between hardware and the box.</p>
      <p>Production packages are available for songwriters, producers, vocalists, and musicians.</p>
      <div class="btn-row" style="margin-top:26px;">
        <a class="btn btn-brass" href="contact.html">Book a Session</a>
        <a class="btn btn-outline-dark" href="#studio-rates">See Rates</a>
      </div>
    </div>
  </div>
</section>

<section class="section on-deep">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">In the Room</p>
      <h2>The gear list.</h2>
    </div>
    <div class="studio-rider">
      <div class="studio-rider-col">
        <h3>Equipment</h3>
        <ul>
          <li>SSL Origin 32 Console</li>
          <li>SSL UF8 Controller</li>
        </ul>
      </div>
      <div class="studio-rider-col">
        <h3>Monitoring</h3>
        <ul>
          <li>Genelec with sub</li>
          <li>Avantone CLA-10</li>
        </ul>
      </div>
      <div class="studio-rider-col">
        <h3>Outboard Gear</h3>
        <ul>
          <li>Neve</li>
          <li>Bettermaker</li>
          <li>Purple Audio</li>
          <li>SSL</li>
          <li>Manley</li>
          <li class="studio-more">and more&hellip;</li>
        </ul>
      </div>
      <div class="studio-rider-col">
        <h3>DAWs</h3>
        <ul>
          <li>Pro Tools</li>
          <li>Luna</li>
          <li>Logic</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section on-paper">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Take a Look</p>
      <h2>Inside the control room.</h2>
    </div>
    <div class="mosaic studio-gallery">
      <figure class="mosaic-item mosaic-item-static mosaic-wide">
        <img src="assets/images/campus/studio-engineer-view.jpg" alt="The engineer&rsquo;s view across the SSL console toward the client seating area" loading="lazy">
        <figcaption>The engineer&rsquo;s seat</figcaption>
      </figure>
      <figure class="mosaic-item mosaic-item-static">
        <img src="assets/images/campus/studio-control-room-front.jpg" alt="Control room with the console, Genelec monitors, and the window into the live room" loading="lazy">
        <figcaption>Console &amp; live-room window</figcaption>
      </figure>
      <figure class="mosaic-item mosaic-item-static">
        <img src="assets/images/campus/studio-ssl-console.jpg" alt="Angled view of the SSL Origin 32 console and UF8 controller" loading="lazy">
        <figcaption>SSL Origin 32</figcaption>
      </figure>
      <figure class="mosaic-item mosaic-item-static">
        <img src="assets/images/campus/studio-control-room-side.jpg" alt="Client table and seating beside the console" loading="lazy">
        <figcaption>Client seating</figcaption>
      </figure>
      <figure class="mosaic-item mosaic-item-static">
        <img src="assets/images/campus/studio-control-room-rear.jpg" alt="Rear of the control room with acoustic panels and lounge chair" loading="lazy">
        <figcaption>Treated for accurate listening</figcaption>
      </figure>
    </div>
  </div>
</section>

<section class="section on-surface" id="studio-rates">
  <div class="container studio-rates-grid">
    <div>
      <p class="eyebrow">Studio Rates</p>
      <h2 style="margin-top:14px;">Book by the hour or the block.</h2>
      <dl class="studio-rates">
        <div><dt>Hourly rate</dt><dd>$90</dd></div>
        <div><dt>Session block &middot; 4 hours</dt><dd>$350</dd></div>
        <div><dt>Session block &middot; 8 hours</dt><dd>$700</dd></div>
      </dl>
      <p class="studio-note">All sessions include a professional engineer.</p>
      <h3 class="studio-packages-title">Production Packages</h3>
      <p>Production packages are available that include:</p>
      <ul class="studio-packages">
        <li>Songwriters</li><li>Producers</li><li>Vocalists</li><li>Musicians</li>
      </ul>
      <a class="btn btn-brass" href="contact.html" style="margin-top:34px;">Book a Session</a>
    </div>
    <figure class="studio-postcard">
      <img src="assets/images/campus/studio-postcard-front.jpg" alt="Upper Room Studios postcard: Southwestern Christian College and The Upper Room Studios logos over a close-up of console knobs" loading="lazy">
    </figure>
  </div>
</section>
''')

add("chorus.html", "A Cappella Chorus", "The A Cappella Chorus at Southwestern Christian College builds friendship and campus community through music.", f'''
{plain_hero("Programs", "A Cappella Chorus", "")}
<section class="section on-paper">
  <div class="container prose">
    <p>Life on the campus of Southwestern Christian College is not just academics, but also the social atmosphere that promotes growth and friendship &mdash; the kind that lasts a lifetime. The A Cappella Chorus is one of several organizations at SwCC where students build that community, on stage and off.</p>
    <p>Chorus participation and leadership also come with dedicated scholarship support &mdash; see the <a href="scholarships.html">Scholarships</a> page for details.</p>
  </div>
</section>
''')

add("career.html", "Career Opportunities", "Current staff and faculty job openings at Southwestern Christian College.", f'''
{plain_hero("Careers at SwCC", "Career Opportunities", "Join the team building the next chapter of Southwestern Christian College.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>High-Priority Openings</h2>
      <ul class="doc-list">
        <li><a href="contact.html">Assistant Financial Aid Director</a></li>
        <li><a href="contact.html">Chief Operations Officer</a></li>
      </ul>
      <h2 style="margin-top:40px;">General Openings</h2>
      <ul class="doc-list">
        <li><a href="contact.html">Computer Science Professor</a></li>
        <li><a href="contact.html">Physical Education Teacher</a></li>
        <li><a href="contact.html">Christian Guidance Counselor</a></li>
        <li><a href="contact.html">Assistant Comptroller</a></li>
        <li><a href="contact.html">Dining Hall Worker</a></li>
        <li><a href="contact.html">Assistant Admissions Director</a></li>
        <li><a href="contact.html">Faculty Instructor, Computer Science</a></li>
      </ul>
    </div>
    <aside class="side-card">
      <h4>Send Information &amp; Questions</h4>
      <p style="color:var(--stone); font-size:0.92rem;">Direct inquiries to Monica Mays.</p>
      <dl>
        <dt>Email</dt><dd><a href="mailto:monica.mays@swcc.edu">monica.mays@swcc.edu</a></dd>
      </dl>
    </aside>
  </div>
</section>
''')
