import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img className="footer-logo" src="/assets/images/logo-full-dark.png" alt="Southwestern Christian College" />
          <p>
            200 Bowser Circle, Terrell, Texas 75160. A private, faith-based college inspiring
            excellence and building character since 1948.
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/southwesternchristiancollegeterrell"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17 3h-3a5 5 0 0 0-5 5v3H6v4h3v9h4v-9h3.2l.8-4H13V8a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/officialswcc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" />
              </svg>
            </a>
            <a
              href="https://x.com/SWCC_WBBTX"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter, Women's Basketball"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.3 22H1.2l8.2-9.3L1 2h7.3l5 6.6zm-1.2 18h1.9L7.4 4h-2z" />
              </svg>
            </a>
            <a
              href="https://x.com/SWCCRAMSMBB"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter, Men's Basketball"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.3 22H1.2l8.2-9.3L1 2h7.3l5 6.6zm-1.2 18h1.9L7.4 4h-2z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Admissions</h5>
          <ul>
            <li><Link to="/admissions">Admissions Overview</Link></li>
            <li><Link to="/how-to-enroll">How To Enroll</Link></li>
            <li><Link to="/tuition-fees">Tuition &amp; Fees</Link></li>
            <li><Link to="/campus-housing">Campus Housing</Link></li>
            <li><Link to="/admitted-next-steps">Next Steps for Admitted RAMs</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Academics</h5>
          <ul>
            <li><Link to="/academics">Academics Overview</Link></li>
            <li><Link to="/degree-plans">Degree Plans</Link></li>
            <li><Link to="/financial-aid">Financial Aid</Link></li>
            <li><Link to="/scholarships">Scholarships</Link></li>
            <li><Link to="/student-achievement">Student Achievement</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>About</h5>
          <ul>
            <li><Link to="/about">Our School</Link></li>
            <li><Link to="/president">Meet Our President</Link></li>
            <li><Link to="/history">Our History</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Resources</h5>
          <ul>
            <li><Link to="/consumer-information">Consumer Information</Link></li>
            <li><Link to="/campus-safety">Campus Safety</Link></li>
            <li><Link to="/grievance-policy">Student Grievance Policy</Link></li>
            <li><Link to="/directory">Campus Directory</Link></li>
            <li><Link to="/transcript-request">Transcript Request</Link></li>
            <li><Link to="/donate">Donate</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; 2026 Southwestern Christian College. Powered by DestinyPMC.</span>
        <div className="footer-bottom-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
