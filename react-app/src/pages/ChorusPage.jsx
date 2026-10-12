import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ChorusPage() {
  useEffect(() => {
    document.title = "A Cappella Chorus | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Programs</p>
    <h1>A Cappella Chorus</h1>
    
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>Life on the campus of Southwestern Christian College is not just academics, but also the social atmosphere that promotes growth and friendship — the kind that lasts a lifetime. The A Cappella Chorus is one of several organizations at SwCC where students build that community, on stage and off.</p>
    <p>Chorus participation and leadership also come with dedicated scholarship support — see the <Link to="/scholarships">Scholarships</Link> page for details.</p>
  </div>
</section>

<section className="section on-deep chorus-listen" id="performances">
  <div className="container">
    <div className="section-head">
      <p className="eyebrow">Hear the Chorus</p>
      <h2>2026–27 debut performance.</h2>
      <p className="lede">Northside Church of Christ · San Antonio, Texas · September 26, 2026</p>
    </div>

    <article className="chorus-feature">
      <div className="chorus-player">
        <video controls playsInline preload="metadata" poster="/assets/images/campus/chorus-treasures-poster.jpg">
          <source src="/assets/video/chorus-treasures.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="chorus-meta">
        <p className="chorus-track">Featured</p>
        <h3>Treasures</h3>
        <p>The SwCC A Cappella Chorus’s debut performance of the 2026–27 year, sung at Northside Church of Christ in San Antonio.</p>
        <span className="chorus-time">2:40</span>
      </div>
    </article>

    <div className="chorus-pair">
      <article>
        <div className="chorus-player">
          <video controls playsInline preload="metadata" poster="/assets/images/campus/chorus-mt-zion-poster.jpg">
            <source src="/assets/video/chorus-mt-zion-hebrews-12.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="chorus-meta">
          <p className="chorus-track">Hebrews 12</p>
          <h3>Mt. Zion</h3>
          <span className="chorus-time">2:42</span>
        </div>
      </article>
      <article>
        <div className="chorus-player">
          <video controls playsInline preload="metadata" poster="/assets/images/campus/chorus-taste-and-see-poster.jpg">
            <source src="/assets/video/chorus-taste-and-see.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="chorus-meta">
          <p className="chorus-track">Psalm 34</p>
          <h3>Taste & See</h3>
          <span className="chorus-time">4:29</span>
        </div>
      </article>
    </div>
  </div>
</section>

    </>
  );
}
