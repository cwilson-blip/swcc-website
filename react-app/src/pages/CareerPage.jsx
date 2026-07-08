import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CareerPage() {
  useEffect(() => {
    document.title = "Career Opportunities | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Careers at SwCC</p>
    <h1>Career Opportunities</h1>
    <p className="lede">Join the team building the next chapter of Southwestern Christian College.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <h2>High-Priority Openings</h2>
      <ul className="doc-list">
        <li><Link to="/contact">Assistant Financial Aid Director</Link></li>
        <li><Link to="/contact">Chief Operations Officer</Link></li>
      </ul>
      <h2 style={{marginTop: '40px'}}>General Openings</h2>
      <ul className="doc-list">
        <li><Link to="/contact">Computer Science Professor</Link></li>
        <li><Link to="/contact">Physical Education Teacher</Link></li>
        <li><Link to="/contact">Christian Guidance Counselor</Link></li>
        <li><Link to="/contact">Assistant Comptroller</Link></li>
        <li><Link to="/contact">Dining Hall Worker</Link></li>
        <li><Link to="/contact">Assistant Admissions Director</Link></li>
        <li><Link to="/contact">Faculty Instructor, Computer Science</Link></li>
      </ul>
    </div>
    <aside className="side-card">
      <h4>Send Information & Questions</h4>
      <p style={{color: 'var(--stone)', fontSize: '0.92rem'}}>Direct inquiries to Monica Mays.</p>
      <dl>
        <dt>Email</dt><dd><a href="mailto:monica.mays@swcc.edu">monica.mays@swcc.edu</a></dd>
      </dl>
    </aside>
  </div>
</section>

    </>
  );
}
