import { useEffect } from "react";

export default function BoardPage() {
  useEffect(() => {
    document.title = "Meet Our Board | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/board-of-trustees.jpg" alt="The Southwestern Christian College Board of Trustees in academic regalia at a commencement ceremony" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">About SwCC</p>
    <h1>Meet Our Board of Trustees</h1>
    <p className="lede hero-lede">The volunteer leaders who steward the mission of Southwestern Christian College.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="people-grid">
      <div className="person-card"><h4>John H. Dansby, Sr.</h4><p className="person-role">Chairman</p></div><div className="person-card"><h4>Leonardo Gilbert</h4><p className="person-role">Vice Chairman</p></div><div className="person-card"><h4>Helen Curtis</h4><p className="person-role">Secretary</p></div><div className="person-card"><h4>Billy Curl</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>Maybelline Griffin</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>Glynda Mayo-Hall</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>Charles Harrison III</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>Daniel Harrison</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>Ramon Hodridge</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>Roderick Johnson</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>LeDetra Jones</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>David Lane</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>Bruce Nash</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>Dr. Reba Rollinson</h4><p className="person-role">Trustee</p></div><div className="person-card"><h4>Randall Tucker, Sr.</h4><p className="person-role">Trustee</p></div>
    </div>
  </div>
</section>

    </>
  );
}
