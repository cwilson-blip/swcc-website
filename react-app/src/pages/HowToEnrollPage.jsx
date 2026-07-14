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
    <div>
      <div className="steps">
        <div className="step">
          <span className="step-num" aria-hidden="true"></span>
          <div>
            <h3>Submit Application</h3>
            <p>Complete the <a href="https://www.swcc.edu/_files/ugd/0775cf_ecf226ff444146489895e96ee545f949.pdf" target="_blank" rel="noopener">General Application</a> and pay the $20 non-refundable application fee. Fall semester applications are due August 17; spring semester applications are due January 10.</p>
          </div>
        </div>
        <div className="step">
          <span className="step-num" aria-hidden="true"></span>
          <div>
            <h3>Submit Transcripts</h3>
            <p>Freshman applicants: submit an official high school transcript. Transfer applicants: submit transcripts from all colleges attended.</p>
          </div>
        </div>
        <div className="step">
          <span className="step-num" aria-hidden="true"></span>
          <div>
            <h3>Complete FAFSA <span style={{color: 'var(--stone)', fontWeight: '400'}}>(Code: 003618)</span></h3>
            <p>Apply for financial assistance using the <a href="https://studentaid.gov/h/apply-for-aid/fafsa" target="_blank" rel="noopener">FAFSA</a> and SwCC’s school code <strong>003618</strong>.</p>
          </div>
        </div>
        <div className="step">
          <span className="step-num" aria-hidden="true"></span>
          <div>
            <h3>Submit Enrollment Documents</h3>
            <p>Complete your Medical Record, Academic Recommendation, Character Recommendation, and Residence Hall forms, along with an immunization record, a current 2x2 photograph, and the required 600-word essay.</p>
            <ul className="doc-list" style={{marginTop: '14px'}}>
              <li><a href="https://www.swcc.edu/_files/ugd/0775cf_ad8c95e8a294416a8bd743e4382e937f.pdf" target="_blank" rel="noopener">Medical Record <span className="tag">PDF</span></a></li>
              <li><a href="https://www.swcc.edu/_files/ugd/0775cf_79b963539b324290b4409d1536ef2f65.pdf" target="_blank" rel="noopener">Academic Recommendation <span className="tag">PDF</span></a></li>
              <li><a href="https://www.swcc.edu/_files/ugd/0775cf_48f0f9cb321c4bf3b4734a79b12d9e41.pdf" target="_blank" rel="noopener">Character Recommendation <span className="tag">PDF</span></a></li>
              <li><a href="https://www.swcc.edu/_files/ugd/0775cf_08fbb8858b444d59832669d232388e4c.pdf" target="_blank" rel="noopener">Residence Hall Form <span className="tag">PDF</span></a></li>
              <li><a href="http://swcc.edu/2017Required_Essay_Question.pdf" target="_blank" rel="noopener">Required Essay Question <span className="tag">PDF</span></a></li>
            </ul>
            <p style={{marginTop: '14px'}}>Prefer to mail your forms? Send them to: Southwestern Christian College, P.O. Box 10, Terrell, TX 75160.</p>
            <p>A $50 non-refundable dorm room deposit reserves your housing space.</p>
          </div>
        </div>
        <div className="step">
          <span className="step-num" aria-hidden="true"></span>
          <div>
            <h3>Visit Campus & Enroll</h3>
            <p>Tour the campus, meet our faculty and staff, and complete your enrollment.</p>
          </div>
        </div>
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
