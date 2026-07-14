from common import APPLY_URL, FAFSA_URL, ATHLETICS_URL

RAM_PASS_URL = "https://lp.constantcontactpages.com/ev/reg/wy6gut4/lp/c2d87ad5-8e46-49d3-8e78-6da48310ed9e"

TITLE = "Home"
DESCRIPTION = "Southwestern Christian College in Terrell, Texas — a Christ-centered college inspiring excellence and building character since 1948."


def page():
    return ("index.html", TITLE, DESCRIPTION, body())


def body():
    return f'''
<section class="hero">
  <div class="hero-media">
    <video autoplay muted loop playsinline poster="assets/images/campus/hero-swcc-video-poster.jpg" aria-label="Southwestern Christian College campus video">
      <source src="assets/video/hero-swcc-video.mp4" type="video/mp4">
    </video>
    <img class="hero-media-fallback" src="assets/images/campus/hero-swcc-video-poster.jpg" alt="Southwestern Christian College campus video">
    <div class="hero-scrim"></div>
  </div>
  <div class="container hero-inner">
    <p class="eyebrow eyebrow-invert">Southwestern Christian College &middot; Terrell, Texas &middot; Est. 1948</p>
    <h1>Your Future<br>Starts Here.</h1>
    <p class="lede hero-lede">Discover your purpose, earn your degree, and become part of a supportive faith-based community committed to your success.</p>
    <div class="btn-row">
      <a class="btn btn-brass" href="{APPLY_URL}" target="_blank" rel="noopener">Apply Now</a>
      <a class="btn btn-outline-light" href="#campus-tours">Visit Campus</a>
      <a class="btn btn-ghost-light" href="contact.html">Request Information</a>
    </div>
  </div>
</section>

<div class="deadline-strip">
  <div class="container deadline-strip-inner">
    <span class="deadline-item"><strong>Fall Semester</strong> application deadline &mdash; July 15</span>
    <span class="deadline-divider" aria-hidden="true"></span>
    <span class="deadline-item"><strong>Spring Semester</strong> application deadline &mdash; December 15</span>
  </div>
</div>

<section class="section on-paper" data-reveal>
  <div class="container legacy-grid">
    <div>
      <p class="eyebrow">A Legacy of Faith &amp; Education</p>
      <h2>Since 1948, one mission has never changed.</h2>
      <p class="lede">Since our founding, SwCC has been dedicated to equipping students with knowledge, character, and leadership grounded in Christian values. Our mission is to inspire lifelong learning, service, and spiritual growth.</p>
      <p>Southwestern Christian College is accredited by the Commission on Colleges of the Southern Association of Colleges and Schools to award Associate and Baccalaureate degrees.</p>
      <a class="btn btn-outline-dark" href="history.html">Read Our History</a>
    </div>
    <figure class="legacy-photo">
      <img src="assets/images/campus/president-podium-oath.jpg" alt="President Dr. Ervin D. Seamster, Jr. addressing the campus community">
    </figure>
  </div>
</section>

<section class="section on-surface" data-reveal>
  <div class="container">
    <div class="section-head center">
      <p class="eyebrow">How To Apply</p>
      <h2>Two ways to move your future forward.</h2>
    </div>
    <div class="grid grid-2 apply-grid">
      <div class="apply-card">
        <h3>Explore Academic Programs</h3>
        <p>From the Associate of Arts and Associate of Science to the Bachelor of Science in Religious Studies, every SwCC program is built around the development of the whole person &mdash; mind, character, and spirit.</p>
        <a class="btn btn-outline-dark" href="degree-plans.html">View All Academic Programs</a>
      </div>
      <div class="apply-card apply-card-dark">
        <h3>Ready to become a RAM?</h3>
        <p>Apply now and begin your journey toward academic success.</p>
        <a class="btn btn-brass" href="{APPLY_URL}" target="_blank" rel="noopener">Submit Application</a>
      </div>
    </div>
  </div>
</section>

<section class="section on-paper" data-reveal>
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Explore SWCC</p>
      <h2>Explore Campus Life</h2>
      <p class="lede">Academics are only part of the story. Here&rsquo;s where SwCC students build friendships, faith, and leadership that last well beyond graduation.</p>
    </div>
    <div class="mosaic">
      <figure class="mosaic-item mosaic-wide">
        <a class="mosaic-link" href="programs.html">
          <img src="assets/images/campus/hallway-balloons-event.jpg" alt="Students gathered for a welcome event on campus">
          <figcaption><span>Student Organizations</span></figcaption>
        </a>
      </figure>
      <figure class="mosaic-item">
        <a class="mosaic-link" href="{ATHLETICS_URL}" target="_blank" rel="noopener">
          <img src="assets/images/campus/volleyball-team.jpg" alt="SwCC Rams women's volleyball team">
          <figcaption><span>Athletics</span></figcaption>
        </a>
      </figure>
      <figure class="mosaic-item">
        <a class="mosaic-link" href="campus-housing.html">
          <img src="assets/images/campus/mary-carpenter-hall.jpg" alt="Students touring Mary Carpenter Hall, a SwCC residence hall">
          <figcaption><span>Residence Life</span></figcaption>
        </a>
      </figure>
      <figure class="mosaic-item">
        <a class="mosaic-link" href="guiding-philosophy.html">
          <img src="assets/images/campus/academic-regalia-procession.jpg" alt="Faculty procession at Ben Foster, Jr. Memorial Chapel">
          <figcaption><span>Chapel &amp; Spiritual Development</span></figcaption>
        </a>
      </figure>
      <figure class="mosaic-item mosaic-wide mosaic-item-static">
        <div class="mosaic-link">
          <img src="assets/images/campus/coronation-formal-event.jpg" alt="Student leadership coronation ceremony">
          <figcaption><span>Leadership Opportunities</span></figcaption>
        </div>
      </figure>
      <figure class="mosaic-item">
        <a class="mosaic-link" href="alumni.html">
          <img src="assets/images/campus/hbcu-congratulations-group.jpg" alt="Alumnae and community members celebrating together">
          <figcaption><span>Community Service</span></figcaption>
        </a>
      </figure>
      <figure class="mosaic-item mosaic-item-static">
        <div class="mosaic-link">
          <img src="assets/images/campus/classroom-teaching.jpg" alt="Students in a computer science classroom">
          <figcaption><span>Study Abroad Opportunities</span></figcaption>
        </div>
      </figure>
    </div>
  </div>
</section>

<section class="section on-dark rampass-section" data-reveal>
  <div class="container">
    <div class="rampass-grid">
      <div>
        <p class="eyebrow">Future RAM Summer Series</p>
        <h2>Earn Your RAM Pass Before Move-In.</h2>
        <p class="lede">Get campus-ready this summer. Meet faculty and staff, complete enrollment requirements, register for classes, receive financial aid guidance, learn about student resources, and connect with your future classmates &mdash; all before the semester starts.</p>
        <ul class="check-list">
          <li>Earn your RAM Pass</li>
          <li>Complete important enrollment steps early</li>
          <li>Receive move-in clearance</li>
          <li>Prepare for a successful first semester</li>
        </ul>
        <a class="btn btn-brass" href="{RAM_PASS_URL}" target="_blank" rel="noopener">Register Here</a>
      </div>
      <div class="ticket">
        <div class="ticket-top">
          <span class="eyebrow">Future RAM</span>
          <h3>RAM Pass</h3>
          <p>Move-In Clearance &amp; Summer Enrollment</p>
        </div>
        <div class="ticket-notch" aria-hidden="true"></div>
        <div class="ticket-bottom">
          <div><span>Holder</span><strong>Admitted Student</strong></div>
          <div><span>Status</span><strong>Bound &amp; Ready</strong></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section on-paper" data-reveal>
  <div class="container">
    <div class="section-head center">
      <p class="eyebrow">Institutional Scholarships</p>
      <h2>Scholarship Opportunities Available</h2>
    </div>
    <div class="grid grid-4 plaque-grid">
      <div class="plaque">
        <span class="plaque-amount">$1,000</span>
        <h4>Academic Scholarship</h4>
        <p>Per semester for students with a 3.5 GPA or higher demonstrating strong academic achievement.</p>
      </div>
      <div class="plaque">
        <span class="plaque-amount">$1,000</span>
        <h4>Chorus Scholarship</h4>
        <p>Per semester for choir participation and leadership. Section leaders up to $1,000; non-section leaders $750.</p>
      </div>
      <div class="plaque">
        <span class="plaque-amount">$2,000</span>
        <h4>Ministerial Scholarship</h4>
        <p>Per semester for students pursuing ministry and Religious Studies.</p>
      </div>
      <div class="plaque">
        <span class="plaque-amount">$2,000</span>
        <h4>Presidential Scholarship</h4>
        <p>Per semester for high-achieving student leaders with a 3.7 GPA or higher.</p>
      </div>
    </div>
    <p class="plaque-footnote">Program scholarships are also available for Criminal Justice and Interdisciplinary Studies.</p>
    <a class="btn btn-outline-dark" href="scholarships.html">View Scholarship Opportunities</a>
  </div>
</section>

<section class="section on-surface" data-reveal>
  <div class="container fafsa-grid">
    <figure class="fafsa-figure">
      <img src="assets/images/campaign-fafsa.png" alt="You've been admitted — complete your FAFSA for 2026-2027 campaign graphic">
    </figure>
    <div>
      <p class="eyebrow">Financial Aid</p>
      <h2>Grants, loans, and work study &mdash; built around your goals.</h2>
      <p class="lede">The Office of Financial Aid provides support to students in pursuit of their educational goals through scholarships, grants, loans, and work study.</p>
      <div class="fafsa-code">
        <span>SwCC FAFSA School Code</span>
        <strong>003618</strong>
      </div>
      <a class="btn btn-outline-dark" href="financial-aid.html">Visit the Financial Aid Office</a>
    </div>
  </div>
</section>

<section class="section on-dark" data-reveal>
  <div class="container quote-block">
    <p class="eyebrow">Student Achievement</p>
    <blockquote>Our mission is to offer a holistic educational program that motivates our students to value and achieve academic excellence within the context of commitment to moral and spiritual values &mdash; and to prepare future leaders in distinct communities and the world at large.</blockquote>
    <a class="btn btn-outline-light" href="student-achievement.html">See Student Achievement Data</a>
  </div>
</section>

<section class="section on-paper" data-reveal>
  <div class="container legacy-grid legacy-grid-reverse">
    <figure class="legacy-photo">
      <img src="assets/images/campus/classroom-teaching.jpg" alt="A professor teaching students in a small classroom setting">
    </figure>
    <div>
      <p class="eyebrow">Academics</p>
      <h2>Educating the whole person.</h2>
      <p class="lede">Southwestern Christian College is committed to excellence in education &mdash; Christian education. Our curriculum is geared to the development of the &ldquo;whole person&rdquo; of each of our students: mind, character, and spirit together.</p>
      <a class="btn btn-outline-dark" href="academics.html">Explore Academics</a>
    </div>
  </div>
</section>

<section class="section on-surface" data-reveal>
  <div class="container president-grid">
    <figure class="president-photo">
      <img src="assets/images/campus/president-portrait.jpg" alt="Dr. Ervin D. Seamster, Jr., President and CEO of Southwestern Christian College">
    </figure>
    <div>
      <p class="eyebrow">A Message From Our President</p>
      <h2>Dr. Ervin D. Seamster, Jr.</h2>
      <p class="lede">President and CEO Dr. Ervin D. Seamster, Jr. was recently honored with the &ldquo;Spirit of the King&rdquo; Award from the City of Terrell, recognizing his leadership and dedication to the community.</p>
      <blockquote class="testimonial">&ldquo;Give us a semester, and change your life. Give us a year &mdash; and witness your evolution.&rdquo;</blockquote>
      <p class="testimonial-source">&ldquo;Amazing college, it&rsquo;s been very progressive under the leadership of Dr. Seamster.&rdquo; &mdash; Grady S.</p>
      <a class="btn btn-outline-dark" href="president.html">Meet Our President</a>
    </div>
  </div>
</section>

<section class="section tours-section" id="campus-tours" data-reveal>
  <div class="container tours-grid">
    <div>
      <p class="eyebrow eyebrow-invert">Campus Tours</p>
      <h2>Experience Campus for Yourself</h2>
      <p class="lede">Explore our campus, meet faculty and students, and discover what it means to be a RAM. To schedule group visits, please email <a href="mailto:admissions@swcc.edu">admissions@swcc.edu</a>. Individual campus tours will be available soon &mdash; check back for scheduling details.</p>
      <a class="btn btn-brass" href="how-to-enroll.html#tours">Schedule a Campus Tour</a>
    </div>
    <figure class="tours-figure">
      <img src="assets/images/campaign-campus-tour.png" alt="See it. Experience it. Be a RAM. Campus tours campaign graphic">
    </figure>
  </div>
</section>
'''
