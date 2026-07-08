import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Our Services | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Our Services</h1>
    <p className="lede">Safety, Security, and Supervision is our priority.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="grid grid-3 plaque-grid">
      <Link className="plaque" to="/campus-safety" style={{display: 'block'}}><h4>Campus Safety</h4><p>24/7 campus police, TCOLE-certified since 2018.</p></Link>
      <Link className="plaque" to="/student-success" style={{display: 'block'}}><h4>Center for Student Success</h4><p>Tutorials, counseling, and workshops.</p></Link>
      <Link className="plaque" to="/library" style={{display: 'block'}}><h4>Doris Johnson Library</h4><p>Over 26,000 volumes and growing.</p></Link>
      <Link className="plaque" to="/default-prevention" style={{display: 'block'}}><h4>Default Prevention</h4><p>Helping students keep loans out of default.</p></Link>
      <div className="plaque"><h4>Student Support Services</h4><p>Federally funded tutorials, counseling, and structured learning support.</p></div>
    </div>
  </div>
</section>

    </>
  );
}
