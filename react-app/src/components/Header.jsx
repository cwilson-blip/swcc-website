import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV, UTILITY, APPLY_URL, isExternal } from "../nav";

export default function Header({ onSearchOpen }) {
  const [navOpen, setNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", navOpen);
  }, [navOpen]);

  useEffect(() => {
    const closeAll = () => setOpenMenu(null);
    document.addEventListener("click", closeAll);
    const onEsc = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setNavOpen(false);
      }
    };
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", closeAll);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="site-header-backdrop"></div>
        <div className="utility-bar">
          <div className="container">
            <div className="utility-links">
              {UTILITY.map(([label, href]) => (
                <Link key={href} to={href}>
                  {label}
                </Link>
              ))}
            </div>
            <div className="utility-contact">
              <a href="tel:9725243341">972-524-3341</a>
              <a href="mailto:info@swcc.edu">info@swcc.edu</a>
              <span>200 Bowser Circle, Terrell, TX</span>
            </div>
          </div>
        </div>
        <div className="container nav-row">
          <Link className="brand" to="/">
            <img className="brand-mark-full" src="/assets/images/logo-full-light.png" alt="Southwestern Christian College" />
            <img className="brand-mark-shield" src="/assets/images/logo-shield-light.png" alt="Southwestern Christian College" />
          </Link>
          <nav className={`main-nav${navOpen ? " nav-open" : ""}`} aria-label="Primary">
            <ul>
              {NAV.map((item) => (
                <li key={item.label} className={openMenu === item.label ? "open" : ""}>
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openMenu === item.label}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenu(openMenu === item.label ? null : item.label);
                    }}
                  >
                    {item.label} <span className="caret">&#9662;</span>
                  </button>
                  <ul className="dropdown">
                    {item.children.map(([label, href]) => (
                      <li key={label}>
                        {isExternal(href) ? (
                          <a href={href} target="_blank" rel="noopener noreferrer">
                            {label}
                          </a>
                        ) : (
                          <Link to={href} onClick={() => setNavOpen(false)}>
                            {label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav-cta">
            <button className="search-trigger" aria-label="Search the site" onClick={onSearchOpen}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <a className="btn btn-brass" href={APPLY_URL} target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={navOpen}
              onClick={(e) => {
                e.stopPropagation();
                setNavOpen(!navOpen);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
