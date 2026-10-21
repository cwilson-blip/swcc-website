import { useEffect } from "react";

export default function PreviewDayPage() {
  useEffect(() => {
    document.title = "Preview Day 2026 | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/entrance-sign-graduate.jpg" alt="A graduate poses at the Southwestern Christian College entrance sign" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Admissions Events</p>
    <h1>Preview Day 2026</h1>
    <p className="lede hero-lede">Thank you for visiting — come see what makes SwCC home.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>Preview Day gives prospective students and families a firsthand look at campus — classrooms, residence halls, chapel, and the people who make SwCC feel like home. Download the full event flyer for this year’s date, schedule, and registration details.</p>
    <a className="btn btn-outline-dark" href="/assets/docs/preview-day-flyer.pdf" target="_blank" rel="noopener">Download the Preview Day Flyer</a>
  </div>
</section>

    </>
  );
}
