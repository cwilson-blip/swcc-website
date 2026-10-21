import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ResourcesPage() {
  useEffect(() => {
    document.title = "Resources | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Resources</h1>
    
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="grid grid-4 plaque-grid">
      <div className="plaque"><h4>Location</h4><p>200 Bowser Circle, Terrell, Texas 75160.</p></div>
      <Link className="plaque" to="/directory" style={{display: 'block'}}><h4>Directory</h4><p>Find any office or staff extension.</p></Link>
      <Link className="plaque" to="/academics#academic-calendar" style={{display: 'block'}}><h4>Calendar</h4><p>The 2026–27 Academic Calendar, with a downloadable PDF.</p></Link>
      <div className="plaque"><h4>Catalog</h4><p>Public class schedule via the Populi student portal.</p></div>
    </div>
  </div>
</section>

<section className="section on-surface" id="campus-map">
  <div className="container">
    <div className="section-head">
      <p className="eyebrow">Campus Facilities</p>
      <h2>Campus Map</h2>
      <p className="lede">200 Bowser Circle, Terrell, Texas 75160.</p>
    </div>
    <figure className="campus-map">
      <a href="/assets/images/campus/campus-map.jpg" target="_blank" rel="noopener">
        <img src="/assets/images/campus/campus-map.jpg" alt="Southwestern Christian College campus map. Legend: 1 Security Office, 2 Mary Carpenter Hall, 3 Timothy Hunt Science Building, 4 Administration Building, 5 I.R. Building, 6 Gym, 7 J.S. Winston Hall, 8 Tennis Court, 9 H.S. Learning Center, 10 SwCC Cottages, 11 Fine Arts Building, 12 GKF, 13 Dining Hall, 14 Foundational Arts Building, 15 S.U.B., 16 West End C.O.C., 17 Round House. The entrance is off Jack Evans Drive, with general parking near the gym and the Timothy Hunt Science Building and employee parking off West End Drive." width="2200" height="1771" loading="lazy" />
      </a>
      <figcaption>
        <span>Tap or click the map to open it full size.</span>
        <a className="btn btn-outline-dark" href="/assets/docs/campus-map.pdf" target="_blank" rel="noopener">Download Campus Map (PDF)</a>
      </figcaption>
    </figure>
  </div>
</section>

    </>
  );
}
