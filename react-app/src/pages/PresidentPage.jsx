import { useEffect } from "react";

export default function PresidentPage() {
  useEffect(() => {
    document.title = "Meet Our President | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/president-podium-oath.jpg" alt="Dr. Ervin D. Seamster, Jr. addressing the campus community" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Meet Our President</p>
    <h1>Dr. Ervin D. Seamster, Jr.</h1>
    <p className="lede hero-lede">President and CEO, Southwestern Christian College</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <h2>From Student to President</h2>
      <p>More than 25 years ago, Dr. Ervin D. Seamster, Jr. arrived at Southwestern Christian College as a student with limited academic confidence and a GPA that needed work. The faculty and mentors who surrounded him offered encouragement, prayer, and financial support — and turned his academic career around to Dean’s List standing.</p>
      <p>After graduating from SwCC, Dr. Seamster pursued advanced theological study at Perkins School of Theology and United Theological Seminary. In January 2017, he returned to lead the very institution that had shaped him, stepping into the role of President and CEO.</p>
      <p>His leadership emphasizes personal transformation, institutional excellence, and Christian values — shaping students into leaders across ministry, business, education, and beyond.</p>
      <blockquote className="testimonial">“Give us a semester, and change your life. Give us a year — and witness your evolution.”</blockquote>
      <p>Dr. Seamster was recently honored with the “Spirit of the King” Award from the City of Terrell, recognizing his leadership and dedication to the community.</p>
    </div>
    <aside>
      <div className="side-card">
        <h4>Past Letters From Our President</h4>
        <p style={{color: 'var(--stone)', fontSize: '0.92rem'}}>An archive of dated letters from Dr. Seamster spans March 2020 through March 2025, sharing updates and reflections with the SwCC community.</p>
      </div>
    </aside>
  </div>
</section>

    </>
  );
}
