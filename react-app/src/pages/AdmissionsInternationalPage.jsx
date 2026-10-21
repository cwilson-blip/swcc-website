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
      <p>Complete your <a href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?embedded=1&application_form=40497&source=65912" target="_blank" rel="noopener">International Application</a> online, plus the following forms:</p>
      <ul className="doc-list">
        <li><a href="/assets/docs/admissions-medical-record.pdf" target="_blank" rel="noopener">Medical Record <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/admissions-academic-recommendation.pdf" target="_blank" rel="noopener">Academic Recommendation <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/admissions-character-recommendation.pdf" target="_blank" rel="noopener">Character Recommendation <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/admissions-residence-hall-form.pdf" target="_blank" rel="noopener">Residence Hall Form <span className="tag">PDF</span></a></li>
      </ul>
      <h2>Step 3 — Other Documents (F-1 Visa)</h2>
      <ul>
        <li>Freshman applicants: official high school transcript(s); transfer applicants: transcripts from all colleges attended</li>
        <li>Immunization record (copy of shot records)</li>
        <li>A current photograph (2x2 preferred)</li>
      </ul>
      <p>F-1 visa documentation:</p>
      <ul className="doc-list">
        <li><a href="/assets/docs/international-f1-travel-handout.pdf" target="_blank" rel="noopener">F-1 Travel Handout <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-how-to-get-a-ssn.pdf" target="_blank" rel="noopener">How to Get a SSN <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-f1-employment-info.pdf" target="_blank" rel="noopener">F-1 Employment Info <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-f1-registration-data-sheet.pdf" target="_blank" rel="noopener">F-1 Registration Data Sheet <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-f1-in-form.pdf" target="_blank" rel="noopener">F-1 “In” Form <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-f1-transfer-out-form.pdf" target="_blank" rel="noopener">F-1 Transfer-Out Form <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-i20-application.pdf" target="_blank" rel="noopener">I-20 Application <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-i20-extension.pdf" target="_blank" rel="noopener">I-20 Extension <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-f1-and-i20-updates.pdf" target="_blank" rel="noopener">F-1 and I-20 Updates <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-rcl-application.pdf" target="_blank" rel="noopener">RCL Application <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-financial-verification.pdf" target="_blank" rel="noopener">Financial Verification <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-fast-fact-sheet.pdf" target="_blank" rel="noopener">Fast Fact Sheet <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/international-letter-from-admissions.pdf" target="_blank" rel="noopener">Letter from Admissions <span className="tag">PDF</span></a></li>
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
      <a className="btn btn-brass" href="/assets/docs/international-forms-packet.pdf" target="_blank" rel="noopener">Download Forms</a>
      <a className="btn btn-outline-dark" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?embedded=1&application_form=40497&source=65912" target="_blank" rel="noopener">Start International Application</a>
    </aside>
  </div>
</section>

    </>
  );
}
