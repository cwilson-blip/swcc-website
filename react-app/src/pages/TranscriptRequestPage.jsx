import { useEffect } from "react";

export default function TranscriptRequestPage() {
  useEffect(() => {
    document.title = "Transcript Request | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Registrar</p>
    <h1>Transcript Request</h1>
    
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <p>Current and former students may request transcripts as long as there is no outstanding college debt or federal loan default. The Registrar’s Office processes requests three to five business days after receipt — older records may take longer. Submit your request at least two weeks before any deadline.</p>
      <p>Current students can access free unofficial transcripts anytime through Populi; former students can order through the same portal.</p>
      <a className="btn btn-outline-dark" href="https://swcc.populiweb.com/request_transcript" target="_blank" rel="noopener">Request a Transcript</a>
      <div className="def-grid" style={{marginTop: '32px'}}>
        <div><dt>Mailed Copy</dt><dd>$3 per transcript</dd></div>
        <div><dt>Emailed Copy</dt><dd>$2 per transcript</dd></div>
      </div>
      <p style={{fontSize: '0.9rem'}}><em>If a transcript request is denied for any reason, the transcript fee is forfeited.</em></p>
    </div>
    <aside className="side-card">
      <h4>Registrar</h4>
      <dl>
        <dt>Email</dt><dd><a href="mailto:Registrar@swcc.edu">Registrar@swcc.edu</a></dd>
        <dt>Mailing Address</dt><dd>Southwestern Christian College, Office of the Registrar, PO Box 10, Terrell, TX 75160</dd>
      </dl>
      <h4 style={{marginTop: '20px'}}>Holds on Your Account</h4>
      <p style={{color: 'var(--stone)', fontSize: '0.9rem'}}>Balance questions: Business Office, ext. 202<br />Loan default questions: Financial Aid Debt Prevention Manager, ext. 204</p>
    </aside>
  </div>
</section>

    </>
  );
}
