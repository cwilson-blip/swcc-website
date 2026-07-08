import { useEffect } from "react";

export default function DonatePage() {
  useEffect(() => {
    document.title = "Donate | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Give</p>
    <h1>Donate</h1>
    <p className="lede">Your gift keeps SwCC’s mission of faith and education moving forward.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="grid grid-4 plaque-grid">
      <div className="plaque"><h4>General Donation</h4><p>Support the college’s everyday mission.</p></div>
      <div className="plaque"><h4>SwCC Student</h4><p>Directly support a student’s education.</p></div>
      <div className="plaque"><h4>Scholarships</h4><p>Fund the awards that bring RAMs to campus.</p></div>
      <div className="plaque"><h4>Endowment</h4><p>Invest in the college’s long-term future.</p></div>
    </div>
    <div className="callout" style={{marginTop: '8px'}}>
      <p><strong>Give by CashApp:</strong> $SWCCBUSINESS  ·  <strong>Mail a gift:</strong> 200 Bowser Circle, Terrell, Texas 75160</p>
    </div>
    <a className="btn btn-brass" href="mailto:info@swcc.edu">Donate With PayPal</a>
  </div>
</section>

    </>
  );
}
