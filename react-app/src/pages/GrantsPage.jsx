import { useEffect } from "react";

export default function GrantsPage() {
  useEffect(() => {
    document.title = "Grants | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Financial Aid</p>
    <h1>Grants</h1>
    <p className="lede">Need-based support that doesn’t need to be repaid.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <h2>Federal Supplemental Educational Opportunity Grant (FSEOG)</h2>
    <p>Priority goes to students with the lowest Student Aid Index (SAI) combined with Pell Grant eligibility — those demonstrating exceptional financial need.</p>
    <h2>Texas Equalization Grant (TEG)</h2>
    <p>For Texas residents with demonstrated financial need, enrolled in at least 9 credit hours. Funding is limited, so apply early.</p>
    <h2>Pell Grant</h2>
    <p>For students with exceptional financial need per the FAFSA. Award amount varies with enrolled credit hours, and usage is capped at 12 semesters of enrollment or upon earning a bachelor’s degree.</p>
    <a className="btn btn-outline-dark" href="https://www.swcc.edu/_files/ugd/82aa45_cf30083804ec45a990f7f47ff07e3036.pdf" target="_blank" rel="noopener">Download Grant Flyer</a>
  </div>
</section>

    </>
  );
}
