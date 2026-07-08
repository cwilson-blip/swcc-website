import { useEffect } from "react";

export default function InstitutionalEffectivenessPage() {
  useEffect(() => {
    document.title = "Institutional Effectiveness | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Initiatives</p>
    <h1>The Office of Institutional Effectiveness</h1>
    <p className="lede">Data-informed decision making that leads to institutional improvement and enhanced student learning.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>The Office of Institutional Effectiveness is a team of professionals who support the college-wide effort to promote data-informed decision making. The office assists the campus with accreditation, assessment, analysis, training, and information dissemination.</p>
    <p>Institutional Effectiveness means the systematic collection, analysis, organization, warehousing, and dissemination of quantitative and qualitative information concerning the characteristics and performance of the institution.</p>
    <h2>Our Continuous Improvement Cycle</h2>
    <ol>
      <li>Define and revise strategic goals</li>
      <li>Develop and refine assessment measures</li>
      <li>Collect and analyze data</li>
      <li>Leverage results for enhancements</li>
    </ol>
    <h2>Three Strategic Goals</h2>
    <h3>Academic Excellence</h3>
    <p>Knowledge, intellectual growth, and scholarly work across the liberal arts, including a stronger first-year experience and writing culture.</p>
    <h3>Access and Affordability</h3>
    <p>Recruiting diverse, talented students and expanding opportunity through recruitment and financial aid initiatives.</p>
    <h3>A Thriving and Inclusive College Community</h3>
    <p>Student well-being programs, diverse hiring, and long-term athletics planning.</p>
  </div>
</section>

    </>
  );
}
