import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function StudioPage() {
  useEffect(() => {
    document.title = "The Upper Room Studios | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero">
  <div className="hero-media">
    <img src="/assets/images/campus/studio-ssl-console.jpg" alt="The SSL Origin 32 console and Genelec monitors in the Upper Room Studios control room" />
    <div className="hero-scrim"></div>
  </div>
  <div className="container page-hero-inner">
    <p className="eyebrow eyebrow-invert">Programs · Recording Studio</p>
    <h1>The Upper Room Studios</h1>
    <p className="lede hero-lede">A hybrid recording facility at Southwestern Christian College, built around an SSL Origin 32 console. Every session includes a professional engineer.</p>
  </div>
</section>


<section className="section on-paper">
  <div className="container studio-intro">
    <div>
      <p className="eyebrow">Hybrid Recording Facility</p>
      <h2>Analog warmth, digital reach.</h2>
    </div>
    <div>
      <p className="lede">The Upper Room pairs a 32-channel SSL analog console and a rack of classic outboard gear with Pro Tools, Luna, and Logic — so a session can move freely between hardware and the box.</p>
      <p>Production packages are available for songwriters, producers, vocalists, and musicians.</p>
      <div className="btn-row" style={{marginTop: '26px'}}>
        <Link className="btn btn-brass" to="/contact">Book a Session</Link>
        <a className="btn btn-outline-dark" href="#studio-rates">See Rates</a>
      </div>
    </div>
  </div>
</section>

<section className="section on-deep">
  <div className="container">
    <div className="section-head">
      <p className="eyebrow">In the Room</p>
      <h2>The gear list.</h2>
    </div>
    <div className="studio-rider">
      <div className="studio-rider-col">
        <h3>Equipment</h3>
        <ul>
          <li>SSL Origin 32 Console</li>
          <li>SSL UF8 Controller</li>
        </ul>
      </div>
      <div className="studio-rider-col">
        <h3>Monitoring</h3>
        <ul>
          <li>Genelec with sub</li>
          <li>Avantone CLA-10</li>
        </ul>
      </div>
      <div className="studio-rider-col">
        <h3>Outboard Gear</h3>
        <ul>
          <li>Neve</li>
          <li>Bettermaker</li>
          <li>Purple Audio</li>
          <li>SSL</li>
          <li>Manley</li>
          <li className="studio-more">and more…</li>
        </ul>
      </div>
      <div className="studio-rider-col">
        <h3>DAWs</h3>
        <ul>
          <li>Pro Tools</li>
          <li>Luna</li>
          <li>Logic</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section className="section on-paper">
  <div className="container">
    <div className="section-head">
      <p className="eyebrow">Take a Look</p>
      <h2>Inside the control room.</h2>
    </div>
    <div className="mosaic studio-gallery">
      <figure className="mosaic-item mosaic-item-static mosaic-wide">
        <img src="/assets/images/campus/studio-engineer-view.jpg" alt="The engineer’s view across the SSL console toward the client seating area" loading="lazy" />
        <figcaption>The engineer’s seat</figcaption>
      </figure>
      <figure className="mosaic-item mosaic-item-static">
        <img src="/assets/images/campus/studio-control-room-front.jpg" alt="Control room with the console, Genelec monitors, and the window into the live room" loading="lazy" />
        <figcaption>Console & live-room window</figcaption>
      </figure>
      <figure className="mosaic-item mosaic-item-static">
        <img src="/assets/images/campus/studio-ssl-console.jpg" alt="Angled view of the SSL Origin 32 console and UF8 controller" loading="lazy" />
        <figcaption>SSL Origin 32</figcaption>
      </figure>
      <figure className="mosaic-item mosaic-item-static">
        <img src="/assets/images/campus/studio-control-room-side.jpg" alt="Client table and seating beside the console" loading="lazy" />
        <figcaption>Client seating</figcaption>
      </figure>
      <figure className="mosaic-item mosaic-item-static">
        <img src="/assets/images/campus/studio-control-room-rear.jpg" alt="Rear of the control room with acoustic panels and lounge chair" loading="lazy" />
        <figcaption>Treated for accurate listening</figcaption>
      </figure>
    </div>
  </div>
</section>

<section className="section on-surface" id="studio-rates">
  <div className="container studio-rates-grid">
    <div>
      <p className="eyebrow">Studio Rates</p>
      <h2 style={{marginTop: '14px'}}>Book by the hour or the block.</h2>
      <dl className="studio-rates">
        <div><dt>Hourly rate</dt><dd>$90</dd></div>
        <div><dt>Session block · 4 hours</dt><dd>$350</dd></div>
        <div><dt>Session block · 8 hours</dt><dd>$700</dd></div>
      </dl>
      <p className="studio-note">All sessions include a professional engineer.</p>
      <h3 className="studio-packages-title">Production Packages</h3>
      <p>Production packages are available that include:</p>
      <ul className="studio-packages">
        <li>Songwriters</li><li>Producers</li><li>Vocalists</li><li>Musicians</li>
      </ul>
      <Link className="btn btn-brass" to="/contact" style={{marginTop: '34px'}}>Book a Session</Link>
    </div>
    <figure className="studio-postcard">
      <img src="/assets/images/campus/studio-postcard-front.jpg" alt="Upper Room Studios postcard: Southwestern Christian College and The Upper Room Studios logos over a close-up of console knobs" loading="lazy" />
    </figure>
  </div>
</section>

    </>
  );
}
