import { useEffect } from "react";

export default function GraduationPage() {
  useEffect(() => {
    document.title = "2026 Graduation | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/graduation-wide-podium.jpg" alt="Graduation ceremony at Ben Foster, Jr. Memorial Chapel" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Events</p>
    <h1>2026 Graduation</h1>
    <p className="lede hero-lede">Please join the Southwestern Christian College family as we celebrate the 2026 graduating class of World-Changers.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <p>We request the honor of your presence at our 75th commencement exercise.</p>
      <div className="def-grid">
        <div><dt>Date</dt><dd>Saturday, May 9, 2026</dd></div>
        <div><dt>Time</dt><dd>10:30 a.m.</dd></div>
        <div><dt>Location</dt><dd>Ben Foster, Jr. Memorial Chapel</dd></div>
        <div><dt>Milestone</dt><dd>75th Commencement Exercise</dd></div>
      </div>
    </div>
    <aside className="side-card">
      <h4>Purchase Seats</h4>
      <p style={{color: 'var(--stone)', fontSize: '0.92rem'}}>Reserve seating for graduation guests.</p>
      <a className="btn btn-brass" href="https://www.tickettailor.com/events/southwesternchristiancollege/1233313" target="_blank" rel="noopener">Purchase Seats</a>
    </aside>
  </div>
</section>

    </>
  );
}
