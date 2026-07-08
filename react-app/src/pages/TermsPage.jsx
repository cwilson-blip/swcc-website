import { useEffect } from "react";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms & Conditions | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Legal</p>
    <h1>Terms & Conditions</h1>
    
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>By using this website, you agree to use its content for informational and educational purposes related to Southwestern Christian College. All college branding, photography, and copy remain the property of Southwestern Christian College.</p>
    <p>For questions about these terms, contact <a href="mailto:info@swcc.edu">info@swcc.edu</a>.</p>
  </div>
</section>

    </>
  );
}
