from common import plain_hero

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


add("donate.html", "Donate", "Support Southwestern Christian College through general donations, scholarships, the endowment, and more.", f'''
{plain_hero("Give", "Donate", "Your gift keeps SwCC&rsquo;s mission of faith and education moving forward.")}
<section class="section on-paper">
  <div class="container">
    <div class="grid grid-4 plaque-grid">
      <div class="plaque"><h4>General Donation</h4><p>Support the college&rsquo;s everyday mission.</p></div>
      <div class="plaque"><h4>SwCC Student</h4><p>Directly support a student&rsquo;s education.</p></div>
      <div class="plaque"><h4>Scholarships</h4><p>Fund the awards that bring RAMs to campus.</p></div>
      <div class="plaque"><h4>Endowment</h4><p>Invest in the college&rsquo;s long-term future.</p></div>
    </div>
    <div class="callout" style="margin-top:8px;">
      <p><strong>Give by CashApp:</strong> $SWCCBUSINESS &nbsp;&middot;&nbsp; <strong>Mail a gift:</strong> 200 Bowser Circle, Terrell, Texas 75160</p>
    </div>
    <a class="btn btn-brass" href="mailto:info@swcc.edu">Donate With PayPal</a>
  </div>
</section>
''')

add("transcript-request.html", "Transcript Request", "Request an official or unofficial transcript from Southwestern Christian College.", f'''
{plain_hero("Registrar", "Transcript Request", "")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <p>Current and former students may request transcripts as long as there is no outstanding college debt or federal loan default. The Registrar&rsquo;s Office processes requests three to five business days after receipt &mdash; older records may take longer. Submit your request at least two weeks before any deadline.</p>
      <p>Current students can access free unofficial transcripts anytime through Populi; former students can order through the same portal.</p>
      <a class="btn btn-outline-dark" href="https://swcc.populiweb.com/request_transcript" target="_blank" rel="noopener">Request a Transcript</a>
      <div class="def-grid" style="margin-top:32px;">
        <div><dt>Mailed Copy</dt><dd>$3 per transcript</dd></div>
        <div><dt>Emailed Copy</dt><dd>$2 per transcript</dd></div>
      </div>
      <p style="font-size:0.9rem;"><em>If a transcript request is denied for any reason, the transcript fee is forfeited.</em></p>
    </div>
    <aside class="side-card">
      <h4>Registrar</h4>
      <dl>
        <dt>Email</dt><dd><a href="mailto:Registrar@swcc.edu">Registrar@swcc.edu</a></dd>
        <dt>Mailing Address</dt><dd>Southwestern Christian College, Office of the Registrar, PO Box 10, Terrell, TX 75160</dd>
      </dl>
      <h4 style="margin-top:20px;">Holds on Your Account</h4>
      <p style="color:var(--stone); font-size:0.9rem;">Balance questions: Business Office, ext. 202<br>Loan default questions: Financial Aid Debt Prevention Manager, ext. 204</p>
    </aside>
  </div>
</section>
''')

add("contact.html", "Contact", "Contact Southwestern Christian College — address, phone, email, business hours, and driving directions.", f'''
{plain_hero("Get In Touch", "Contact", "Send your admissions forms, notify us of an issue with the site, or reach out with any other question.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>The Office</h2>
      <div class="def-grid">
        <div><dt>Address</dt><dd>200 Bowser Circle, Terrell, TX 75160</dd></div>
        <div><dt>Phone</dt><dd><a href="tel:9725243341">(972) 524-3341</a></dd></div>
        <div><dt>Email</dt><dd><a href="mailto:info@swcc.edu">info@swcc.edu</a></dd></div>
      </div>
      <h2>Business Hours</h2>
      <div class="def-grid">
        <div><dt>Monday&ndash;Friday</dt><dd>8am&ndash;5pm</dd></div>
        <div><dt>Saturday</dt><dd>9am&ndash;2pm</dd></div>
        <div><dt>Sunday</dt><dd>Closed</dd></div>
      </div>
      <h2>Driving Directions</h2>
      <p>200 Bowser Circle sits just off US-80 in Terrell, Texas, a short drive east of Dallas.</p>
      <a class="btn btn-outline-dark" href="https://www.google.com/maps/search/?api=1&amp;query=200+Bowser+Circle+Terrell+TX+75160" target="_blank" rel="noopener">Get Directions</a>
    </div>
    <aside class="side-card">
      <h4>Send a Message</h4>
      <form onsubmit="return false;">
        <div style="display:flex; flex-direction:column; gap:12px;">
          <input type="text" placeholder="First Name" style="padding:12px; border:1px solid var(--line); border-radius:4px; font-family:inherit;">
          <input type="text" placeholder="Last Name" style="padding:12px; border:1px solid var(--line); border-radius:4px; font-family:inherit;">
          <input type="email" placeholder="Email" style="padding:12px; border:1px solid var(--line); border-radius:4px; font-family:inherit;">
          <input type="tel" placeholder="Phone" style="padding:12px; border:1px solid var(--line); border-radius:4px; font-family:inherit;">
          <textarea placeholder="Message" rows="4" style="padding:12px; border:1px solid var(--line); border-radius:4px; font-family:inherit;"></textarea>
          <button class="btn btn-brass" type="submit">Send Message</button>
        </div>
      </form>
    </aside>
  </div>
</section>
''')

add("privacy-policy.html", "Privacy Policy", "Privacy Policy for the Southwestern Christian College website.", f'''
{plain_hero("Legal", "Privacy Policy", "")}
<section class="section on-paper">
  <div class="container prose">
    <p>Southwestern Christian College respects the privacy of visitors to this website. Information submitted through our forms &mdash; including admissions inquiries, contact requests, and donations &mdash; is used solely to respond to your request and to administer college business. We do not sell or share personal information with third parties outside of our normal educational and administrative operations.</p>
    <p>For questions about this policy, contact <a href="mailto:info@swcc.edu">info@swcc.edu</a>.</p>
  </div>
</section>
''')

add("terms.html", "Terms & Conditions", "Terms and Conditions for the Southwestern Christian College website.", f'''
{plain_hero("Legal", "Terms &amp; Conditions", "")}
<section class="section on-paper">
  <div class="container prose">
    <p>By using this website, you agree to use its content for informational and educational purposes related to Southwestern Christian College. All college branding, photography, and copy remain the property of Southwestern Christian College.</p>
    <p>For questions about these terms, contact <a href="mailto:info@swcc.edu">info@swcc.edu</a>.</p>
  </div>
</section>
''')
