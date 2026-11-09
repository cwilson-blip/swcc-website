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

    <h3>Subsidized Loans</h3>
    <p>Students are not responsible for interest on loan while enrolled in half-time or more credit hours, and for the first six months after graduation or withdrawing from school.</p>
    <ul>
      <li>Students must demonstrate financial need.</li>
      <li>The government pays the interest while the student is enrolled in half-time credit hours or more and for the first six months after graduating or withdrawing from school.</li>
    </ul>

    <h3>Unsubsidized Loans</h3>
    <p>Unlike the subsidized loan interest is accruing on the loan during enrollment and continues after graduation or withdrawing from school.</p>
    <ul>
      <li>Students are eligible for loan regardless of financial need.</li>
      <li>Interest on loan begins accruing from the date of disbursement.</li>
    </ul>

    <h3>Dependent Students</h3>
    <div className="loan-table-wrap">
      <table className="loan-table">
        <caption className="sr-only">Federal loan borrowing limits for dependent students</caption>
        <thead><tr><th scope="col">Year</th><th scope="col">Total Annual Borrowing limit</th><th scope="col">Subsidized loan limits</th><th scope="col">Total Amount (if dependent parent is denied parent plus loan)</th></tr></thead>
        <tbody>
          <tr><th scope="row">First-year undergraduate</th><td>5500</td><td>3500 (2000 - unsub)</td><td>9500</td></tr>
          <tr><th scope="row">Second-year undergraduate</th><td>6500</td><td>4500 (2000 - unsub)</td><td>10500</td></tr>
          <tr><th scope="row">Third-year Undergraduate and beyond</th><td>7500</td><td>5500 (2000 - unsub)</td><td>12500</td></tr>
        </tbody>
      </table>
    </div>

    <h3>Independent Students</h3>
    <div className="loan-table-wrap">
      <table className="loan-table">
        <caption className="sr-only">Federal loan borrowing limits for independent students</caption>
        <thead><tr><th scope="col">Year</th><th scope="col">Total Annual Borrowing limit</th><th scope="col">Subsidized loan limits</th></tr></thead>
        <tbody>
          <tr><th scope="row">First-year undergraduate</th><td>9500</td><td>3500 (6000 - unsub)</td></tr>
          <tr><th scope="row">Second-year Undergraduate</th><td>10500</td><td>4500 (6000 - unsub)</td></tr>
          <tr><th scope="row">Third-year Undergraduate and beyond</th><td>12500</td><td>5500 (7000 - unsub)</td></tr>
        </tbody>
      </table>
    </div>

    <h2>State</h2>
    <h3>State of Texas CAL Loan — College Access Loan Program</h3>
    <p>Alternative education loan made to students by the state for students who are unable to meet the cost of attendance after exhausting other awarded aid. Must be enrolled at least half-time. Credit approval is required.</p>

    <h2>Private Loans</h2>
    <p>Private or what is commonly referred to as alternative loans are typically used when a student’s financial aid package — including grants, scholarships, and federal loans — doesn’t fully cover the cost of attendance. These loans should only be considered after all federal loans options have been explored, as federal loans usually offer lower interest rates and more flexible repayment terms.</p>
    <p>Southwestern Christian College is prohibited from recommending any particular lender, so with that being said, the college uses <a href="https://www.elmselect.com/v4/" target="_blank" rel="noopener">ELM Select</a>, a neutral platform that allows students and parents to compare lenders and loan products. <a href="https://www.elmselect.com/v4/" target="_blank" rel="noopener">Click on the link to view the lender list.</a> The lenders are selected based on the quality of their products and services for students. Please keep in mind this list is provided as a resource. Parents and students are free to choose from any lender that best suits their needs.</p>
    <a className="btn btn-brass" href="https://www.elmselect.com/v4/" target="_blank" rel="noopener">View the ELM Select Lender List</a>
  </div>
</section>

    </>
  );
}
