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
      <div className="plaque"><h4>Calendar</h4><p>Academic year calendar, available on request.</p></div>
      <div className="plaque"><h4>Catalog</h4><p>Public class schedule via the Populi student portal.</p></div>
    </div>
  </div>
</section>

    </>
  );
}
