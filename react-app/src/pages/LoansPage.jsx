import { useEffect } from "react";

export default function LoansPage() {
  useEffect(() => {
    document.title = "Loans | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Financial Aid</p>
    <h1>Loans</h1>
    <p className="lede">Federal, state, and private options when scholarships and grants don’t cover the full cost.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <h2>Federal Loans</h2>
    <h3>Subsidized</h3>
    <p>Requires demonstrated financial need. The government covers accruing interest while you’re enrolled at least half-time, and for the first six months after graduation or withdrawal.</p>
    <h3>Unsubsidized</h3>
    <p>Available regardless of financial need. Interest begins accruing from the date of disbursement.</p>
    <h2>State Loans</h2>
    <p>The Texas College Access Loan (CAL) Program is an alternative loan for students who can’t meet the full cost of attendance after exhausting other aid. Requires at least half-time enrollment and credit approval.</p>
    <h2>Private Loans</h2>
    <p>A supplement when federal aid doesn’t fully cover cost. SwCC directs students to ELM Select, a neutral, non-recommended comparison of private lenders.</p>
  </div>
</section>

    </>
  );
}
