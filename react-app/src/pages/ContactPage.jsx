import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Get In Touch</p>
    <h1>Contact</h1>
    <p className="lede">Send your admissions forms, notify us of an issue with the site, or reach out with any other question.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <h2>The Office</h2>
      <div className="def-grid">
        <div><dt>Address</dt><dd>200 Bowser Circle, Terrell, TX 75160</dd></div>
        <div><dt>Phone</dt><dd><a href="tel:9725243341">(972) 524-3341</a></dd></div>
        <div><dt>Email</dt><dd><a href="mailto:info@swcc.edu">info@swcc.edu</a></dd></div>
      </div>
      <h2>Business Hours</h2>
      <div className="def-grid">
        <div><dt>Monday–Friday</dt><dd>8am–5pm</dd></div>
        <div><dt>Saturday</dt><dd>9am–2pm</dd></div>
        <div><dt>Sunday</dt><dd>Closed</dd></div>
      </div>
      <h2>Driving Directions</h2>
      <p>200 Bowser Circle sits just off US-80 in Terrell, Texas, a short drive east of Dallas.</p>
      <a className="btn btn-outline-dark" href="https://www.google.com/maps/search/?api=1&query=200+Bowser+Circle+Terrell+TX+75160" target="_blank" rel="noopener">Get Directions</a>
    </div>
    <aside className="side-card">
      <h4>Send a Message</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          <input type="text" placeholder="First Name" style={{padding: '12px', border: '1px solid var(--line)', borderRadius: '4px', fontFamily: 'inherit'}} />
          <input type="text" placeholder="Last Name" style={{padding: '12px', border: '1px solid var(--line)', borderRadius: '4px', fontFamily: 'inherit'}} />
          <input type="email" placeholder="Email" style={{padding: '12px', border: '1px solid var(--line)', borderRadius: '4px', fontFamily: 'inherit'}} />
          <input type="tel" placeholder="Phone" style={{padding: '12px', border: '1px solid var(--line)', borderRadius: '4px', fontFamily: 'inherit'}} />
          <textarea placeholder="Message" rows="4" style={{padding: '12px', border: '1px solid var(--line)', borderRadius: '4px', fontFamily: 'inherit'}}></textarea>
          <button className="btn btn-brass" type="submit">Send Message</button>
        </div>
      </form>
    </aside>
  </div>
</section>

    </>
  );
}
