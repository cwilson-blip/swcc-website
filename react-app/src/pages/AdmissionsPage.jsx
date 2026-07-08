import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AdmissionsPage() {
  useEffect(() => {
    document.title = "Admissions | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/graduates-group-stoles.jpg" alt="SwCC graduates in caps, gowns, and stoles" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Office of Admissions</p>
    <h1>Your Future Starts Here.</h1>
    <p className="lede hero-lede">Thank you for considering Southwestern Christian College. Our Office of Admissions is ready to help freshman, transfer, and international students take the next step.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="section-head center">
      <p className="eyebrow">Getting Started</p>
      <h2>Everything you need to apply.</h2>
    </div>
    <div className="grid grid-3">
      <div className="apply-card">
        <h3>How To Enroll</h3>
        <p>Due dates, required forms, and the documents every applicant needs to submit.</p>
        <Link className="btn btn-outline-dark" to="/how-to-enroll">View Steps</Link>
      </div>
      <div className="apply-card">
        <h3>Tuition & Fees</h3>
        <p>What it costs to become a RAM, and how financial aid fits in.</p>
        <Link className="btn btn-outline-dark" to="/tuition-fees">See Cost of Attendance</Link>
      </div>
      <div className="apply-card">
        <h3>Admissions (International)</h3>
        <p>Requirements and F-1 visa documentation for international applicants.</p>
        <Link className="btn btn-outline-dark" to="/admissions-international">International Admissions</Link>
      </div>
    </div>
  </div>
</section>
<section className="section on-dark">
  <div className="container quote-block">
    <p className="eyebrow on-dark">Ready to Become a RAM?</p>
    <h2 style={{color: '#fff', margin: '16px 0 24px'}}>Submit your application today.</h2>
    <a className="btn btn-brass" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?source=65912" target="_blank" rel="noopener">Apply Now</a>
  </div>
</section>

    </>
  );
}
