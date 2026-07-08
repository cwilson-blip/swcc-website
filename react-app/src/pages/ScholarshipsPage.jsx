import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ScholarshipsPage() {
  useEffect(() => {
    document.title = "Scholarships | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/graduates-group-stoles.jpg" alt="SwCC graduates wearing scholarship stoles" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Financial Aid</p>
    <h1>Scholarship Opportunities</h1>
    <p className="lede hero-lede">Awards for academics, ministry, music, athletics, and regional legacy — built to recognize the RAMs who earn them.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <h2 style={{marginBottom: '24px'}}>Institutional Scholarships</h2>
    <div className="grid grid-4 plaque-grid">
      <div className="plaque"><span className="plaque-amount">$1,000</span><h4>Academic Scholarship</h4><p>Per semester, 3.5 GPA or higher.</p></div>
      <div className="plaque"><span className="plaque-amount">$1,000</span><h4>Chorus Scholarship</h4><p>Section leaders up to $1,000; non-section leaders $750, per semester.</p></div>
      <div className="plaque"><span className="plaque-amount">$2,000</span><h4>Ministerial Scholarship</h4><p>Per semester, for students pursuing ministry and Religious Studies.</p></div>
      <div className="plaque"><span className="plaque-amount">$2,000</span><h4>Presidential Scholarship</h4><p>Per semester, 3.7 GPA or higher, for student leaders.</p></div>
    </div>
    <h2 style={{margin: '48px 0 24px'}}>Special & Regional Scholarships</h2>
    <div className="grid grid-3 plaque-grid">
      <div className="plaque"><span className="plaque-amount">$2,000</span><h4>Abraham & Nancy Jones Gray</h4><p>For residents of Alabama or the District of Columbia.</p></div>
      <div className="plaque"><span className="plaque-amount">$2,000</span><h4>Bay Workers Memorial Fund</h4><p>For residents of the Bay Area or Northern California.</p></div>
      <div className="plaque"><span className="plaque-amount">$2,000</span><h4>Legacy Scholarship</h4><p>For first- or second-generation family members of SwCC graduates.</p></div>
      <div className="plaque"><span className="plaque-amount">$2,000</span><h4>Annie Mae Davis Endowed</h4><p>For first- or second-generation family members of SwCC graduates.</p></div>
      <div className="plaque"><span className="plaque-amount">$4,000</span><h4>Charles D. Gaskin Ministerial</h4><p>For aspiring ministerial students.</p></div>
      <div className="plaque"><span className="plaque-amount">$2,000</span><h4>J.S. Winston Sound Doctrine</h4><p>For aspiring ministerial students.</p></div>
      <div className="plaque"><span className="plaque-amount">$4,000</span><h4>Local Incentive Scholarship</h4><p>For residents of Terrell and the surrounding area.</p></div>
    </div>
    <h2 style={{margin: '48px 0 24px'}}>Athletic & Program Scholarships</h2>
    <div className="grid grid-3 plaque-grid">
      <div className="plaque"><h4>Athletic Scholarships</h4><p>For men’s and women’s basketball, volleyball, and track, per NJCAA eligibility.</p></div>
      <div className="plaque"><h4>Grants in Aid</h4><p>$1,000 academic grants for incoming freshmen and sophomores with a 3.70 GPA; a $300/semester Presidential Incentive discount for a 3.0 GPA.</p></div>
      <div className="plaque"><h4>Program Scholarships</h4><p>Available for Criminal Justice and Interdisciplinary Studies students.</p></div>
    </div>
    <Link className="btn btn-outline-dark" to="/contact">Request a Scholarship Application</Link>
  </div>
</section>

    </>
  );
}
