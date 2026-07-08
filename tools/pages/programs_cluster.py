from common import photo_hero, plain_hero, ATHLETICS_URL

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


add("programs.html", "Campus Life & Programs", "Campus life and student organizations at Southwestern Christian College — athletics, chorus, Student Government, and more.", f'''
{photo_hero("Programs", "Campus Life &amp; Programs", "A choice of clubs and organizations for your pleasure and on-campus networking.", "assets/images/campus/gym-community-event.jpg", "Community gathering in the campus gymnasium")}
<section class="section on-paper">
  <div class="container">
    <div class="grid grid-4 plaque-grid">
      <a class="plaque" href="{ATHLETICS_URL}" target="_blank" rel="noopener" style="display:block;">
        <h4>Athletics</h4>
        <p>NJCAA Region 5 basketball, volleyball, track &amp; field, soccer, and cross country.</p>
      </a>
      <a class="plaque" href="chorus.html" style="display:block;">
        <h4>A Cappella Chorus</h4>
        <p>Campus social life through music, friendship, and performance.</p>
      </a>
      <div class="plaque">
        <h4>Student Government</h4>
        <p>Student-led leadership and campus advocacy.</p>
      </div>
      <div class="plaque">
        <h4>Cheerleading &amp; Class Organizations</h4>
        <p>Spirit, intramural sports, and class-level community.</p>
      </div>
    </div>
  </div>
</section>
''')

add("chorus.html", "A Cappella Chorus", "The A Cappella Chorus at Southwestern Christian College builds friendship and campus community through music.", f'''
{plain_hero("Programs", "A Cappella Chorus", "")}
<section class="section on-paper">
  <div class="container prose">
    <p>Life on the campus of Southwestern Christian College is not just academics, but also the social atmosphere that promotes growth and friendship &mdash; the kind that lasts a lifetime. The A Cappella Chorus is one of several organizations at SwCC where students build that community, on stage and off.</p>
    <p>Chorus participation and leadership also come with dedicated scholarship support &mdash; see the <a href="scholarships.html">Scholarships</a> page for details.</p>
  </div>
</section>
''')

add("career.html", "Career Opportunities", "Current staff and faculty job openings at Southwestern Christian College.", f'''
{plain_hero("Careers at SwCC", "Career Opportunities", "Join the team building the next chapter of Southwestern Christian College.")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>High-Priority Openings</h2>
      <ul class="doc-list">
        <li><a href="contact.html">Assistant Financial Aid Director</a></li>
        <li><a href="contact.html">Chief Operations Officer</a></li>
      </ul>
      <h2 style="margin-top:40px;">General Openings</h2>
      <ul class="doc-list">
        <li><a href="contact.html">Computer Science Professor</a></li>
        <li><a href="contact.html">Physical Education Teacher</a></li>
        <li><a href="contact.html">Christian Guidance Counselor</a></li>
        <li><a href="contact.html">Assistant Comptroller</a></li>
        <li><a href="contact.html">Dining Hall Worker</a></li>
        <li><a href="contact.html">Assistant Admissions Director</a></li>
        <li><a href="contact.html">Faculty Instructor, Computer Science</a></li>
      </ul>
    </div>
    <aside class="side-card">
      <h4>Send Information &amp; Questions</h4>
      <p style="color:var(--stone); font-size:0.92rem;">Direct inquiries to Monica Mays.</p>
      <dl>
        <dt>Email</dt><dd><a href="mailto:monica.mays@swcc.edu">monica.mays@swcc.edu</a></dd>
      </dl>
    </aside>
  </div>
</section>
''')
