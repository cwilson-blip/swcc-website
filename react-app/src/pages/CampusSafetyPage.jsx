import { useEffect } from "react";

export default function CampusSafetyPage() {
  useEffect(() => {
    document.title = "Campus Safety | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Consumer Information</p>
    <h1>Campus Safety</h1>
    <p className="lede">Safety, Security, and Supervision is our priority.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container two-col">
    <div className="prose">
      <p>The SwCC Campus Police Department was approved by the State of Texas and activated on October 4, 2018 through the Texas Commission on Law Enforcement (TCOLE). All campus police officers are TCOLE-certified and commissioned by the department, serving as the primary law enforcement agency responsible for the care, custody, and control of SwCC students, staff, and supporters.</p>
      <p>In accordance with the Jeanne Clery Disclosure of Campus Security Policy and Campus Crime Statistics Act of 1998, the Campus Police Department keeps a rolling 60-day crime log of all reported incidents on or near college property.</p>
      <h2>Annual Security & Fire Safety Reports</h2>
      <ul className="doc-list">
        <li><a href="/assets/docs/annual-security-fire-safety-report-2026.pdf" target="_blank" rel="noopener">2026 Report <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/campus-safety-security-survey-certificate-2025.pdf" target="_blank" rel="noopener">2025 Campus Safety and Security Survey Completion Certificate <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/annual-security-fire-safety-report-2023.pdf" target="_blank" rel="noopener">2023 Report <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/annual-security-fire-safety-report-2022.pdf" target="_blank" rel="noopener">2022 Report <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/annual-security-fire-safety-report-2021.pdf" target="_blank" rel="noopener">2021 Report <span className="tag">PDF</span></a></li>
        <li><a href="/assets/docs/annual-security-fire-safety-report-2020.pdf" target="_blank" rel="noopener">2020 Report <span className="tag">PDF</span></a></li>
      </ul>
    </div>
    <aside className="side-card">
      <h4>SwCC Campus Police</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">972.524.3341 ext. 131</a></dd>
        <dt>24/7 Line</dt><dd><a href="tel:6828002408">682.800.2408</a></dd>
        <dt>Email</dt><dd><a href="mailto:SwCCPD@SwCC.edu">SwCCPD@SwCC.edu</a></dd>
        <dt>Chief of Police</dt><dd>Dr. Yalonda Coats, PhD</dd>
        <dt>Location</dt><dd>Timothy Hunt Science Building, 1st Floor</dd>
      </dl>
      <a className="btn btn-outline-dark" href="http://www.swccpolice.org/" target="_blank" rel="noopener">Anonymous Reporting Portal</a>
    </aside>
  </div>
</section>

<section className="section on-surface" id="lockdown-procedures">
  <div className="container two-col">
    <div>
      <p className="eyebrow">Shelter in Place</p>
      <h2 style={{marginTop: '14px'}}>Lockdown Procedures</h2>
      <p className="lede" style={{marginTop: '16px'}}>If you receive notification that the campus is in lockdown, please follow these simple steps that work for both classrooms and offices.</p>
      <div className="steps">
        <div className="step">
          <div className="step-num"></div>
          <div><h3>Step 1</h3><p>Lock the Door. If the door can’t be locked, barricade it using items such as desks, chairs, etc. or consider exiting the area</p></div>
        </div>
        <div className="step">
          <div className="step-num"></div>
          <div><h3>Step 2</h3><p>Turn off lights and put your phone on vibrate.</p></div>
        </div>
        <div className="step">
          <div className="step-num"></div>
          <div><h3>Step 3</h3><p>Stay away from doors and windows. Go to the safest area of the room. This is usually in the corner of the room on the same wall the door is on.</p></div>
        </div>
        <div className="step">
          <div className="step-num"></div>
          <div><h3>Step 4</h3><p>Be prepared to run or to fight if necessary. Do not hide under desks or inhibit your ability to move. If it becomes necessary to fight, use objects in the room such as chairs, fire extinguishers, or books.</p></div>
        </div>
      </div>
      <div className="callout">
        <p>Do not open the door unless the “all clear” is given via SwCC’s emergency notification system. SwCC Officers will announce their presence and search rooms. Those caught in an unsecured area or not in a building during a lockdown should utilize the “Run. Hide. Fight” principles and leave the area if possible.</p>
      </div>
    </div>
    <aside className="side-card">
      <h4>SwCC Shelter in Place Lockdown Procedures</h4>
      <p style={{color: 'var(--stone)', fontSize: '0.92rem'}}>Printable one-page version for classrooms and offices.</p>
      <a className="btn btn-brass" href="/assets/docs/lockdown-procedures.pdf" target="_blank" rel="noopener">Download PDF</a>
    </aside>
  </div>
</section>

<section className="section on-paper" id="crime-prevention">
  <div className="container">
    <div className="section-head">
      <p className="eyebrow">Crime Prevention Information</p>
      <h2>Crime Prevention</h2>
      <p className="lede">Southwestern Christian College Police Departments number one priority is the safety and security of our campus, students, staff, facility and visitors. This page was created as a reminder to give students and faculty tips to prevent crimes as well as providing tips to look for that might indicate criminal activity is about to occur.</p>
    </div>
    <div className="tips-grid">
        <div>
          <h3>Around Campus</h3>
          <ul>
            <li>Plan the safest route to your destination</li>
            <li>Travel in groups and avoid going out alone at night</li>
            <li>Tell a friend or roommate where you are going and what time you expect to return</li>
            <li>Walk near curb and avoid shrubbery or other places of potential concealment</li>
            <li>Stay alert to your surroundings and people around you</li>
            <li>Walk keeping your head up and look around, avoid staring at electronics</li>
            <li>Keep your keys separate from your purse or backpack</li>
            <li>Carry your purse close to your body and keep a firm grip on it; carry your wallet in an inside coat pocket or your front pant pocket</li>
            <li>Don’t overload yourself with bags and avoid shoes that restrict your movements</li>
          </ul>
        </div>
        <div>
          <h3>Residence Halls</h3>
          <ul>
            <li>Always lock your doors even when sleeping or just going down the hall.</li>
            <li>Do not leave messages on your door about when you will be returning to your room.</li>
            <li>Tell a roommate or friend if you are planning to be away overnight or for a few days.</li>
            <li>Do not prop any exterior doors open to allow unescorted visitors into the residence hall</li>
            <li>Do not let unknown individuals “tailgate;” ask who they are visiting and offer to call Public Safety</li>
            <li>Do not leave your keys, ID, wallets, phone or other valuables in open view.</li>
            <li>Report any malfunctioning locks, doors or windows to your residence life staff.</li>
            <li>Report lost or stolen residence hall keys immediately to your residence hall staff.</li>
            <li>Always lock your doors and windows especially if you reside on the first or second floors.</li>
          </ul>
        </div>
        <div>
          <h3>Motor Vehicle Safety</h3>
          <ul>
            <li>Park in well-lit areas, where your vehicle is visible; avoid parking next to vans or trucks</li>
            <li>Keep all valuables out of sight and secure them when you’re out of your vehicle</li>
            <li>Before getting in, check inside and under your car to make sure no one is hiding.</li>
            <li>Service your vehicle regularly to avoid breakdowns.</li>
            <li>Keep your vehicle locked at all times.</li>
            <li>When leaving your car for service, remove your other keys and valuables.</li>
            <li>Have your key ready when you approach your car.</li>
            <li>Consider “The CLUB” or an alarm system.</li>
          </ul>
        </div>
        <div>
          <h3>Cyber Safety</h3>
          <ul>
            <li>Never give your password to anyone. Change your password frequently.</li>
            <li>Do not allow others access to your email or other personal accounts.</li>
            <li>Use a secure browser that will encrypt or scramble purchase information or pay with a money order or check</li>
            <li>Do not download files sent to you by strangers or click on hyperlinks from people you don’t know.</li>
            <li>Make certain that all your personal information is deleted from your computer prior to disposing of it.</li>
            <li>Shop online only with companies that you know; check with the Better Business Bureau if unsure.</li>
            <li>Update your virus software regularly or when new versions are available.</li>
            <li>do not give personal information that can identify where you live to social networking sites.</li>
            <li>Never leave your computer/laptop unattended.</li>
          </ul>
        </div>
    </div>
    <div className="tips-grid tips-grid-3">
        <div>
          <h3>Campus Crime Prevention Personal Safety Tips</h3>
          <ul>
            <li>Familiarize yourself with the layout of the campus.</li>
            <li>Share your class schedule with your parents and trusted friends and give them your telephone numbers.</li>
            <li>At night, stick to well-lighted areas whenever possible and avoid alleyways or “shortcuts” through isolated areas.</li>
          </ul>
        </div>
        <div>
          <h3>In the Residence Halls</h3>
          <ul>
            <li>Do not allow strangers to enter your room or your complex.</li>
            <li>Do not open your door unless you can identify the person seeking entry.</li>
            <li>Do not leave your keys lying around in your room when you are not in the room.</li>
            <li>Report any suspicious persons or activities (including solicitors) in or near your residence hall to your residence hall staff, Public Safety or Police.</li>
            <li>Secure your valuables and engrave expensive items with identifying information.</li>
            <li>Get to know your RA, residence life staff and neighbors.</li>
          </ul>
        </div>
        <div>
          <h3>Cyber Security</h3>
          <ul>
            <li>Monitor your access time; by keeping track of when and how long you were on a computer system, it will be obvious if someone has gained access to your account.</li>
          </ul>
        </div>
    </div>
    <a className="btn btn-outline-dark btn-wrap" href="/assets/docs/crime-prevention-information.pdf" target="_blank" rel="noopener" style={{marginTop: '40px'}}>Download Crime Prevention Information (PDF)</a>
  </div>
</section>

    </>
  );
}
