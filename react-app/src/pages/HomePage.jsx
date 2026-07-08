import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="hero">
  <div className="hero-media">
    <img src="/assets/images/campus/students-walking-campus.jpg" alt="Students walking together across the Southwestern Christian College campus" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container hero-inner">
    <p className="eyebrow eyebrow-invert">Southwestern Christian College · Terrell, Texas · Est. 1948</p>
    <h1>Your Future<br />Starts Here.</h1>
    <p className="lede hero-lede">Discover your purpose, earn your degree, and become part of a supportive faith-based community committed to your success.</p>
    <div className="btn-row">
      <a className="btn btn-brass" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?source=65912" target="_blank" rel="noopener">Apply Now</a>
      <a className="btn btn-outline-light" href="#campus-tours">Visit Campus</a>
      <Link className="btn btn-ghost-light" to="/contact">Request Information</Link>
    </div>
  </div>
</section>

<div className="deadline-strip">
  <div className="container deadline-strip-inner">
    <span className="deadline-item"><strong>Fall Semester</strong> application deadline — July 15</span>
    <span className="deadline-divider" aria-hidden="true"></span>
    <span className="deadline-item"><strong>Spring Semester</strong> application deadline — December 15</span>
  </div>
</div>

<section className="section on-paper" data-reveal="">
  <div className="container legacy-grid">
    <div>
      <p className="eyebrow">A Legacy of Faith & Education</p>
      <h2>Since 1948, one mission has never changed.</h2>
      <p className="lede">Since our founding, SwCC has been dedicated to equipping students with knowledge, character, and leadership grounded in Christian values. Our mission is to inspire lifelong learning, service, and spiritual growth.</p>
      <p>Southwestern Christian College is accredited by the Commission on Colleges of the Southern Association of Colleges and Schools to award Associate and Baccalaureate degrees.</p>
      <Link className="btn btn-outline-dark" to="/history">Read Our History</Link>
    </div>
    <figure className="legacy-photo">
      <img src="/assets/images/campus/president-podium-oath.jpg" alt="President Dr. Ervin D. Seamster, Jr. addressing the campus community" />
    </figure>
  </div>
</section>

<section className="section on-surface" data-reveal="">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow">How To Apply</p>
      <h2>Two ways to move your future forward.</h2>
    </div>
    <div className="grid grid-2 apply-grid">
      <div className="apply-card">
        <h3>Explore Academic Programs</h3>
        <p>From the Associate of Arts and Associate of Science to the Bachelor of Science in Religious Studies, every SwCC program is built around the development of the whole person — mind, character, and spirit.</p>
        <Link className="btn btn-outline-dark" to="/degree-plans">View All Academic Programs</Link>
      </div>
      <div className="apply-card apply-card-dark">
        <h3>Ready to become a RAM?</h3>
        <p>Apply now and begin your journey toward academic success.</p>
        <a className="btn btn-brass" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?source=65912" target="_blank" rel="noopener">Submit Application</a>
      </div>
    </div>
  </div>
</section>

<section className="section on-paper" data-reveal="">
  <div className="container">
    <div className="section-head">
      <p className="eyebrow">Explore SWCC</p>
      <h2>Explore Campus Life</h2>
      <p className="lede">Academics are only part of the story. Here’s where SwCC students build friendships, faith, and leadership that last well beyond graduation.</p>
    </div>
    <div className="mosaic">
      <figure className="mosaic-item mosaic-wide">
        <img src="/assets/images/campus/hallway-balloons-event.jpg" alt="Students gathered for a welcome event on campus" />
        <figcaption><span>Student Organizations</span></figcaption>
      </figure>
      <figure className="mosaic-item">
        <img src="/assets/images/campus/volleyball-team.jpg" alt="SwCC Rams women's volleyball team" />
        <figcaption><span>Athletics</span></figcaption>
      </figure>
      <figure className="mosaic-item">
        <img src="/assets/images/campus/mens-basketball-team.jpg" alt="SwCC Rams men's basketball team" />
        <figcaption><span>Residence Life</span></figcaption>
      </figure>
      <figure className="mosaic-item">
        <img src="/assets/images/campus/academic-regalia-procession.jpg" alt="Faculty procession at Ben Foster, Jr. Memorial Chapel" />
        <figcaption><span>Chapel & Spiritual Development</span></figcaption>
      </figure>
      <figure className="mosaic-item mosaic-wide">
        <img src="/assets/images/campus/coronation-formal-event.jpg" alt="Student leadership coronation ceremony" />
        <figcaption><span>Leadership Opportunities</span></figcaption>
      </figure>
      <figure className="mosaic-item">
        <img src="/assets/images/campus/hbcu-congratulations-group.jpg" alt="Alumnae and community members celebrating together" />
        <figcaption><span>Community Service</span></figcaption>
      </figure>
      <figure className="mosaic-item">
        <img src="/assets/images/campus/classroom-teaching.jpg" alt="Students in a computer science classroom" />
        <figcaption><span>Study Abroad Opportunities</span></figcaption>
      </figure>
    </div>
  </div>
</section>

<section className="section on-dark rampass-section" data-reveal="">
  <div className="container">
    <div className="rampass-grid">
      <div>
        <p className="eyebrow">Future RAM Summer Series</p>
        <h2>Earn Your RAM Pass Before Move-In.</h2>
        <p className="lede">Get campus-ready this summer. Meet faculty and staff, complete enrollment requirements, register for classes, receive financial aid guidance, learn about student resources, and connect with your future classmates — all before the semester starts.</p>
        <ul className="check-list">
          <li>Earn your RAM Pass</li>
          <li>Complete important enrollment steps early</li>
          <li>Receive move-in clearance</li>
          <li>Prepare for a successful first semester</li>
        </ul>
        <a className="btn btn-brass" href="https://lp.constantcontactpages.com/ev/reg/wy6gut4/lp/c2d87ad5-8e46-49d3-8e78-6da48310ed9e" target="_blank" rel="noopener">Register Here</a>
      </div>
      <div className="ticket">
        <div className="ticket-top">
          <span className="eyebrow">Future RAM</span>
          <h3>RAM Pass</h3>
          <p>Move-In Clearance & Summer Enrollment</p>
        </div>
        <div className="ticket-notch" aria-hidden="true"></div>
        <div className="ticket-bottom">
          <div><span>Holder</span><strong>Admitted Student</strong></div>
          <div><span>Status</span><strong>Bound & Ready</strong></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section on-paper" data-reveal="">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow">Institutional Scholarships</p>
      <h2>Scholarship Opportunities Available</h2>
    </div>
    <div className="grid grid-4 plaque-grid">
      <div className="plaque">
        <span className="plaque-amount">$1,000</span>
        <h4>Academic Scholarship</h4>
        <p>Per semester for students with a 3.5 GPA or higher demonstrating strong academic achievement.</p>
      </div>
      <div className="plaque">
        <span className="plaque-amount">$1,000</span>
        <h4>Chorus Scholarship</h4>
        <p>Per semester for choir participation and leadership. Section leaders up to $1,000; non-section leaders $750.</p>
      </div>
      <div className="plaque">
        <span className="plaque-amount">$2,000</span>
        <h4>Ministerial Scholarship</h4>
        <p>Per semester for students pursuing ministry and Religious Studies.</p>
      </div>
      <div className="plaque">
        <span className="plaque-amount">$2,000</span>
        <h4>Presidential Scholarship</h4>
        <p>Per semester for high-achieving student leaders with a 3.7 GPA or higher.</p>
      </div>
    </div>
    <p className="plaque-footnote">Program scholarships are also available for Criminal Justice and Interdisciplinary Studies.</p>
    <Link className="btn btn-outline-dark" to="/scholarships">View Scholarship Opportunities</Link>
  </div>
</section>

<section className="section on-surface" data-reveal="">
  <div className="container fafsa-grid">
    <figure className="fafsa-figure">
      <img src="/assets/images/campaign-fafsa.png" alt="You've been admitted — complete your FAFSA for 2026-2027 campaign graphic" />
    </figure>
    <div>
      <p className="eyebrow">Financial Aid</p>
      <h2>Grants, loans, and work study — built around your goals.</h2>
      <p className="lede">The Office of Financial Aid provides support to students in pursuit of their educational goals through scholarships, grants, loans, and work study.</p>
      <div className="fafsa-code">
        <span>SwCC FAFSA School Code</span>
        <strong>003618</strong>
      </div>
      <Link className="btn btn-outline-dark" to="/financial-aid">Visit the Financial Aid Office</Link>
    </div>
  </div>
</section>

<section className="section on-dark" data-reveal="">
  <div className="container quote-block">
    <p className="eyebrow">Student Achievement</p>
    <blockquote>Our mission is to offer a holistic educational program that motivates our students to value and achieve academic excellence within the context of commitment to moral and spiritual values — and to prepare future leaders in distinct communities and the world at large.</blockquote>
    <Link className="btn btn-outline-light" to="/student-achievement">See Student Achievement Data</Link>
  </div>
</section>

<section className="section on-paper" data-reveal="">
  <div className="container legacy-grid legacy-grid-reverse">
    <figure className="legacy-photo">
      <img src="/assets/images/campus/classroom-teaching.jpg" alt="A professor teaching students in a small classroom setting" />
    </figure>
    <div>
      <p className="eyebrow">Academics</p>
      <h2>Educating the whole person.</h2>
      <p className="lede">Southwestern Christian College is committed to excellence in education — Christian education. Our curriculum is geared to the development of the “whole person” of each of our students: mind, character, and spirit together.</p>
      <Link className="btn btn-outline-dark" to="/academics">Explore Academics</Link>
    </div>
  </div>
</section>

<section className="section on-surface" data-reveal="">
  <div className="container president-grid">
    <figure className="president-photo">
      <img src="/assets/images/campus/president-portrait.jpg" alt="Dr. Ervin D. Seamster, Jr., President and CEO of Southwestern Christian College" />
    </figure>
    <div>
      <p className="eyebrow">A Message From Our President</p>
      <h2>Dr. Ervin D. Seamster, Jr.</h2>
      <p className="lede">President and CEO Dr. Ervin D. Seamster, Jr. was recently honored with the “Spirit of the King” Award from the City of Terrell, recognizing his leadership and dedication to the community.</p>
      <blockquote className="testimonial">“Give us a semester, and change your life. Give us a year — and witness your evolution.”</blockquote>
      <p className="testimonial-source">“Amazing college, it’s been very progressive under the leadership of Dr. Seamster.” — Grady S.</p>
      <Link className="btn btn-outline-dark" to="/president">Meet Our President</Link>
    </div>
  </div>
</section>

<section className="section tours-section" id="campus-tours" data-reveal="">
  <div className="container tours-grid">
    <div>
      <p className="eyebrow eyebrow-invert">Campus Tours</p>
      <h2>Experience Campus for Yourself</h2>
      <p className="lede">Explore our campus, meet faculty and students, and discover what it means to be a RAM. To schedule group visits, please email <a href="mailto:admissions@swcc.edu">admissions@swcc.edu</a>. Individual campus tours will be available soon — check back for scheduling details.</p>
      <Link className="btn btn-brass" to="/how-to-enroll#tours">Schedule a Campus Tour</Link>
    </div>
    <figure className="tours-figure">
      <img src="/assets/images/campaign-campus-tour.png" alt="See it. Experience it. Be a RAM. Campus tours campaign graphic" />
    </figure>
  </div>
</section>

    </>
  );
}
