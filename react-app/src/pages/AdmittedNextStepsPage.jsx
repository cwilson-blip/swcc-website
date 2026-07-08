import { useEffect } from "react";

export default function AdmittedNextStepsPage() {
  useEffect(() => {
    document.title = "Next Steps for Admitted RAMs | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Admitted Students</p>
    <h1>Congratulations, Future RAM!</h1>
    <p className="lede">Welcome to the SwCC family. Follow these steps to complete your enrollment and prepare for your first semester.</p>
  </div>
</section>

<section className="section section-tight on-surface">
  <div className="container banner-figure">
    <img src="/assets/images/campaign-bound-banner.png" alt="Admitted and Bound — you're in, you belong, you're a RAM" />
  </div>
</section>
<section className="section on-paper">
  <div className="container">
    <div className="two-col">
      <div>
        <div className="steps">
          <div className="step">
            <span className="step-num" aria-hidden="true"></span>
            <div>
              <h3>Submit Your Final Documents</h3>
              <p>Provide your official transcripts, immunization records, and any remaining enrollment forms.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num" aria-hidden="true"></span>
            <div>
              <h3>Apply for Financial Aid</h3>
              <p>Complete your FAFSA, any scholarship applications, and verification documents if requested.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num" aria-hidden="true"></span>
            <div>
              <h3>Register for the Future RAM Summer Series</h3>
              <p>Earn your RAM Pass and complete important enrollment requirements before move-in.</p>
              <a className="btn btn-outline-dark" href="https://lp.constantcontactpages.com/ev/reg/wy6gut4/lp/c2d87ad5-8e46-49d3-8e78-6da48310ed9e" target="_blank" rel="noopener" style={{marginTop: '14px'}}>Register Here</a>
            </div>
          </div>
          <div className="step">
            <span className="step-num" aria-hidden="true"></span>
            <div>
              <h3>Secure Housing</h3>
              <p>Complete your housing forms and confirm your room assignment.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num" aria-hidden="true"></span>
            <div>
              <h3>Obtain Move-In Clearance</h3>
              <p>Students who complete the Future RAM Summer Series can receive move-in clearance before arrival.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num" aria-hidden="true"></span>
            <div>
              <h3>Attend New Student RAM Orientation</h3>
              <p>Meet fellow students, faculty, and staff while learning about campus resources.</p>
              <span className="tag-soon">More details coming soon</span>
            </div>
          </div>
          <div className="step">
            <span className="step-num" aria-hidden="true"></span>
            <div>
              <h3>Become a RAM!</h3>
              <p>Move in, get involved, and start your academic journey.</p>
            </div>
          </div>
        </div>
      </div>
      <aside className="side-card">
        <h4>Need Assistance?</h4>
        <p style={{color: 'var(--stone)', fontSize: '0.92rem'}}>Contact the Admissions Office for personalized support throughout the enrollment process.</p>
        <dl>
          <dt>Phone</dt><dd><a href="tel:9725243341">972-524-3341</a></dd>
          <dt>Email</dt><dd><a href="mailto:admissions@swcc.edu">admissions@swcc.edu</a></dd>
        </dl>
      </aside>
    </div>
  </div>
</section>

    </>
  );
}
