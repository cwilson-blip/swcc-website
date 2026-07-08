import { useEffect } from "react";

export default function WorkStudyPage() {
  useEffect(() => {
    document.title = "Work Study | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Financial Aid</p>
    <h1>Work Study</h1>
    <p className="lede">On-campus work experience, paired with the aid you’ve already qualified for.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <h2>The Federal Work-Study Program</h2>
      <p>A federally funded, need-based aid program that helps cover educational expenses while giving students real on-campus work experience and professional development.</p>
      <h2>Eligibility</h2>
      <ul>
        <li>U.S. citizen, permanent resident, or eligible non-citizen per FAFSA/USCIS standards</li>
        <li>Demonstrated financial need</li>
        <li>Satisfactory academic progress, maintained annually</li>
        <li>Enrolled at least half-time (6+ credit hours)</li>
      </ul>
      <h2>Restrictions</h2>
      <ul>
        <li>Only one work-study position at a time</li>
        <li>No working during scheduled class or exam times</li>
        <li>No supervision by relatives</li>
        <li>Cannot combine work study with another campus job</li>
        <li>Maximum of 20 hours per week</li>
      </ul>
    </div>
    <aside className="side-card">
      <h4>Award Amounts</h4>
      <p>Maximum annual award: <strong>$2,000</strong> ($1,000 per term). Earnings cannot exceed the awarded amount.</p>
      <h4 style={{marginTop: '20px'}}>State Work Study</h4>
      <p style={{color: 'var(--stone)', fontSize: '0.92rem'}}>SwCC does not currently offer a state-funded work-study program.</p>
    </aside>
  </div>
</section>

    </>
  );
}
