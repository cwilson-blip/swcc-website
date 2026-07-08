import { useEffect } from "react";

export default function OnlineClassesPage() {
  useEffect(() => {
    document.title = "Online Classes | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Academics</p>
    <h1>Online Classes</h1>
    
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>For current information on online course offerings, formats, and schedules, please contact the Office of Admissions directly.</p>
    <a className="btn btn-outline-dark" href="mailto:admissions@swcc.edu">Email admissions@swcc.edu</a>
  </div>
</section>

    </>
  );
}
