import { useEffect } from "react";

export default function HowToEnrollPage() {
  useEffect(() => {
    document.title = "How To Enroll | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Admissions</p>
    <h1>How To Enroll</h1>
    <p className="lede">Our staff is ready to help freshman, transfer, and international students complete every step below.</p>
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
      <ul className="doc-list">
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_ecf226ff444146489895e96ee545f949.pdf" target="_blank" rel="noopener">General Application <span className="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_ad8c95e8a294416a8bd743e4382e937f.pdf" target="_blank" rel="noopener">Medical Record <span className="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_79b963539b324290b4409d1536ef2f65.pdf" target="_blank" rel="noopener">Academic Recommendation <span className="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_48f0f9cb321c4bf3b4734a79b12d9e41.pdf" target="_blank" rel="noopener">Character Recommendation <span className="tag">PDF</span></a></li>
        <li><a href="https://www.swcc.edu/_files/ugd/0775cf_08fbb8858b444d59832669d232388e4c.pdf" target="_blank" rel="noopener">Residence Hall Form <span className="tag">PDF</span></a></li>
      </ul>
      <p>Prefer to mail your forms? Send them to: Southwestern Christian College, P.O. Box 10, Terrell, TX 75160.</p>

      <h2>Step 3 — Other Documents</h2>
      <ul>
        <li>Freshman applicants: official high school transcript(s)</li>
        <li>Transfer applicants: transcripts from all colleges attended</li>
        <li>Immunization record (copy of shot records)</li>
        <li>A current photograph (2x2 preferred)</li>
        <li>A 600-word typed essay — <a href="http://swcc.edu/2017Required_Essay_Question.pdf" target="_blank" rel="noopener">view the required essay question</a></li>
        <li>Financial assistance: complete the <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener">FAFSA</a> using SwCC’s school code <strong>003618</strong></li>
      </ul>

      <h2>Step 4 — Application Fee & Dorm Deposit</h2>
      <div className="def-grid">
        <div><dt>Application Fee</dt><dd>$20, non-refundable</dd></div>
        <div><dt>Dorm Room Deposit</dt><dd>$50, non-refundable</dd></div>
      </div>
    </div>
    <aside className="side-card">
      <h4>Apply Now</h4>
      <p style={{color: 'var(--stone)', fontSize: '0.92rem'}}>Ready to submit? Start your application online.</p>
      <a className="btn btn-brass" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?source=65912" target="_blank" rel="noopener">Apply Now</a>
      <h4 style={{marginTop: '24px'}}>Questions?</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">972-524-3341</a></dd>
        <dt>Email</dt><dd><a href="mailto:info@swcc.edu">info@swcc.edu</a></dd>
      </dl>
    </aside>
  </div>
</section>
<section className="section on-dark" id="tours">
  <div className="container quote-block">
    <p className="eyebrow on-dark">Campus Tours</p>
    <h2 style={{color: '#fff', margin: '16px 0 20px'}}>See the campus for yourself.</h2>
    <p style={{color: 'rgba(255,255,255,0.72)', maxWidth: '60ch', margin: '0 auto 24px'}}>To schedule a group visit, email <a href="mailto:admissions@swcc.edu" style={{color: '#fff'}}>admissions@swcc.edu</a>. Individual tour scheduling will be available soon.</p>
    <a className="btn btn-brass" href="mailto:admissions@swcc.edu">Email Admissions</a>
  </div>
</section>

    </>
  );
}
