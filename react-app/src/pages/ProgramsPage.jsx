import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ProgramsPage() {
  useEffect(() => {
    document.title = "Campus Life & Programs | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/gym-community-event.jpg" alt="Community gathering in the campus gymnasium" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Programs</p>
    <h1>Campus Life & Programs</h1>
    <p className="lede hero-lede">A choice of clubs and organizations for your pleasure and on-campus networking.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="grid grid-2 plaque-grid">
      <Link className="plaque" to="/criminal-justice" style={{display: 'block'}}>
        <h4>Criminal Justice</h4>
        <p>An associate degree preparing ethical, faith-grounded leaders for careers in public service.</p>
      </Link>
      <Link className="plaque" to="/studio" style={{display: 'block'}}>
        <h4>The Upper Room Studios</h4>
        <p>A hybrid recording facility built around an SSL Origin 32 console, open for booked sessions.</p>
      </Link>
      <a className="plaque" href="https://www.swccramathletics.com/landing/index" target="_blank" rel="noopener" style={{display: 'block'}}>
        <h4>Athletics</h4>
        <p>NJCAA Region 5 basketball, volleyball, track & field, soccer, and cross country.</p>
      </a>
      <Link className="plaque" to="/chorus" style={{display: 'block'}}>
        <h4>A Cappella Chorus</h4>
        <p>Campus social life through music, friendship, and performance.</p>
      </Link>
    </div>
  </div>
</section>

    </>
  );
}
