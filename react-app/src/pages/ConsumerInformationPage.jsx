import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ConsumerInformationPage() {
  useEffect(() => {
    document.title = "Consumer Information | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Consumer Information</h1>
    <p className="lede">“Right to Know” source information, disclosed per the Higher Education Act of 2008. Paper copies of all information are available upon request.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <h2 style={{marginBottom: '8px'}}>Academic Information & Policies</h2>
    <ul className="doc-list">
      <li><Link to="/academics">Academic Programs</Link></li>
      <li><a href="https://www.sacscoc.org" target="_blank" rel="noopener">Accreditation — SACSCOC</a></li>
      <li><Link to="/institutional-effectiveness">Institutional Assessment</Link></li>
      <li><Link to="/student-achievement">Student Achievement</Link></li>
      <li><Link to="/financial-aid">Applying for Aid</Link></li>
      <li><Link to="/tuition-fees">Cost of Attendance</Link></li>
    </ul>
    <h2 style={{margin: '40px 0 8px'}}>General Institution Information</h2>
    <ul className="doc-list">
      <li><Link to="/resources">Campus Facilities & Map</Link></li>
    </ul>
    <h2 style={{margin: '40px 0 8px'}}>Intercollegiate Athletics</h2>
    <ul className="doc-list">
      <li><a href="https://www.swccramathletics.com/landing/index" target="_blank" rel="noopener">Athletics</a></li>
    </ul>
    <h2 style={{margin: '40px 0 8px'}}>Safety Information</h2>
    <ul className="doc-list">
      <li><Link to="/campus-safety">Fire and Safety Report</Link></li>
    </ul>
    <h2 style={{margin: '40px 0 8px'}}>Student Rights</h2>
    <ul className="doc-list">
      <li><Link to="/grievance-policy">Student Grievance Policy & Procedure</Link></li>
    </ul>
    <h2 style={{margin: '40px 0 16px'}}>More Consumer Information</h2>
    <div className="grid grid-4 plaque-grid">
      <Link className="plaque" to="/resources" style={{display: 'block'}}><h4>Resources</h4></Link>
      <Link className="plaque" to="/default-prevention" style={{display: 'block'}}><h4>Default Prevention</h4></Link>
      <Link className="plaque" to="/directory" style={{display: 'block'}}><h4>Campus Directory</h4></Link>
      <Link className="plaque" to="/policy-statements" style={{display: 'block'}}><h4>Policy Statements</h4></Link>
      <Link className="plaque" to="/grievance-policy" style={{display: 'block'}}><h4>Student Grievance Policy</h4></Link>
      <Link className="plaque" to="/services" style={{display: 'block'}}><h4>Our Services</h4></Link>
      <Link className="plaque" to="/library" style={{display: 'block'}}><h4>Doris Johnson Library</h4></Link>
      <Link className="plaque" to="/student-success" style={{display: 'block'}}><h4>Center for Student Success</h4></Link>
      <Link className="plaque" to="/campus-renovations" style={{display: 'block'}}><h4>Campus Renovations</h4></Link>
    </div>
  </div>
</section>

    </>
  );
}
