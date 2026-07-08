import { useEffect } from "react";

export default function StudentSuccessPage() {
  useEffect(() => {
    document.title = "Center for Student Success | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Center for Student Success</h1>
    <p className="lede">A place where amazing things get done.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <p>The Center for Student Success offers the skill sets essential for earning a college degree — note-taking instruction, study skills training, time management coaching, test-taking strategies, structured motivational learning experiences, and peer tutoring.</p>
    </div>
    <aside className="side-card">
      <h4>Director</h4>
      <dl>
        <dt>Name</dt><dd>Kecia Baker</dd>
        <dt>Phone</dt><dd><a href="tel:9725243341">(972) 524-3341</a></dd>
        <dt>Email</dt><dd><a href="mailto:Kecia.Baker@swcc.edu">Kecia.Baker@swcc.edu</a></dd>
        <dt>Location</dt><dd>Science Building</dd>
      </dl>
    </aside>
  </div>
</section>

    </>
  );
}
