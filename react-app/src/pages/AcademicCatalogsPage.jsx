import { useEffect } from "react";

export default function AcademicCatalogsPage() {
  useEffect(() => {
    document.title = "Academic Catalogs | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Academics</p>
    <h1>Academic Catalogs</h1>
    <p className="lede">Full course descriptions, degree requirements, and academic policy, by year.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <ul className="doc-list">
      <li><a href="https://www.swcc.edu/_files/ugd/82aa45_3e7b95121dbc4225b2f034d20f389c17.pdf" target="_blank" rel="noopener">2024–2025 Academic Catalog <span className="tag">PDF</span></a></li>
      <li><a href="https://www.swcc.edu/_files/ugd/82aa45_dfc7d371ac2e4d57aaff5036d10a1643.pdf" target="_blank" rel="noopener">2023–2024 Academic Catalog <span className="tag">PDF</span></a></li>
      <li><a href="https://www.swcc.edu/_files/ugd/82aa45_7c760a3ba12c48fc86f36945e8d04fdc.pdf" target="_blank" rel="noopener">2022–2023 Academic Catalog <span className="tag">PDF</span></a></li>
      <li><a href="https://www.swcc.edu/_files/ugd/82aa45_3d001c69665f473789bb54e8504f7232.pdf" target="_blank" rel="noopener">2019–2021 Academic Catalog <span className="tag">PDF</span></a></li>
    </ul>
  </div>
</section>

    </>
  );
}
