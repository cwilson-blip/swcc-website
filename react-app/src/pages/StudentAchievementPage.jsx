import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function StudentAchievementPage() {
  useEffect(() => {
    document.title = "Student Achievement | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/graduation-candid-rows.jpg" alt="Graduates seated together at commencement" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Student Achievement</p>
    <h1>Student Achievement</h1>
    <p className="lede hero-lede">A holistic educational program that motivates students to value and achieve academic excellence within a commitment to moral and spiritual values.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>Our mission is to offer a holistic educational program that motivates our students to value and achieve academic excellence within the context of commitment to moral and spiritual values — and to prepare future leaders in distinct communities and the world at large.</p>
    <h2>IPEDS Reports</h2>
    <p>Southwestern Christian College reports student achievement data annually to the Integrated Postsecondary Education Data System (IPEDS). 2021–2024 reports are available from the Office of Institutional Effectiveness upon request.</p>
    <Link className="btn btn-outline-dark" to="/institutional-effectiveness">Institutional Effectiveness</Link>
  </div>
</section>

    </>
  );
}
