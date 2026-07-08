import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function InitiativesPage() {
  useEffect(() => {
    document.title = "Initiatives | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Initiatives</p>
    <h1>College Initiatives</h1>
    <p className="lede">The programs and policies that keep SwCC accountable to its students and community.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="grid grid-3 plaque-grid">
      <Link className="plaque" to="/institutional-effectiveness" style={{display: 'block'}}><h4>Institutional Effectiveness</h4><p>Data-informed decision making for continuous improvement.</p></Link>
      <Link className="plaque" to="/cares-act" style={{display: 'block'}}><h4>CARES Act Reporting</h4><p>HEERF emergency student aid disclosures.</p></Link>
      <Link className="plaque" to="/title-ix" style={{display: 'block'}}><h4>Title IX</h4><p>Non-discrimination policy and reporting resources.</p></Link>
    </div>
  </div>
</section>

    </>
  );
}
