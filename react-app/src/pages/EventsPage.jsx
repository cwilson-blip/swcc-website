import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function EventsPage() {
  useEffect(() => {
    document.title = "Events | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Events</p>
    <h1>Upcoming Events</h1>
    <p className="lede">Milestones and traditions that bring the SwCC community together.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="grid grid-2">
      <Link className="apply-card" to="/graduation" style={{display: 'flex'}}>
        <h3>2026 Graduation</h3>
        <p>Saturday, May 9 at 10:30am — Ben Foster, Jr. Memorial Chapel. Our 75th commencement exercise.</p>
      </Link>
      <a className="apply-card" href="https://www.swcclectureship.com/" target="_blank" rel="noopener" style={{display: 'flex'}}>
        <h3>2025 Lectureship</h3>
        <p>The 88th SwCC Lectureship, November 22–26, 2025. Worship, workshops, alumni events, and more.</p>
      </a>
    </div>
    <p style={{marginTop: '32px'}}><a className="btn btn-outline-dark" href="https://www.tickettailor.com/events/southwesternchristiancollege/1233313" target="_blank" rel="noopener">Purchase Seats</a></p>
  </div>
</section>

    </>
  );
}
