import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TuitionFeesPage() {
  useEffect(() => {
    document.title = "Tuition & Fees | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Admissions</p>
    <h1>Tuition & Fees</h1>
    <p className="lede">The full cost of attendance, and how financial aid can help close the gap.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <h2>Cost of Attendance</h2>
      <p>Your full, itemized Cost of Attendance — tuition, room, board, and fees — is published each year. Request the current breakdown from the Office of Admissions, or start with financial aid to see what SwCC can offer toward your total cost.</p>
      <div className="def-grid">
        <div><dt>Application Fee</dt><dd>$20 (domestic), non-refundable</dd></div>
        <div><dt>International Application Fee</dt><dd>$100, non-refundable</dd></div>
        <div><dt>Dorm Room Deposit</dt><dd>$50, non-refundable</dd></div>
        <div><dt>FAFSA School Code</dt><dd>003618</dd></div>
      </div>
      <Link className="btn btn-outline-dark" to="/contact">Request a Full Cost Breakdown</Link>
    </div>
    <aside className="side-card">
      <h4>Financial Aid</h4>
      <p style={{color: 'var(--stone)', fontSize: '0.92rem'}}>Scholarships, grants, loans, and work study can all reduce your out-of-pocket cost.</p>
      <Link className="btn btn-outline-dark" to="/financial-aid">Visit Financial Aid</Link>
    </aside>
  </div>
</section>

    </>
  );
}
