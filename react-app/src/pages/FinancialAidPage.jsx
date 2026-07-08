import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function FinancialAidPage() {
  useEffect(() => {
    document.title = "Financial Aid Office | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Financial Aid</p>
    <h1>The Financial Aid Office</h1>
    <p className="lede">Welcome to the experience of your lifetime. We’re here to help you find every dollar of support you qualify for.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <p>The Office of Financial Aid partners with families to determine cost-share and available aid. Once accepted, check your email and Populi account regularly for your award status and any outstanding requirements.</p>
      <p>Grant awards are accepted automatically. For loans, log into Populi to accept the loan, complete a Master Promissory Note, and finish loan entrance counseling.</p>
      <div className="fafsa-code" style={{marginTop: '8px'}}>
        <span>SwCC FAFSA School Code</span>
        <strong>003618</strong>
      </div>
      <a className="btn btn-outline-dark" href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener">Complete Your FAFSA</a>
      <h2 style={{marginTop: '48px'}}>Explore Your Options</h2>
      <div className="grid grid-4" style={{marginTop: '8px'}}>
        <Link className="plaque" to="/scholarships" style={{display: 'block'}}><h4>Scholarships</h4></Link>
        <Link className="plaque" to="/grants" style={{display: 'block'}}><h4>Grants</h4></Link>
        <Link className="plaque" to="/loans" style={{display: 'block'}}><h4>Loans</h4></Link>
        <Link className="plaque" to="/work-study" style={{display: 'block'}}><h4>Work Study</h4></Link>
      </div>
    </div>
    <aside className="side-card">
      <h4>Financial Aid Office</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">(972) 524-3341 ext. 129</a></dd>
        <dt>Email</dt><dd><a href="mailto:Financialaid@swcc.edu">Financialaid@swcc.edu</a></dd>
        <dt>Hours</dt><dd>Mon–Thu 9am–5pm, Fri 9am–4pm</dd>
        <dt>Location</dt><dd>Timothy Hunt Science Building</dd>
        <dt>Mailing Address</dt><dd>P.O. Box 10, Terrell, TX 75160, Attn: Financial Aid Office</dd>
      </dl>
      <a className="btn btn-brass" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?source=65912" target="_blank" rel="noopener">Apply Now</a>
    </aside>
  </div>
</section>

    </>
  );
}
