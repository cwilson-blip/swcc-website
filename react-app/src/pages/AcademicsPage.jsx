import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AcademicsPage() {
  useEffect(() => {
    document.title = "Academics | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/classroom-teaching.jpg" alt="A professor teaching students in a small classroom" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Academics</p>
    <h1>Educating the Whole Person</h1>
    <p className="lede hero-lede">Southwestern Christian College is committed to excellence in Christian education, with a curriculum geared to the development of mind, character, and spirit together.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <h2>Our Academic Programs</h2>
      <ul>
        <li>Associate of Arts</li>
        <li>Associate of Science</li>
        <li>Associate of Science in Criminal Justice</li>
        <li>Bachelor of Science in Religious Studies</li>
        <li>Bachelor of Science in Interdisciplinary Studies</li>
      </ul>
      <Link className="btn btn-outline-dark" to="/degree-plans">View Degree Plans</Link>

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

      <h2>Bachelor’s Degree Requirements</h2>
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
    <aside className="side-card">
      <h4>Explore Further</h4>
      <ul>
        <li><a href="#academic-calendar">2026–27 Academic Calendar</a></li>
        <li><Link to="/degree-plans">Degree Plans</Link></li>
        <li><Link to="/online-classes">Online Classes</Link></li>
        <li><Link to="/academic-catalogs">Academic Catalogs</Link></li>
        <li><Link to="/financial-aid">Financial Aid</Link></li>
      </ul>
    </aside>
  </div>
</section>

<section className="section on-surface" id="academic-calendar">
  <div className="container">
    <div className="cal-head">
      <div>
        <p className="eyebrow">2026–27 Academic Year</p>
        <h2>Academic Calendar</h2>
      </div>
      <a className="btn btn-outline-dark" href="/assets/docs/swcc-academic-calendar-2026-27.pdf" target="_blank" rel="noopener">Download PDF</a>
    </div>
    <dl className="cal-keys">
      <div><dt>Fall classes begin</dt><dd>Aug 17, 2026</dd></div>
      <div><dt>Fall final exams</dt><dd>Dec 7–10</dd></div>
      <div><dt>Spring classes begin</dt><dd>Jan 11, 2027</dd></div>
      <div><dt>76th Commencement</dt><dd>May 8, 2027</dd></div>
    </dl>
    <div className="cal-terms">
      <div className="cal-term">
      <header className="cal-term-head"><h3>Fall 2026</h3><span>July – December</span></header>
      <h4 className="cal-month">July</h4>
<ol className="cal-list">
<li><span className="cal-date">14–15<span className="cal-day">Tue–Wed</span></span><span className="cal-event">Faculty/Staff Institute</span></li>
<li><span className="cal-date">27<span className="cal-day">Mon</span></span><span className="cal-event">Dorms and Dining Hall open for athletes arriving on campus</span></li>
</ol>
<h4 className="cal-month">August</h4>
<ol className="cal-list">
<li><span className="cal-date">7<span className="cal-day">Fri</span></span><span className="cal-event">Resident Assistants check-in (9:00 AM – 12:00 PM)</span></li>
<li className="cal-key"><span className="cal-date">8<span className="cal-day">Sat</span></span><span className="cal-event"><strong>SUPER Saturday</strong> — a one-stop event to help students transition to SwCC and prepare for registration: submit outstanding admissions documents, review FAFSA and scholarships, understand tuition and fees, take ID photos, and receive room keys if living on campus.</span></li>
<li><span className="cal-date">10–14<span className="cal-day">Mon–Fri</span></span><span className="cal-event"><strong>Ram Week</strong> — student orientation, welcoming and connecting all incoming new students</span></li>
<li><span className="cal-date">10<span className="cal-day">Mon</span></span><span className="cal-event">Faculty Meeting, 9:00 – 11:30 AM. Accuplacer Placement Exam for new students, 1:30 – 5:00 PM</span></li>
<li><span className="cal-date">11–12<span className="cal-day">Tue–Wed</span></span><span className="cal-event">New student advising/registration and Accuplacer Placement Exam, 9:00 AM – 12:00 PM and 1:30 – 5:00 PM</span></li>
<li><span className="cal-date">13<span className="cal-day">Thu</span></span><span className="cal-event">New student advising/registration, 9:00 AM – 12:00 PM and 1:30 – 5:00 PM. Accuplacer Placement Exam, 4:00 – 5:30 PM</span></li>
<li><span className="cal-date">14<span className="cal-day">Fri</span></span><span className="cal-event">Advising and Registration (new and returning students), 9:00 AM – 12:00 PM and 1:30 – 3:30 PM</span></li>
<li className="cal-key"><span className="cal-date">17<span className="cal-day">Mon</span></span><span className="cal-event"><strong>Classes Begin</strong>. Late Registration begins (late registration fee applied). Last day to receive 100% of tuition and fees (80% schedule begins)</span></li>
<li><span className="cal-date">21<span className="cal-day">Fri</span></span><span className="cal-event">Last Day of Late Registration</span></li>
</ol>
<h4 className="cal-month">September</h4>
<ol className="cal-list">
<li><span className="cal-date">1<span className="cal-day">Tue</span></span><span className="cal-event">Census Day (12th day of classes)</span></li>
<li><span className="cal-date">4<span className="cal-day">Fri</span></span><span className="cal-event">Last day to remove an Incomplete “I” grade from Spring semester</span></li>
<li className="cal-closed"><span className="cal-date">7<span className="cal-day">Mon</span></span><span className="cal-event">Labor Day Holiday<span className="cal-tag">No Classes</span></span></li>
<li><span className="cal-date">11<span className="cal-day">Fri</span></span><span className="cal-event">Last day to receive 80% of tuition and fees (40% schedule begins)</span></li>
<li><span className="cal-date">18<span className="cal-day">Fri</span></span><span className="cal-event">Last day to receive 40% of tuition and fees (no refund of tuition and fees after this date)</span></li>
<li className="cal-observance"><span className="cal-date">15 – Oct 15</span><span className="cal-event">Hispanic Heritage Month</span></li>
</ol>
<h4 className="cal-month">October</h4>
<ol className="cal-list">
<li><span className="cal-date">1<span className="cal-day">Thu</span></span><span className="cal-event">Deadline to apply for Fall Graduation</span></li>
<li className="cal-key"><span className="cal-date">5–8<span className="cal-day">Mon–Thu</span></span><span className="cal-event"><strong>Mid-Term Exams</strong></span></li>
<li className="cal-closed"><span className="cal-date">12–13<span className="cal-day">Mon–Tue</span></span><span className="cal-event">Fall Break<span className="cal-tag">No Classes</span></span></li>
<li><span className="cal-date">13<span className="cal-day">Tue</span></span><span className="cal-event">Mid-Term grades due</span></li>
</ol>
<h4 className="cal-month">November</h4>
<ol className="cal-list">
<li className="cal-observance"><span className="cal-date">1–30</span><span className="cal-event">National Native American Heritage Month</span></li>
<li><span className="cal-date">2<span className="cal-day">Mon</span></span><span className="cal-event">Pre-registration for Spring 2027</span></li>
<li><span className="cal-date">22<span className="cal-day">Sun</span></span><span className="cal-event">Southwestern Christian College Founder’s Day</span></li>
<li><span className="cal-date">22–25<span className="cal-day">Sun–Wed</span></span><span className="cal-event">Eighty-Ninth Annual Lectureship</span></li>
<li className="cal-closed"><span className="cal-date">26–27<span className="cal-day">Thu–Fri</span></span><span className="cal-event">Thanksgiving Break<span className="cal-tag">No Classes</span></span></li>
<li><span className="cal-date">30<span className="cal-day">Mon</span></span><span className="cal-event">Classes resume</span></li>
<li><span className="cal-date">30 – Dec 4<span className="cal-day">Mon–Fri</span></span><span className="cal-event">Review Week</span></li>
</ol>
<h4 className="cal-month">December</h4>
<ol className="cal-list">
<li><span className="cal-date">4<span className="cal-day">Fri</span></span><span className="cal-event">Last day to drop a course with a “W”</span></li>
<li className="cal-key"><span className="cal-date">7–10<span className="cal-day">Mon–Thu</span></span><span className="cal-event"><strong>Final Exams</strong></span></li>
<li><span className="cal-date">11<span className="cal-day">Fri</span></span><span className="cal-event">Residence Halls and Dining Hall close at 5:00 PM</span></li>
<li><span className="cal-date">16<span className="cal-day">Wed</span></span><span className="cal-event">Final grades due</span></li>
<li className="cal-closed"><span className="cal-date">18<span className="cal-day">Fri</span></span><span className="cal-event">Christmas Break begins. College closes at 5:00 PM<span className="cal-tag">No Classes</span></span></li>
</ol>
    </div>
      <div className="cal-term">
      <header className="cal-term-head"><h3>Spring 2027</h3><span>January – May</span></header>
      <h4 className="cal-month">January</h4>
<ol className="cal-list">
<li><span className="cal-date">5<span className="cal-day">Tue</span></span><span className="cal-event">Residence Halls and Dining Hall open</span></li>
<li className="cal-key"><span className="cal-date">5–8<span className="cal-day">Tue–Fri</span></span><span className="cal-event"><strong>Orientation for New Students</strong></span></li>
<li><span className="cal-date">5–6<span className="cal-day">Tue–Wed</span></span><span className="cal-event">Placement Testing (Accuplacer, 8:00 – 10:30 AM)</span></li>
<li><span className="cal-date">6<span className="cal-day">Wed</span></span><span className="cal-event">Faculty Meeting at 9:00 AM (virtual)</span></li>
<li><span className="cal-date">7–8<span className="cal-day">Thu–Fri</span></span><span className="cal-event">Registration for New Students</span></li>
<li className="cal-key"><span className="cal-date">11<span className="cal-day">Mon</span></span><span className="cal-event"><strong>Classes Begin</strong>. $50.00 late registration fee effective. Last day to receive 100% of tuition and fees (80% schedule begins)</span></li>
<li className="cal-closed"><span className="cal-date">18<span className="cal-day">Mon</span></span><span className="cal-event">Martin Luther King, Jr. Day Holiday<span className="cal-tag">No Classes</span></span></li>
<li><span className="cal-date">20<span className="cal-day">Wed</span></span><span className="cal-event">Last day of registration and adding classes</span></li>
<li><span className="cal-date">27<span className="cal-day">Wed</span></span><span className="cal-event">Census Day (12th day of classes)</span></li>
<li><span className="cal-date">29<span className="cal-day">Fri</span></span><span className="cal-event">Last day to submit incomplete assignments from Fall 2026. Last day to receive 80% of tuition and fees (40% schedule begins)</span></li>
</ol>
<h4 className="cal-month">February</h4>
<ol className="cal-list">
<li className="cal-observance"><span className="cal-date">1–28</span><span className="cal-event">Black History Month</span></li>
<li><span className="cal-date">12<span className="cal-day">Fri</span></span><span className="cal-event">Last day to receive 40% of tuition and fees (no refund of tuition and fees after this date)</span></li>
<li className="cal-closed"><span className="cal-date">15<span className="cal-day">Mon</span></span><span className="cal-event">Presidents’ Day Holiday<span className="cal-tag">No Classes</span></span></li>
</ol>
<h4 className="cal-month">March</h4>
<ol className="cal-list">
<li className="cal-key"><span className="cal-date">2–4<span className="cal-day">Tue–Thu</span></span><span className="cal-event"><strong>Mid-Semester Exams</strong></span></li>
<li className="cal-closed"><span className="cal-date">8–12<span className="cal-day">Mon–Fri</span></span><span className="cal-event">Spring Break<span className="cal-tag">No Classes</span></span></li>
<li><span className="cal-date">15<span className="cal-day">Mon</span></span><span className="cal-event">Classes resume</span></li>
<li><span className="cal-date">25<span className="cal-day">Thu</span></span><span className="cal-event">Test: May Graduates</span></li>
<li className="cal-closed"><span className="cal-date">26<span className="cal-day">Fri</span></span><span className="cal-event">Good Friday Holiday<span className="cal-tag">No Classes</span></span></li>
<li><span className="cal-date">28<span className="cal-day">Sun</span></span><span className="cal-event">Easter</span></li>
</ol>
<h4 className="cal-month">April</h4>
<ol className="cal-list">
<li><span className="cal-date">10<span className="cal-day">Sat</span></span><span className="cal-event"><Link to="/preview-day">Preview Day</Link></span></li>
<li><span className="cal-date">16<span className="cal-day">Fri</span></span><span className="cal-event">Last day to drop a course with a “W”</span></li>
<li><span className="cal-date">19–23<span className="cal-day">Mon–Fri</span></span><span className="cal-event">Review Week</span></li>
<li className="cal-key"><span className="cal-date">27–30<span className="cal-day">Tue–Fri</span></span><span className="cal-event"><strong>Final Exams</strong></span></li>
</ol>
<h4 className="cal-month">May</h4>
<ol className="cal-list">
<li className="cal-observance"><span className="cal-date">1–31</span><span className="cal-event">Asian/Pacific American Heritage Month</span></li>
<li><span className="cal-date">4<span className="cal-day">Tue</span></span><span className="cal-event">May graduates’ and seniors’ grades due in Populi by noon</span></li>
<li className="cal-observance"><span className="cal-date">5<span className="cal-day">Wed</span></span><span className="cal-event">Cinco de Mayo</span></li>
<li className="cal-key"><span className="cal-date">8<span className="cal-day">Sat</span></span><span className="cal-event"><strong>SwCC 76th Commencement</strong>, 10:30 AM</span></li>
<li><span className="cal-date">9<span className="cal-day">Sun</span></span><span className="cal-event">Dining Hall and Residence Halls close at 5:00 PM</span></li>
<li><span className="cal-date">10<span className="cal-day">Mon</span></span><span className="cal-event">Deadline for submission of all grades in Populi</span></li>
</ol>
    </div>
    </div>
    <p className="cal-disclaimer">The administration reserves the right to make changes to the Academic Calendar.</p>
  </div>
</section>

    </>
  );
}
