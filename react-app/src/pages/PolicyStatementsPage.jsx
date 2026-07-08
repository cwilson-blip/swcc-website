import { useEffect } from "react";

export default function PolicyStatementsPage() {
  useEffect(() => {
    document.title = "Policy Statements | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Policy Statements</h1>
    <p className="lede">Intellectual Property Policy</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>Southwestern Christian College supports the development, production, and dissemination of intellectual property by its faculty, staff, and students — including computer programs, literary works, musical works, and distance-education course development.</p>
    <h2>Student-Created IP</h2>
    <p>Work created by students remains the sole and exclusive property of the student author or inventor, except where the student voluntarily transfers that property to the college, or where the work was created as part of assigned college employment.</p>
    <h2>Staff-Created IP</h2>
    <p>Work tied to job duties is the sole and exclusive property of the college. Staff retain rights to work created outside their job duties or through independent professional development.</p>
    <h2>Teaching Materials</h2>
    <p>Syllabi, assignments, and tests remain faculty property, though the college retains the right to use them internally. Faculty must preserve institutional rights when transferring copyright to outside publishers.</p>
    <h2>Governance</h2>
    <p>The Faculty Senate administers and monitors these standards, conducts periodic review of the policy, and resolves related disputes.</p>
  </div>
</section>

    </>
  );
}
