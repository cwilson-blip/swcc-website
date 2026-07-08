import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DegreePlansPage() {
  useEffect(() => {
    document.title = "Degree Plans | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Academics</p>
    <h1>Degree Plans</h1>
    <p className="lede">Graduation requirements for every program of study at SwCC.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <h2>Associate of Arts — 62 Hours</h2>
    <p>Required coursework spans Bible, Computer Science, English, Foreign Language, History, Humanities, Mathematics, Physical Education, Psychology/Sociology, and Speech, plus electives.</p>
    <h2>Associate of Science — 62 Hours</h2>
    <p>Mirrors the Associate of Arts, substituting Natural Science coursework for the Foreign Language requirement.</p>
    <h2>Religious Studies Bachelor of Science — 131 Hours</h2>
    <p>Builds on the associate-level foundation with specialized coursework in Religion, Bible, and Ministry, an internship component, a minor, and additional electives.</p>
    <Link className="btn btn-outline-dark" to="/academic-catalogs">See Full Course Catalogs</Link>
  </div>
</section>

    </>
  );
}
