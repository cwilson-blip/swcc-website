import { useEffect } from "react";

export default function HistoryPage() {
  useEffect(() => {
    document.title = "Our History | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/academic-regalia-procession.jpg" alt="Faculty in academic regalia during a campus ceremony" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Our History</p>
    <h1>Our History</h1>
    <p className="lede hero-lede">From a forty-five-student Bible institute in Fort Worth to a college campus with deep roots in Terrell, Texas.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="timeline">
      <div className="timeline-item">
        <span className="timeline-year">1865</span>
        <h3>The Round House</h3>
        <p>Long before the college existed, the land it now occupies held the “Round House” — the first dwelling built in Terrell. Its octagonal shape was designed for protection, and it held the first glass windows in Kaufman County. It remains one of only twenty surviving round houses in the country.</p>
      </div>
      <div className="timeline-item">
        <span className="timeline-year">1948</span>
        <h3>Southern Bible Institute Is Founded</h3>
        <p>The school opened in the fall of 1948 with about forty-five students in Fort Worth, Texas, under the name Southern Bible Institute. George P. Bowser (1874–1950) stands as a key founding figure in that early work.</p>
      </div>
      <div className="timeline-item">
        <span className="timeline-year">1949</span>
        <h3>A Move to Terrell — and a New Name</h3>
        <p>In the summer of 1949, the Trustees purchased property in Terrell that had previously belonged to Texas Military College. That same ground had earlier served as a co-ed school (1896–1904), a Methodist school, and Colonel Perry’s military academy. With the move, the school took the name it carries today: Southwestern Christian College.</p>
      </div>
      <div className="timeline-item">
        <span className="timeline-year">2008</span>
        <h3>Rebuilding After Fire</h3>
        <p>In the pre-dawn hours of January 27, 2008, a fire destroyed the college’s administration building and an adjacent structure. The campus rebuilt — and the renovation work continues today across the Administration Building, the Student Union, and several residence halls.</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
