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
  <div className="container">
    <div className="section-head">
      <p className="eyebrow">Annual Cost</p>
      <h2>Cost of Attendance</h2>
      <p className="lede">A full academic year’s cost, itemized by category, for students living on campus versus off campus with parents.</p>
    </div>
    <p className="scroll-hint">Swipe to see the full table →</p>
    <div className="table-scroll">
      <table className="info-table">
        <thead><tr><th></th><th>On Campus</th><th>Off Campus w/ Parents</th></tr></thead>
        <tbody>
          <tr><td>Tuition and Fees</td><td>$14,396</td><td>$13,638</td></tr>
          <tr><td>Books and Supplies</td><td>$1,500</td><td>$1,500</td></tr>
          <tr><td>Room and Board</td><td>$7,042</td><td>$3,862</td></tr>
          <tr><td>Other Expenses</td><td>$2,230</td><td>$1,000</td></tr>
          <tr><td><strong>Total Cost</strong></td><td><strong>$25,168</strong></td><td><strong>$20,000</strong></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section className="section on-surface">
  <div className="container two-col">
    <div className="prose">
      <h2>Fees & Deposits</h2>
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
