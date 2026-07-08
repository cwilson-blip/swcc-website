import { useEffect } from "react";

export default function LibraryPage() {
  useEffect(() => {
    document.title = "Doris Johnson Library | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Doris Johnson Library</h1>
    <p className="lede">Named for the college’s head librarian, housed in the Hogan-Steward Learning Center.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <p>The Doris Johnson Library sits west of the campus entrance, in a facility built in 1974 and expanded by 1,800 square feet in a 1988 renovation — 5,000 square feet in total.</p>
      <p>The collection contains over 26,000 volumes, with subscriptions to more than 190 nationally recognized magazines, journals, and newspapers, alongside microforms, CD-ROMs, and electronic databases. Special collections include extensive Bible and Religious Studies holdings and an African American Studies Collection reflecting SwCC’s HBCU heritage.</p>
    </div>
    <aside className="side-card">
      <h4>Services</h4>
      <ul>
        <li>Online library catalog</li>
        <li>Library orientation programs</li>
        <li>Internet access & online databases</li>
        <li>Microfiche/microfilm reader & printer</li>
        <li>Books on tape</li>
      </ul>
    </aside>
  </div>
</section>

    </>
  );
}
