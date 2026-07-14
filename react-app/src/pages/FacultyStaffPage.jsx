import { useEffect } from "react";

export default function FacultyStaffPage() {
  useEffect(() => {
    document.title = "Meet Our Faculty & Staff | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">About SwCC</p>
    <h1>Meet Our Faculty & Staff</h1>
    <p className="lede">The people who teach, mentor, and run the day-to-day life of the college.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <h2 style={{marginBottom: '24px'}}>Academic Department</h2>
    <div className="people-grid"><div className="person-card"><h4>Dr. Femi Adeyemi</h4><p className="person-role">Adjunct Professor</p></div><div className="person-card"><h4>Vanessa Baker</h4><p className="person-role">English Professor</p></div><div className="person-card"><h4>Erik Buchanan, M.A.</h4><p className="person-role">Spanish Professor</p><p><a href="mailto:Erik.Buchanan@swcc.edu">Erik.Buchanan@swcc.edu</a></p></div><div className="person-card"><h4>Justin Felder</h4><p className="person-role">Adjunct Bible Instructor</p></div><div className="person-card"><h4>Johnson Kisero</h4><p className="person-role">Biology Professor</p></div><div className="person-card"><h4>Nathan Nwobi</h4><p className="person-role">Mathematics Professor</p></div><div className="person-card"><h4>Dr. Walter Price</h4><p className="person-role">Speech Professor</p><p><a href="mailto:professorprice@swcc.edu">professorprice@swcc.edu</a></p></div></div>
  </div>
</section>
<section className="section section-tight on-surface">
  <div className="container">
    <h2 style={{marginBottom: '24px'}}>Administration & Leadership</h2>
    <div className="people-grid"><div className="person-card"><h4>Dr. Barry Graham</h4><p className="person-role">Interim Chief of Academic Affairs</p><p><a href="mailto:bgrah@swcc.edu">bgrah@swcc.edu</a></p></div><div className="person-card"><h4>Dr. Ben Foster</h4><p className="person-role">Dean of Student Affairs</p></div><div className="person-card"><h4>Dr. Eric Jackson</h4><p className="person-role">Director of Admissions</p></div></div>
  </div>
</section>
<section className="section section-tight on-paper">
  <div className="container">
    <h2 style={{marginBottom: '24px'}}>Student Services & Operations</h2>
    <div className="people-grid"><div className="person-card"><h4>Kecia Baker-Morris</h4><p className="person-role">Registrar</p></div><div className="person-card"><h4>Alva Baker</h4><p className="person-role">Accounts Payable Manager</p></div><div className="person-card"><h4>Vernesha Cathey</h4><p className="person-role">Title III Director / Recruiter</p></div><div className="person-card"><h4>Alma Hernandez</h4><p className="person-role">Administrative Assistant to the President</p></div><div className="person-card"><h4>Drew Johnson</h4><p className="person-role">Facilities Manager / Women’s Dorm Supervisor</p></div><div className="person-card"><h4>Dr. Yalonda Coats</h4><p className="person-role">Chief of Police</p></div><div className="person-card"><h4>Officer Corya Lang</h4><p className="person-role">Assistant Chief of Police / HR Manager</p></div><div className="person-card"><h4>Kenny Fox</h4><p className="person-role">Assistant CFO</p></div><div className="person-card"><h4>Robert Morrow</h4><p className="person-role">Food Service Manager / President’s Special Assistant</p></div><div className="person-card"><h4>Gloria Rice</h4><p className="person-role">School Operator / Admin. Assistant for Admissions</p></div><div className="person-card"><h4>Lois Walker</h4><p className="person-role">Administrative Assistant, Business Office</p></div><div className="person-card"><h4>Tomeka Wilson</h4><p className="person-role">Comptroller</p></div></div>
  </div>
</section>
<section className="section section-tight on-surface">
  <div className="container">
    <h2 style={{marginBottom: '24px'}}>Athletics</h2>
    <div className="people-grid"><div className="person-card"><h4>Darryl Allen</h4><p className="person-role">Track Coach</p></div><div className="person-card"><h4>Dustin White</h4><p className="person-role">Athletic Director / Men’s Basketball Coach</p></div></div>
  </div>
</section>

    </>
  );
}
