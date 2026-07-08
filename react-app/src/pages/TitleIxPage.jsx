import { useEffect } from "react";

export default function TitleIxPage() {
  useEffect(() => {
    document.title = "Title IX | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Initiatives</p>
    <h1>Title IX of the Education Amendments of 1972</h1>
    
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <h2>Non-Discrimination Statement</h2>
      <p>Southwestern Christian College is committed to providing a workplace and educational environment, and other benefits, programs, and activities, that are free from sex discrimination. This commitment extends to race, color, national or ethnic origin, religion, age, veteran status, disabilities, and sexual orientation.</p>
      <p>“No person in the United States shall, on the basis of sex, be excluded from participation in, be denied the benefits of, or be subjected to discrimination under any program or activity receiving Federal financial assistance.”</p>
      <h2>Amnesty Policy</h2>
      <p>Good-faith reporters of gender-based violence are not sanctioned for related alcohol or drug conduct violations.</p>
      <h2>Report an Incident</h2>
      <p>Incidents can be reported to the Title IX Coordinator through the SwCC Incident Report Form, or directly to Campus Police.</p>
    </div>
    <aside className="side-card">
      <h4>Reporting Contacts</h4>
      <dl>
        <dt>SwCC Campus Police (24/7)</dt><dd><a href="tel:6828002408">(682) 800-2408</a> or ext. 131</dd>
        <dt>Terrell Police Department</dt><dd><a href="tel:4694742700">(469) 474-2700</a></dd>
        <dt>Women’s Center of Terrell</dt><dd><a href="tel:9725635555">(972) 563-5555</a></dd>
        <dt>Domestic Violence Hotline</dt><dd><a href="tel:2149411991">(214) 941-1991</a></dd>
        <dt>Crisis Center</dt><dd><a href="tel:9034549999">(903) 454-9999</a></dd>
      </dl>
    </aside>
  </div>
</section>

    </>
  );
}
