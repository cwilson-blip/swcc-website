import { useEffect } from "react";

export default function DefaultPreventionPage() {
  useEffect(() => {
    document.title = "Default Prevention | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Default Prevention</h1>
    <p className="lede">The Default Prevention Department wants to help you bring your account current.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <h2>Borrower Responsibilities</h2>
      <ul>
        <li>Repay your loan regardless of employment or completion status</li>
        <li>Notify your lender before your due date if you’re unable to pay</li>
        <li>Make minimum monthly payments on time</li>
        <li>Notify your lender within 10 days of an address, name, or employment change</li>
        <li>Notify your lender within 10 days of a transfer or enrollment change</li>
      </ul>
      <h2>Consequences of Default (270+ Days Past Due)</h2>
      <ul>
        <li>Immediate full balance due</li>
        <li>Credit bureau reporting</li>
        <li>Federal tax refund seizure and wage garnishment</li>
        <li>Ineligibility for future financial aid</li>
        <li>Collection agency referral or civil suit, with borrower responsible for collection costs and attorney fees</li>
        <li>Possible bar on state professional license renewal</li>
      </ul>
      <h2>Borrower Options</h2>
      <ul>
        <li>Deferment (economic hardship, in-school, unemployment, or disability)</li>
        <li>Forbearance (mandatory or economic hardship)</li>
        <li>Consolidation</li>
        <li>Alternative payment plans (income-sensitive, graduated, or lowered payment)</li>
      </ul>
    </div>
    <aside className="side-card">
      <h4>Default Prevention Department</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">(972) 524-3341 ext. 135</a></dd>
        <dt>Fax</dt><dd>(972) 563-7133</dd>
        <dt>Toll Free</dt><dd>1-800-925-9357</dd>
      </dl>
    </aside>
  </div>
</section>

    </>
  );
}
