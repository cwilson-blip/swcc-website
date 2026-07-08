import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import searchIndex from "../searchIndex.json";

function filenameToRoute(filename) {
  if (filename === "index.html") return "/";
  return "/" + filename.replace(/\.html$/, "");
}

function escapeHtml(s) {
  return s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}

function highlight(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return escapeHtml(text);
  return (
    escapeHtml(text.slice(0, idx)) +
    "<mark>" + escapeHtml(text.slice(idx, idx + query.length)) + "</mark>" +
    escapeHtml(text.slice(idx + query.length))
  );
}

function snippet(text, query, radius) {
  const lower = text.toLowerCase();
  const idx = lower.indexOf(query.toLowerCase());
  if (idx === -1) return text.slice(0, radius * 2);
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + query.length + radius);
  return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
}

function search(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const scored = [];
  for (const page of searchIndex) {
    const titleLower = page.title.toLowerCase();
    const descLower = page.description.toLowerCase();
    const textLower = page.text.toLowerCase();
    let score = 0;
    if (titleLower === q) score = 100;
    else if (titleLower.indexOf(q) === 0) score = 80;
    else if (titleLower.indexOf(q) !== -1) score = 60;
    else if (descLower.indexOf(q) !== -1) score = 40;
    else if (textLower.indexOf(q) !== -1) score = 20;
    if (score > 0) scored.push({ page, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 8).map((s) => s.page);
}

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = search(query);

  useEffect(() => {
    if (open) {
      document.body.classList.add("nav-locked");
      setTimeout(() => inputRef.current && inputRef.current.focus(), 10);
    } else {
      document.body.classList.remove("nav-locked");
      setQuery("");
      setActiveIndex(-1);
    }
  }, [open]);

  useEffect(() => {
    function onKeyDown(e) {
      if (!open) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (results.length) setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (results.length) setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        const target = results[activeIndex >= 0 ? activeIndex : 0];
        if (target) {
          navigate(filenameToRoute(target.url));
          onClose();
        }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, results, activeIndex, navigate, onClose]);

  if (!open) return null;

  return (
    <div
      className="search-overlay is-open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="search-panel" role="dialog" aria-modal="true" aria-label="Search the site">
        <div className="search-input-row">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search admissions, academics, financial aid…"
            autoComplete="off"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIndex(-1); }}
          />
          <button className="search-close" aria-label="Close search" onClick={onClose}>&times;</button>
        </div>
        <div className="search-results">
          {!query.trim() && (
            <div className="search-hint">Try &ldquo;scholarships&rdquo;, &ldquo;housing&rdquo;, or &ldquo;financial aid&rdquo;</div>
          )}
          {query.trim() && results.length === 0 && (
            <div className="search-empty">No results for &ldquo;{query.trim()}&rdquo;</div>
          )}
          {results.map((page, i) => {
            const descSource = page.description.toLowerCase().indexOf(query.toLowerCase()) !== -1 ? page.description : page.text;
            return (
              <a
                key={page.url}
                className={`search-result${i === activeIndex ? " is-active" : ""}`}
                href={filenameToRoute(page.url)}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(filenameToRoute(page.url));
                  onClose();
                }}
              >
                <h4 dangerouslySetInnerHTML={{ __html: highlight(page.title, query) }} />
                <p dangerouslySetInnerHTML={{ __html: highlight(snippet(descSource, query, 60), query) }} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
