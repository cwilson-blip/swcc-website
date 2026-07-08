import { useEffect } from "react";

export default function CaresActPage() {
  useEffect(() => {
    document.title = "CARES Act Reporting | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Initiatives</p>
    <h1>CARES Act — Reporting</h1>
    
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>In accordance with Section 18004(e) of the Coronavirus Aid, Relief, and Economic Security Act (“CARES Act”), Southwestern Christian College discloses the following.</p>
    <p>SwCC signed the Certification and Agreement under Section 18004(a)(1) to receive HEERF funds, including HEERF III (CRRSAA) funds, of which 50% is designated for emergency student grants.</p>
    <div className="callout">
      <p>The College received <strong>$437,977.00</strong> in funding from the U.S. Department of Education to award emergency financial aid grants to students. No awards were made as an emergency financial aid grant for the quarter of January 1, 2024 through March 31, 2024.</p>
    </div>
    <p>Eligibility covers domestic undergraduate, degree-seeking students enrolled in Spring 2024 with demonstrated need per their FAFSA Expected Family Contribution. Funds may be used for housing, food, health care, counseling, childcare, and tuition.</p>
    <h2>Quarterly HEERF Reports</h2>
    <p>Reports are published quarterly and available upon request from the Business Office, covering each quarter from September 30, 2020 through the current reporting period.</p>
  </div>
</section>

    </>
  );
}
