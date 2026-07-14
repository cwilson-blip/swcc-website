from common import photo_hero, plain_hero, PURCHASE_SEATS_URL, LECTURESHIP_URL

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


add("events.html", "Events", "Upcoming events at Southwestern Christian College: 2026 Graduation and the 2026 Lectureship.", f'''
{plain_hero("Events", "Upcoming Events", "Milestones and traditions that bring the SwCC community together.")}
<section class="section on-paper">
  <div class="container">
    <div class="grid grid-2">
      <a class="apply-card" href="graduation.html" style="display:flex;">
        <h3>2026 Graduation</h3>
        <p>Saturday, May 9 at 10:30am &mdash; Ben Foster, Jr. Memorial Chapel. Our 75th commencement exercise.</p>
      </a>
      <a class="apply-card" href="{LECTURESHIP_URL}" target="_blank" rel="noopener" style="display:flex;">
        <h3>2026 Lectureship</h3>
        <p>The 88th SwCC Lectureship, November 22&ndash;26, 2025. Worship, workshops, alumni events, and more.</p>
      </a>
    </div>
    <p style="margin-top:32px;"><a class="btn btn-outline-dark" href="{PURCHASE_SEATS_URL}" target="_blank" rel="noopener">Purchase Seats</a></p>
  </div>
</section>
''')

add("graduation.html", "2026 Graduation", "The 75th commencement exercise at Southwestern Christian College — Saturday, May 9, 2026.", f'''
{photo_hero("Events", "2026 Graduation", "Please join the Southwestern Christian College family as we celebrate the 2026 graduating class of World-Changers.", "assets/images/campus/graduation-wide-podium.jpg", "Graduation ceremony at Ben Foster, Jr. Memorial Chapel")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <p>We request the honor of your presence at our 75th commencement exercise.</p>
      <div class="def-grid">
        <div><dt>Date</dt><dd>Saturday, May 9, 2026</dd></div>
        <div><dt>Time</dt><dd>10:30 a.m.</dd></div>
        <div><dt>Location</dt><dd>Ben Foster, Jr. Memorial Chapel</dd></div>
        <div><dt>Milestone</dt><dd>75th Commencement Exercise</dd></div>
      </div>
    </div>
    <aside class="side-card">
      <h4>Purchase Seats</h4>
      <p style="color:var(--stone); font-size:0.92rem;">Reserve seating for graduation guests.</p>
      <a class="btn btn-brass" href="{PURCHASE_SEATS_URL}" target="_blank" rel="noopener">Purchase Seats</a>
    </aside>
  </div>
</section>
''')
