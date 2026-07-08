import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  useEffect(() => {
    document.title = "Our School | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/ceremony-stage-dignitaries.jpg" alt="Southwestern Christian College graduation ceremony on stage" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">About SwCC</p>
    <h1>Our School</h1>
    <p className="lede hero-lede">A small school with a BIG love of learning — rooted in Terrell, Texas, since 1948.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <p className="eyebrow">A Message From Our School</p>
      <h2>Welcome to Southwestern Christian College</h2>
      <p>Southwestern Christian College carries deep Christian roots and a historical foundation in Terrell, Texas — and a forward-thinking, dynamic approach to preparing students for what comes next. We hold academic excellence and spiritual growth as equal priorities, taught by dedicated faculty alongside friendly, driven classmates.</p>
      <p>Our campus sits a short drive from Dallas, the ninth largest city in the country, giving students easy access to internships, culture, and opportunity without leaving behind the close-knit feel of a small college community.</p>
      <p>Give us a semester, and we’ll help change your path. Give us a year, and watch the evolution — from student to leader, from student to minister, from student to success story.</p>
      <h2>Our Values</h2>
      <p>We nurture academic excellence within a Christian framework, offering programs that help students meet both academic and spiritual goals. Our campus community blends serious educational pursuit with spiritual introspection and a genuine commitment to service.</p>
      <h2>A Commitment to Excellence</h2>
      <p>Our mission is to cultivate Christian-infused education and develop compassionate leaders — empowering students academically, spiritually, and socially for the work ahead of them.</p>
    </div>
    <aside>
      <div className="side-card">
        <h4>Join Us Today</h4>
        <ul>
          <li><a className="btn btn-outline-dark" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?source=65912" target="_blank" rel="noopener">Apply</a></li>
          <li><Link className="btn btn-outline-dark" to="/how-to-enroll#tours">Visit</Link></li>
          <li><Link className="btn btn-outline-dark" to="/contact">Inquire</Link></li>
          <li><Link className="btn btn-outline-dark" to="/admitted-next-steps">Enroll</Link></li>
        </ul>
      </div>
      <div className="side-card">
        <h4>Contact</h4>
        <dl>
          <dt>Phone</dt><dd><a href="tel:9725243341">972-524-3341</a></dd>
          <dt>Email</dt><dd><a href="mailto:info@swcc.edu">info@swcc.edu</a></dd>
          <dt>Address</dt><dd>200 Bowser Circle, Terrell, TX 75160</dd>
        </dl>
      </div>
    </aside>
  </div>
</section>

    </>
  );
}
