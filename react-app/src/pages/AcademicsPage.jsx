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
        <li>Bachelor of Science in Religious Studies</li>
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
        <li><Link to="/degree-plans">Degree Plans</Link></li>
        <li><Link to="/online-classes">Online Classes</Link></li>
        <li><Link to="/academic-catalogs">Academic Catalogs</Link></li>
        <li><Link to="/financial-aid">Financial Aid</Link></li>
      </ul>
    </aside>
  </div>
</section>

    </>
  );
}
