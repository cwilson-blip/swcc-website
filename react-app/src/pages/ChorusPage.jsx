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

    </>
  );
}
