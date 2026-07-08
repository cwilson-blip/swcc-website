import { useEffect } from "react";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Legal</p>
    <h1>Privacy Policy</h1>
    
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>Southwestern Christian College respects the privacy of visitors to this website. Information submitted through our forms — including admissions inquiries, contact requests, and donations — is used solely to respond to your request and to administer college business. We do not sell or share personal information with third parties outside of our normal educational and administrative operations.</p>
    <p>For questions about this policy, contact <a href="mailto:info@swcc.edu">info@swcc.edu</a>.</p>
  </div>
</section>

    </>
  );
}
