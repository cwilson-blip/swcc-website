import { useEffect } from "react";

export default function CampusRenovationsPage() {
  useEffect(() => {
    document.title = "Campus Renovations | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Campus Renovations</h1>
    <p className="lede">Rebuilding and renewing the campus, one project at a time.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="grid grid-4 plaque-grid">
      <div className="plaque"><h4>Administration Building</h4><p>Final Phase & Phase 1</p></div>
      <div className="plaque"><h4>GKF Performing Arts Center</h4></div>
      <div className="plaque"><h4>G.P. Bowser Memorial Gymnasium</h4><p>Phase 1</p></div>
      <div className="plaque"><h4>Men’s Residence Hall</h4></div>
      <div className="plaque"><h4>Women’s Residence Hall</h4><p>Phase 1 & 2</p></div>
      <div className="plaque"><h4>Round House</h4><p>Phase 3</p></div>
      <div className="plaque"><h4>Student Union Building</h4><p>Phase 1 & 3</p></div>
      <div className="plaque"><h4>Entrance & Circle</h4></div>
      <div className="plaque"><h4>Guest Housing</h4><p>Phase 3</p></div>
      <div className="plaque"><h4>Health & Wellness Center</h4></div>
      <div className="plaque"><h4>Library Roof</h4><p>Phase 1 & 2</p></div>
    </div>
  </div>
</section>

    </>
  );
}
