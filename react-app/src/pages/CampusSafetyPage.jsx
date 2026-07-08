import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CampusSafetyPage() {
  useEffect(() => {
    document.title = "Campus Safety | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Campus Safety</h1>
    <p className="lede">Safety, Security, and Supervision is our priority.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <p>The SwCC Campus Police Department was approved by the State of Texas and activated on October 4, 2018 through the Texas Commission on Law Enforcement (TCOLE). All campus police officers are TCOLE-certified and commissioned by the department, serving as the primary law enforcement agency responsible for the care, custody, and control of SwCC students, staff, and supporters.</p>
      <p>In accordance with the Jeanne Clery Disclosure of Campus Security Policy and Campus Crime Statistics Act of 1998, the Campus Police Department keeps a rolling 60-day crime log of all reported incidents on or near college property.</p>
      <h2>Annual Security & Fire Safety Reports</h2>
      <ul className="doc-list">
        <li><Link to="/contact">2023 Report</Link></li>
        <li><Link to="/contact">2022 Report</Link></li>
        <li><Link to="/contact">2021 Report</Link></li>
        <li><Link to="/contact">2020 Report</Link></li>
      </ul>
    </div>
    <aside className="side-card">
      <h4>SwCC Campus Police</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">972.524.3341 ext. 131</a></dd>
        <dt>24/7 Line</dt><dd><a href="tel:6828002408">682.800.2408</a></dd>
        <dt>Email</dt><dd><a href="mailto:SwCCPD@SwCC.edu">SwCCPD@SwCC.edu</a></dd>
        <dt>Chief of Police</dt><dd>Dr. Yalonda Coats, PhD</dd>
        <dt>Location</dt><dd>Timothy Hunt Science Building, 1st Floor</dd>
      </dl>
      <a className="btn btn-outline-dark" href="http://www.swccpolice.org/" target="_blank" rel="noopener">Anonymous Reporting Portal</a>
    </aside>
  </div>
</section>

    </>
  );
}
