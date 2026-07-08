import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CampusHousingPage() {
  useEffect(() => {
    document.title = "Campus Housing | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/welcome-day-gathering.jpg" alt="Students gathered in a residence hall common area" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Admissions</p>
    <h1>Campus Housing</h1>
    <p className="lede hero-lede">Modern, air-conditioned residence halls, with separate facilities for men and women.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <h2>SwCC Residence Halls</h2>
    <p>Southwestern Christian College houses students in modern, air-conditioned, two-story residence halls, with separate facilities for men and women. Each hall is built for comfortable, close-knit community living — the kind of shared experience that turns classmates into lifelong friends.</p>
    <p>A $50 non-refundable dorm room deposit reserves your space. See the <Link to="/how-to-enroll">How To Enroll</Link> page for full application steps, or the <Link to="/tuition-fees">Tuition & Fees</Link> page for the full cost of attendance.</p>
    <Link className="btn btn-outline-dark" to="/how-to-enroll">Start Your Application</Link>
  </div>
</section>

    </>
  );
}
