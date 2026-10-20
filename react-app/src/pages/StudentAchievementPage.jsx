import { useEffect } from "react";

export default function StudentAchievementPage() {
  useEffect(() => {
    document.title = "Student Achievement | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/graduation-candid-rows.jpg" alt="Graduates seated together at commencement" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Academics</p>
    <h1>Student Achievement</h1>
    <p className="lede hero-lede">A holistic educational program that motivates students to value and achieve academic excellence within a commitment to moral and spiritual values.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <p className="lede sa-mission">Our mission is to offer a holistic educational program that motivates our students to value and achieve academic excellence within the context of commitment to moral and spiritual values — and to prepare future leaders in distinct communities and the world at large.</p>
    <div className="section-head">
      <p className="eyebrow">Student Achievement Data</p>
      <h2>Categories of Achievement</h2>
    </div>
    <div className="sa-goals">
      <div className="sa-goal">
        <div className="sa-stat"><span className="sa-stat-label">Graduation Rate:</span><span className="sa-stat-num">46%</span></div>
        <div>
          <h3>Institutional Goals</h3>
          <p>Southwestern Christian College defines graduation as the complete fulfillment of core, academic program, and institutional requirements, as well as the resolution of all student financial accounts prior to graduation. Graduation rates are calculated based on cohort completion relative to the initial term of entry. The institutional goal is to attain a minimum annual graduation rate of 46%, aligning with or exceeding the eight-year HBCU average.</p>
        </div>
      </div>
      <div className="sa-goal">
        <div className="sa-stat"><span className="sa-stat-label">Retention Rate:</span><span className="sa-stat-num">68%</span></div>
        <div>
          <p>Southwestern Christian College measures retention using two distinct metrics: term-to-term persistence and (Fall-to-Fall) retention. Retention applies to students who maintain continuous enrollment with no break in attendance. The institution’s benchmark goal is to attain an annual Fall-to-Fall retention rate of at least 71%.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section on-surface">
  <div className="container">
    <div className="sa-overall">
      <table className="sa-table">
        <caption className="sr-only">Institution-wide graduation and retention rates by academic year</caption>
        <thead><tr><th scope="col">Categories of Achievement</th><th scope="col">2025-2026</th><th scope="col">2024-2025</th><th scope="col">2023-2024</th><th scope="col">2022-2023</th><th scope="col">2021-2022</th></tr></thead>
        <tbody>
<tr><th scope="row">Graduation Rate: 46%</th><td>7%</td><td>23%</td><td>21%</td><td>17%</td><td>22%</td></tr>
<tr><th scope="row">Retention Rate: 68%</th><td>19%</td><td>30%</td><td>33%</td><td>46%</td><td>29%</td></tr>
        </tbody>
      </table>
    </div>
    <div className="sa-programs">
    <div className="sa-program">
      <h3>Associates of Arts</h3>
      <table className="sa-table">
        <caption className="sr-only">Associates of Arts graduation and retention rates by academic year</caption>
        <thead><tr><th scope="col">Categories of Achievement</th><th scope="col">2025-2026</th><th scope="col">2024-2025</th><th scope="col">2023-2024</th><th scope="col">2022-2023</th><th scope="col">2021-2022</th></tr></thead>
        <tbody>
<tr><th scope="row">Graduation Rate:</th><td>0%</td><td>13%</td><td>37%</td><td>13%</td><td>21%</td></tr>
<tr><th scope="row">Retention Rate:</th><td>16%</td><td>29%</td><td>22%</td><td>57%</td><td>18%</td></tr>
        </tbody>
      </table>
    </div>
    <div className="sa-program">
      <h3>Associates of Science</h3>
      <table className="sa-table">
        <caption className="sr-only">Associates of Science graduation and retention rates by academic year</caption>
        <thead><tr><th scope="col">Categories of Achievement</th><th scope="col">2025-2026</th><th scope="col">2024-2025</th><th scope="col">2023-2024</th><th scope="col">2022-2023</th><th scope="col">2021-2022</th></tr></thead>
        <tbody>
<tr><th scope="row">Graduation Rate:</th><td>11%</td><td>30%</td><td>16%</td><td>18%</td><td>25%</td></tr>
<tr><th scope="row">Retention Rate:</th><td>18%</td><td>27%</td><td>31%</td><td>41%</td><td>30%</td></tr>
        </tbody>
      </table>
    </div>
    <div className="sa-program">
      <h3>Associates of Science in Criminal Justice</h3>
      <table className="sa-table">
        <caption className="sr-only">Associates of Science in Criminal Justice graduation and retention rates by academic year</caption>
        <thead><tr><th scope="col">Categories of Achievement</th><th scope="col">2025-2026</th><th scope="col">2024-2025</th><th scope="col">2023-2024</th><th scope="col">2022-2023</th><th scope="col">2021-2022</th></tr></thead>
        <tbody>
<tr><th scope="row">Graduation Rate:</th><td>10%</td><td>0%</td><td>n/a</td><td>n/a</td><td>n/a</td></tr>
<tr><th scope="row">Retention Rate:</th><td>20%</td><td>40%</td><td>n/a</td><td>n/a</td><td>n/a</td></tr>
        </tbody>
      </table>
    </div>
    <div className="sa-program">
      <h3>Bachelor of Science in Interdisciplinary Studies</h3>
      <table className="sa-table">
        <caption className="sr-only">Bachelor of Science in Interdisciplinary Studies graduation and retention rates by academic year</caption>
        <thead><tr><th scope="col">Categories of Achievement</th><th scope="col">2025-2026</th><th scope="col">2024-2025</th><th scope="col">2023-2024</th><th scope="col">2022-2023</th><th scope="col">2021-2022</th></tr></thead>
        <tbody>
<tr><th scope="row">Graduation Rate:</th><td>n/a</td><td>n/a</td><td>n/a</td><td>n/a</td><td>n/a</td></tr>
<tr><th scope="row">Retention Rate:</th><td>100%</td><td>29%</td><td>n/a</td><td>n/a</td><td>n/a</td></tr>
        </tbody>
      </table>
    </div>
    <div className="sa-program">
      <h3>Bachelor of Science in Religious Studies</h3>
      <table className="sa-table">
        <caption className="sr-only">Bachelor of Science in Religious Studies graduation and retention rates by academic year</caption>
        <thead><tr><th scope="col">Categories of Achievement</th><th scope="col">2025-2026</th><th scope="col">2024-2025</th><th scope="col">2023-2024</th><th scope="col">2022-2023</th><th scope="col">2021-2022</th></tr></thead>
        <tbody>
<tr><th scope="row">Graduation Rate:</th><td>100%</td><td>10%</td><td>80%</td><td>14%</td><td>38%</td></tr>
<tr><th scope="row">Retention Rate:</th><td>33%</td><td>50%</td><td>20%</td><td>57%</td><td>50%</td></tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</section>

<section className="section on-paper">
  <div className="container sa-race">
    <div className="sa-program">
      <h3>Graduation by Race</h3>
      <table className="sa-table">
        <caption className="sr-only">Graduation rates by race and academic year</caption>
        <thead><tr><th scope="col"></th><th scope="col">2025-2026</th><th scope="col">2024-2025</th><th scope="col">2023-2024</th><th scope="col">2022-2023</th><th scope="col">2021-2022</th></tr></thead>
        <tbody>
<tr><th scope="row">American Indian or Alaska Native</th><td>0%</td><td>67%</td><td>0%</td><td>0%</td><td>----</td></tr>
<tr><th scope="row">Asian or Pacific Islander</th><td>----</td><td>----</td><td>----</td><td>----</td><td>----</td></tr>
<tr><th scope="row">Black or African American</th><td>9%</td><td>18%</td><td>22%</td><td>16%</td><td>24%</td></tr>
<tr><th scope="row">Hispanic</th><td>4%</td><td>22%</td><td>17%</td><td>38%</td><td>0%</td></tr>
<tr><th scope="row">Two or more races</th><td>0%</td><td>50%</td><td>13%</td><td>14%</td><td>0%</td></tr>
<tr><th scope="row">U.S. Nonresident</th><td>0%</td><td>0%</td><td>n/a</td><td>n/a</td><td>n/a</td></tr>
<tr><th scope="row">White</th><td>17%</td><td>0%</td><td>0%</td><td>0%</td><td>—-</td></tr>
<tr><th scope="row">Unknown</th><td>0%</td><td>67%</td><td>—-</td><td>—-</td><td>0%</td></tr>
        </tbody>
      </table>
    </div>
    <div className="sa-program">
      <h3>Retention by Race</h3>
      <table className="sa-table">
        <caption className="sr-only">Retention rates by race and academic year</caption>
        <thead><tr><th scope="col"></th><th scope="col">2025-2026</th><th scope="col">2024-2025</th><th scope="col">2023-2024</th><th scope="col">2022-2023</th><th scope="col">2021-2022</th></tr></thead>
        <tbody>
<tr><th scope="row">American Indian or Alaska Native</th><td>0%</td><td>33%</td><td>100%</td><td>100%</td><td>----</td></tr>
<tr><th scope="row">Asian or Pacific Islander</th><td>----</td><td>----</td><td>----</td><td>----</td><td>----</td></tr>
<tr><th scope="row">Black or African American</th><td>20%</td><td>30%</td><td>31%</td><td>53%</td><td>28%</td></tr>
<tr><th scope="row">Hispanic</th><td>15%</td><td>22%</td><td>17%</td><td>13%</td><td>57%</td></tr>
<tr><th scope="row">Two or more races</th><td>25%</td><td>13%</td><td>63%</td><td>0%</td><td>0%</td></tr>
<tr><th scope="row">U.S. Nonresident</th><td>0%</td><td>0%</td><td>n/a</td><td>n/a</td><td>n/a</td></tr>
<tr><th scope="row">White</th><td>33%</td><td>80%</td><td>0%</td><td>0%</td><td>—-</td></tr>
<tr><th scope="row">Unknown</th><td>0%</td><td>0%</td><td>—-</td><td>—-</td><td>0%</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<section className="section on-surface">
  <div className="container">
    <div className="section-head">
      <p className="eyebrow">IPEDS</p>
      <h2>Forms & Downloads</h2>
    </div>
    <div className="sa-reports">
      <figure className="sa-report">
        <a href="/assets/docs/ipeds-data-feedback-report-2024.pdf" target="_blank" rel="noopener">
          <img src="/assets/images/campus/ipeds-report-2024-cover.jpg" alt="Cover of the IPEDS Data Feedback Report 2024, Southwestern Christian College, Terrell, TX" loading="lazy" />
        </a>
        <figcaption>
          <span>IPEDS Data Feedback Report 2024</span>
          <a className="btn btn-outline-dark" href="/assets/docs/ipeds-data-feedback-report-2024.pdf" target="_blank" rel="noopener">Download</a>
        </figcaption>
      </figure>
      <figure className="sa-report">
        <a href="/assets/docs/ipeds-data-feedback-report-2023.pdf" target="_blank" rel="noopener">
          <img src="/assets/images/campus/ipeds-report-2023-cover.jpg" alt="Cover of the IPEDS Data Feedback Report 2023, Southwestern Christian College, Terrell, TX" loading="lazy" />
        </a>
        <figcaption>
          <span>IPEDS Data Feedback Report 2023</span>
          <a className="btn btn-outline-dark" href="/assets/docs/ipeds-data-feedback-report-2023.pdf" target="_blank" rel="noopener">Download</a>
        </figcaption>
      </figure>
      <figure className="sa-report">
        <a href="/assets/docs/ipeds-data-feedback-report-2022.pdf" target="_blank" rel="noopener">
          <img src="/assets/images/campus/ipeds-report-2022-cover.jpg" alt="Cover of the IPEDS Data Feedback Report 2022, Southwestern Christian College, Terrell, TX" loading="lazy" />
        </a>
        <figcaption>
          <span>IPEDS Data Feedback Report 2022</span>
          <a className="btn btn-outline-dark" href="/assets/docs/ipeds-data-feedback-report-2022.pdf" target="_blank" rel="noopener">Download</a>
        </figcaption>
      </figure>
      <figure className="sa-report">
        <a href="/assets/docs/ipeds-data-feedback-report-2021.pdf" target="_blank" rel="noopener">
          <img src="/assets/images/campus/ipeds-report-2021-cover.jpg" alt="Cover of the IPEDS Data Feedback Report 2021, Southwestern Christian College, Terrell, TX" loading="lazy" />
        </a>
        <figcaption>
          <span>IPEDS Data Feedback Report 2021</span>
          <a className="btn btn-outline-dark" href="/assets/docs/ipeds-data-feedback-report-2021.pdf" target="_blank" rel="noopener">Download</a>
        </figcaption>
      </figure>
    </div>
  </div>
</section>

    </>
  );
}
