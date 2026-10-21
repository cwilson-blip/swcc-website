import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function CriminalJusticePage() {
  useEffect(() => {
    document.title = "Criminal Justice | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain cj-hero">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Programs · Associate Degree</p>
    <h1>Criminal Justice</h1>
    <p className="cj-tagline">Today’s Scholars. <em>Tomorrow’s Guardians of Justice.</em></p>
    <ul className="cj-motto" aria-label="Program motto">
      <li>Learn</li><li>Lead</li><li>Serve</li><li>Protect</li>
    </ul>
  </div>
</section>

<section className="cj-poster-band">
  <div className="container">
    <figure className="cj-poster">
      <img src="/assets/images/campus/criminal-justice-scholars-poster.jpg" alt="Three SwCC Criminal Justice students look out over an aerial view of campus beside a gold shield with the scales of justice and silhouetted officers. Text reads: Today’s Scholars, Tomorrow’s Guardians of Justice — Learn, Lead, Serve, Protect — Preparing Leaders. Building Character. Serving Communities. Upholding Justice. Southwestern Christian College Criminal Justice." width="1128" height="1394" />
    </figure>
  </div>
</section>

<section className="section on-paper cj-intro">
  <div className="container two-col">
    <div className="prose">
      <p className="eyebrow">Why Choose Criminal Justice at SwCC?</p>
      <h2 style={{marginTop: '14px'}}>More than a badge. A calling.</h2>
      <p>A career in criminal justice is more than earning a badge or enforcing laws — it is answering a calling to protect communities, defend constitutional rights, serve with integrity, and lead with compassion. At Southwestern Christian College (SwCC), students receive an education that blends academic excellence, Christian values, ethical leadership, and practical criminal justice knowledge to prepare them for meaningful careers in public service.</p>
      <p>Southwestern Christian College’s mission is to develop future leaders through a holistic education grounded in moral, spiritual, and academic excellence. That philosophy aligns naturally with the criminal justice profession, where <strong>character is just as important as competence.</strong></p>
    </div>
    <aside className="side-card">
      <h4>Program at a Glance</h4>
      <dl>
        <dt>Credential</dt><dd>Associate Degree in Criminal Justice</dd>
        <dt>Campus</dt><dd>Terrell, Texas</dd>
        <dt>Pathways</dt><dd>Enter the workforce or transfer to a bachelor’s program</dd>
        <dt>Scholarships</dt><dd><Link to="/scholarships">Program scholarships available</Link></dd>
      </dl>
      <a className="btn btn-brass" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?source=65912" target="_blank" rel="noopener">Apply Now</a>
      <Link className="btn btn-outline-dark" to="/degree-plans">View Degree Plans</Link>
    </aside>
  </div>
</section>

<section className="section on-dark">
  <div className="container cj-split">
    <div>
      <p className="eyebrow">Why Criminal Justice Matters</p>
      <h2 style={{marginTop: '14px'}}>Justice for all takes people prepared for all of it.</h2>
      <p style={{marginTop: '18px'}}>America needs criminal justice professionals who are educated, ethical, culturally competent, and committed to justice for all. Today’s criminal justice professionals face increasingly complex challenges.</p>
    </div>
    <div>
      <ul className="cj-ruled cj-ruled-2 cj-ruled-dark">
        <li>Community trust and police legitimacy</li>
        <li>Cybercrime and digital investigations</li>
        <li>Human trafficking</li>
        <li>Mental health crisis intervention</li>
        <li>School and campus safety</li>
        <li>Constitutional policing</li>
        <li>Victim advocacy</li>
        <li>Emergency management</li>
        <li>Homeland security</li>
        <li>Criminal investigations using advanced technology</li>
      </ul>
      <p className="cj-pull">These challenges require professionals who can think critically, communicate effectively, and make sound ethical decisions — not simply enforce laws.</p>
    </div>
  </div>
</section>

<section className="section on-surface">
  <div className="container">
    <div className="section-head">
      <p className="eyebrow">Why Earn an Associate Degree?</p>
      <h2>The academic foundation for a rewarding career.</h2>
      <p className="lede">An Associate Degree in Criminal Justice provides students with the academic foundation needed to begin a rewarding career or continue toward a bachelor’s degree. Students develop knowledge in:</p>
    </div>
    <ul className="cj-terms">
      <li>Criminal Law</li>
      <li>Constitutional Law</li>
      <li>Ethics</li>
      <li>Investigations</li>
      <li>Evidence</li>
      <li>Courts</li>
      <li>Corrections</li>
      <li>Community Relations</li>
      <li>Criminology</li>
      <li>Leadership</li>
      <li>Communication</li>
      <li>Critical Thinking</li>
    </ul>
    <p className="cj-note">Modern criminal justice education emphasizes understanding how law, policy, research, and community engagement work together to create a fair and effective justice system.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="section-head">
      <p className="eyebrow">Career Opportunities</p>
      <h2>Where graduates can serve.</h2>
    </div>
    <div className="cj-careers">
      <div>
        <h3>Law Enforcement</h3>
        <ul>
          <li>Police Officer</li>
          <li>Sheriff’s Deputy</li>
          <li>Campus Police Officer</li>
          <li>Federal Law Enforcement</li>
        </ul>
      </div>
      <div>
        <h3>Corrections & Supervision</h3>
        <ul>
          <li>Correctional Officer</li>
          <li>Juvenile Justice</li>
          <li>Probation Officer</li>
          <li>Parole Officer</li>
        </ul>
      </div>
      <div>
        <h3>Investigations & Courts</h3>
        <ul>
          <li>Criminal Investigator</li>
          <li>Crime Scene Technician</li>
          <li>Court Administration</li>
          <li>Intelligence Analysis</li>
        </ul>
      </div>
      <div>
        <h3>Public Safety & Service</h3>
        <ul>
          <li>Homeland Security</li>
          <li>Emergency Management</li>
          <li>Private Security Management</li>
          <li>Victim Services</li>
          <li>Public Safety Administration</li>
        </ul>
      </div>
    </div>
    <div className="callout cj-transfer">
      <p><strong>Planning to keep going?</strong> An associate degree also serves as an excellent foundation for transfer into bachelor’s programs in criminal justice, criminology, homeland security, forensic science, public administration, or law.</p>
    </div>
  </div>
</section>

<section className="section on-surface">
  <div className="container cj-diff">
    <div className="cj-diff-aside">
      <p className="eyebrow">What Makes SwCC Different?</p>
      <h2 style={{marginTop: '14px'}}>Justice begins with character.</h2>
      <figure className="cj-poster-small">
        <img src="/assets/images/campus/criminal-justice-dr-coats-poster.jpg" alt="Poster of Dr. Yalonda Coats, Police Commissioner and Southwestern Christian College Criminal Justice Chair, in uniform beside an SwCC Police vehicle. Text reads: Education Is My Passion, Protection Is My Purpose — Where Passion Meets Purpose, Success Becomes the Legacy; Lead, Educate, Protect, Empower, Serve." width="1086" height="1448" loading="lazy" />
      </figure>
    </div>
    <div className="cj-diff-list">
      <article>
        <h3>Faith-Based Leadership</h3>
        <p>Students learn that justice begins with character. SwCC prepares graduates to lead with integrity, accountability, respect, compassion, service, and ethical decision-making. These principles are essential for earning public trust and becoming effective leaders.</p>
      </article>
      <article>
        <h3>HBCU Legacy</h3>
        <p>As a Historically Black College, Southwestern Christian College understands the importance of developing leaders who are culturally aware, community focused, and prepared to serve diverse populations.</p>
        <p>Students are encouraged to become agents of positive change while honoring the rich history of servant leadership found within HBCUs.</p>
      </article>
      <article>
        <h3>Learning from Real-World Leaders</h3>
        <p>Students benefit from instruction by experienced criminal justice professionals who understand today’s challenges and bring practical experience into the classroom. Learning extends beyond textbooks to include leadership, professionalism, critical thinking, and ethical decision-making.</p>
      </article>
      <article>
        <h3>Leadership Development</h3>
        <p>Employers increasingly seek professionals who can lead teams, solve problems, communicate effectively, analyze situations, and make sound decisions under pressure. These leadership skills distinguish graduates throughout their careers.</p>
      </article>
    </div>
  </div>
</section>

<section className="section on-dark">
  <div className="container cj-split">
    <div>
      <p className="eyebrow">How Will This Degree Benefit My Career?</p>
      <h2 style={{marginTop: '14px'}}>An investment that keeps paying dividends.</h2>
      <p style={{marginTop: '18px'}}>An associate degree demonstrates that you possess the discipline, education, and professionalism employers value.</p>
      <p>Whether entering law enforcement, corrections, probation, homeland security, or continuing toward a bachelor’s or graduate degree, your education becomes an investment that continues to pay dividends throughout your career.</p>
    </div>
    <ul className="check-list cj-checks">
      <li>Greater competitiveness for employment</li>
      <li>Increased opportunities for promotion</li>
      <li>Stronger communication and writing skills</li>
      <li>Better critical-thinking abilities</li>
      <li>Enhanced leadership potential</li>
      <li>Preparation for supervisory positions</li>
      <li>Foundation for advanced education</li>
      <li>Greater confidence in decision-making</li>
      <li>Improved understanding of constitutional law and ethics</li>
      <li>Lifelong professional growth</li>
    </ul>
  </div>
</section>

<section className="section on-paper cj-commitment">
  <div className="container">
    <p className="eyebrow">Our Commitment</p>
    <blockquote>Because tomorrow’s justice system depends on the leaders we educate today.</blockquote>
    <div className="cj-commitment-body">
      <p>At Southwestern Christian College Criminal Justice, we believe education transforms lives. Our goal is not simply to prepare students for jobs but to also inspire students to see themselves as future protectors of society.</p>
      <p>Our goal is to prepare ethical leaders who protect constitutional rights, strengthen communities, inspire confidence in the justice system, and serve others with honor.</p>
    </div>
    <div className="btn-row">
      <a className="btn btn-brass" href="https://swcc.populiweb.com/router/admissions/onlineapplications/index?source=65912" target="_blank" rel="noopener">Apply Now</a>
      <Link className="btn btn-outline-dark" to="/how-to-enroll">How To Enroll</Link>
      <Link className="btn btn-outline-dark" to="/contact">Contact Admissions</Link>
    </div>
  </div>
</section>

    </>
  );
}
