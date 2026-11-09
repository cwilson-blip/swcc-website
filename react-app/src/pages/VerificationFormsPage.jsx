import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function VerificationFormsPage() {
  useEffect(() => {
    document.title = "Verification Forms | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Financial Aid</p>
    <h1>Verification Forms</h1>
    <p className="lede">Forms to complete if your FAFSA is selected for verification.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <p>If your Free Application for Federal Student Aid (FAFSA) is selected for verification, the Financial Aid Office will let you know which of these forms to complete and return.</p>
      <ul className="doc-list">
        <li><a href="/assets/docs/verification-worksheet-v1-2018-19.pdf" target="_blank" rel="noopener">2018–2019 Institutional Verification Worksheet (V1) <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/verification-worksheet-v4-2018-19.pdf" target="_blank" rel="noopener">2018–2019 Institutional Verification Worksheet (V4) <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/verification-worksheet-v5-2018-19.pdf" target="_blank" rel="noopener">2018–2019 Institutional Verification Worksheet (V5) <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/household-resources-verification-2017-18.pdf" target="_blank" rel="noopener">2017–2018 Household Resources Verification (Low Income Documentation) <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/non-tax-filer-verification-student-2017-18.pdf" target="_blank" rel="noopener">Verification of Income for Non-Tax Filer — Student (2017–18) <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/non-tax-filer-verification-parent-2017-18.pdf" target="_blank" rel="noopener">Verification of Income for Non-Tax Filer — Parent (2017–18) <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/late-filers-instructions-2018-19.pdf" target="_blank" rel="noopener">Late Filers Instructions: 2018–2019 Verification of 2016 Income Information for Individuals with Unusual Circumstances <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/dependency-override-request-form.pdf" target="_blank" rel="noopener">Dependency Override Request <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/homeless-verification-form.pdf" target="_blank" rel="noopener">Homeless or Risk of being Homeless Verification Form <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/enrollment-history-verification-form.pdf" target="_blank" rel="noopener">Enrollment History Verification Form <span className="tag">PDF</span></a></li>
      </ul>
      <Link className="btn btn-outline-dark" to="/financial-aid" style={{marginTop: '32px'}}>Back to Financial Aid</Link>
    </div>
    <aside className="side-card">
      <h4>Financial Aid Office</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">(972) 524-3341 ext. 129</a></dd>
        <dt>Email</dt><dd><a href="mailto:Financialaid@swcc.edu">Financialaid@swcc.edu</a></dd>
        <dt>Hours</dt><dd>Mon–Thu 9am–5pm, Fri 9am–4pm</dd>
        <dt>Location</dt><dd>Timothy Hunt Science Building</dd>
        <dt>Mailing Address</dt><dd>P.O. Box 10, Terrell, TX 75160, Attn: Financial Aid Office</dd>
      </dl>
    </aside>
  </div>
</section>

    </>
  );
}
