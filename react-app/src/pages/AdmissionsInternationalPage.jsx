import { useEffect } from "react";

export default function AdmissionsInternationalPage() {
  useEffect(() => {
    document.title = "Admissions (International) | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Admissions</p>
    <h1>Admissions (International)</h1>
    <p className="lede">Greetings, future international students — here is everything you need to apply.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <h2>Step 1 — Due Dates</h2>
      <div className="def-grid">
        <div><dt>Fall Semester</dt><dd>August 17</dd></div>
        <div><dt>Spring Semester</dt><dd>January 10</dd></div>
      </div>
      <h2>Step 2 — Forms Required</h2>
      <ul>
        <li>International Application</li>
        <li>Medical Record</li>
        <li>Academic Recommendation</li>
        <li>Character Recommendation</li>
        <li>Residence Hall Form</li>
      </ul>
      <h2>Step 3 — Other Documents (F-1 Visa)</h2>
      <ul>
        <li>Transcripts and immunization record</li>
        <li>Current photograph</li>
        <li>Travel Handout, Employment Info, and Registration Data Sheet</li>
        <li>“In” Form and Transfer-Out Form</li>
        <li>I-20 Application, Extension, and Updates</li>
        <li>RCL Application and Financial Verification</li>
        <li>Fast Fact Sheet and Letter From Admissions</li>
      </ul>
      <p><em>All scholarships, gifts, and awards for international students must be approved in writing by the President’s office.</em></p>
      <h2>Step 4 — Fees</h2>
      <div className="def-grid">
        <div><dt>Application Fee</dt><dd>$100, non-refundable</dd></div>
        <div><dt>Dorm Room Deposit</dt><dd>$50, non-refundable</dd></div>
      </div>
      <p>Mailing address: P.O. Box 10, Terrell, TX 75160.</p>
    </div>
    <aside className="side-card">
      <h4>Download All Forms</h4>
      <p style={{color: 'var(--stone)', fontSize: '0.92rem'}}>Every F-1 document in one packet.</p>
      <a className="btn btn-brass" href="https://www.swcc.edu/_files/ugd/82aa45_916e6a63eb434a95bdcf942bd797c1d4.pdf" target="_blank" rel="noopener">Download Forms</a>
      <a className="btn btn-outline-dark" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?embedded=1&application_form=40497&source=65912" target="_blank" rel="noopener">Start International Application</a>
    </aside>
  </div>
</section>

    </>
  );
}
