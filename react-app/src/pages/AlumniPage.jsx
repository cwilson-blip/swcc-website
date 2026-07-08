import { useEffect } from "react";

export default function AlumniPage() {
  useEffect(() => {
    document.title = "Alumni | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/hbcu-congratulations-group.jpg" alt="Alumni and community members celebrating together" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Alumni</p>
    <h1>Alumni</h1>
    <p className="lede hero-lede">A community of RAMs stays connected long after graduation.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <p>The Southwestern Christian College National Alumni Association supports the college financially and charitably, and coordinates activities that keep graduates connected to the campus and to one another. It serves as the central alumni body, with its own leadership and administrative structure.</p>
      <a className="btn btn-outline-dark" href="https://www.swccalumni.com" target="_blank" rel="noopener">Visit the Alumni Association</a>
    </div>
    <aside className="side-card">
      <h4>Stay Connected</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">972-524-3341</a></dd>
        <dt>Email</dt><dd><a href="mailto:info@swcc.edu">info@swcc.edu</a></dd>
      </dl>
    </aside>
  </div>
</section>

    </>
  );
}
