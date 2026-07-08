import { useEffect } from "react";

export default function VideosPage() {
  useEffect(() => {
    document.title = "Videos | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">About SwCC</p>
    <h1>Videos</h1>
    <p className="lede">Chapel services, campus moments, and more from the SwCC community.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>SwCC shares chapel services and livestreams on YouTube throughout the year. Subscribe to keep up with what’s happening on campus.</p>
    <a className="btn btn-outline-dark" href="https://www.youtube.com/@swccchapel7112/streams" target="_blank" rel="noopener">View More Videos on YouTube</a>
  </div>
</section>

    </>
  );
}
