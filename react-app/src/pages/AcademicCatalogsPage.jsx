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
      <li><a href="/assets/docs/academic-catalog-2024-2025.pdf" target="_blank" rel="noopener">2024–2025 Academic Catalog <span className="tag">PDF</span></a></li>
      <li><a href="/assets/docs/academic-catalog-2023-2024.pdf" target="_blank" rel="noopener">2023–2024 Academic Catalog <span className="tag">PDF</span></a></li>
      <li><a href="/assets/docs/academic-catalog-2022-2023.pdf" target="_blank" rel="noopener">2022–2023 Academic Catalog <span className="tag">PDF</span></a></li>
      <li><a href="/assets/docs/academic-catalog-2019-2021.pdf" target="_blank" rel="noopener">2019–2021 Academic Catalog <span className="tag">PDF</span></a></li>
    </ul>
  </div>
</section>

    </>
  );
}
