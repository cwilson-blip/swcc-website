from common import photo_hero, plain_hero, APPLY_URL

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


# ---------------------------------------------------------------- About / Our School
add("about.html", "Our School", "Our School at Southwestern Christian College — a small college in Terrell, Texas with a big commitment to academic and spiritual growth.", f'''
{photo_hero("About SwCC", "Our School", "A small school with a BIG love of learning &mdash; rooted in Terrell, Texas, since 1948.", "assets/images/campus/ceremony-stage-dignitaries.jpg", "Southwestern Christian College graduation ceremony on stage")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <p class="eyebrow">A Message From Our School</p>
      <h2>Welcome to Southwestern Christian College</h2>
      <p>Southwestern Christian College carries deep Christian roots and a historical foundation in Terrell, Texas &mdash; and a forward-thinking, dynamic approach to preparing students for what comes next. We hold academic excellence and spiritual growth as equal priorities, taught by dedicated faculty alongside friendly, driven classmates.</p>
      <p>Our campus sits a short drive from Dallas, the ninth largest city in the country, giving students easy access to internships, culture, and opportunity without leaving behind the close-knit feel of a small college community.</p>
      <p>Give us a semester, and we&rsquo;ll help change your path. Give us a year, and watch the evolution &mdash; from student to leader, from student to minister, from student to success story.</p>
      <h2>Our Values</h2>
      <p>We nurture academic excellence within a Christian framework, offering programs that help students meet both academic and spiritual goals. Our campus community blends serious educational pursuit with spiritual introspection and a genuine commitment to service.</p>
      <h2>A Commitment to Excellence</h2>
      <p>Our mission is to cultivate Christian-infused education and develop compassionate leaders &mdash; empowering students academically, spiritually, and socially for the work ahead of them.</p>
    </div>
    <aside>
      <div class="side-card">
        <h4>Join Us Today</h4>
        <ul>
          <li><a class="btn btn-outline-dark" href="{APPLY_URL}" target="_blank" rel="noopener">Apply</a></li>
          <li><a class="btn btn-outline-dark" href="how-to-enroll.html#tours">Visit</a></li>
          <li><a class="btn btn-outline-dark" href="contact.html">Inquire</a></li>
          <li><a class="btn btn-outline-dark" href="admitted-next-steps.html">Enroll</a></li>
        </ul>
      </div>
      <div class="side-card">
        <h4>Contact</h4>
        <dl>
          <dt>Phone</dt><dd><a href="tel:9725243341">972-524-3341</a></dd>
          <dt>Email</dt><dd><a href="mailto:info@swcc.edu">info@swcc.edu</a></dd>
          <dt>Address</dt><dd>200 Bowser Circle, Terrell, TX 75160</dd>
        </dl>
      </div>
    </aside>
  </div>
</section>
''')

# ---------------------------------------------------------------- President
PRESIDENT_LETTERS = [
    ("SwCC MC Hall", "March 2025", "https://www.swcc.edu/_files/ugd/82aa45_6e233c5bc39648e78bebbf298fae12cc.pdf"),
    ("Letter from Dr. Seamster", "July 2024", "https://www.swcc.edu/_files/ugd/82aa45_e4a74d96fb4848ddb6ce064a173bd171.pdf"),
    ("SwCC Names New Athletic Director", "May 2024", "https://www.swcc.edu/_files/ugd/82aa45_4944320546b54b78b9bcde1f7ef66ccd.pdf"),
    ("SwCC Names New Athletic Director", "April 2023", "https://www.swcc.edu/_files/ugd/0775cf_ac5d9989d1764e26af446892bbf93b9d.pdf"),
    ("SW Upgrades Vital Departments", "August 2021", "https://www.swcc.edu/_files/ugd/0775cf_f395d73664ab45faae9c355ca78602ea.pdf"),
    ("Letter to SwCC National Alumni Association", "April 2020", "https://www.swcc.edu/_files/ugd/0775cf_62eb588d609d4d6290eb5ecc890b0e39.pdf"),
    ("Corona Update / Online Courses", "March 2020", "https://www.swcc.edu/_files/ugd/0775cf_00cb12b674f74c7f92d739d360645e0b.pdf"),
    ("Letter To Our Students", "March 2020", "https://www.swcc.edu/_files/ugd/0775cf_94a0e1e1ebdb447b9bc306c64319a09a.pdf"),
]


def _president_letters():
    items = []
    for title, date, url in PRESIDENT_LETTERS:
        items.append(
            f'<li><a href="{url}" target="_blank" rel="noopener">{title} <span class="tag">{date} &middot; PDF</span></a></li>'
        )
    return "".join(items)


add("president.html", "Meet Our President", "A letter from Dr. Ervin D. Seamster, Jr., President and CEO of Southwestern Christian College, plus an archive of past letters from 2020 to 2025.", f'''
{photo_hero("Meet Our President", "Dr. Ervin D. Seamster, Jr.", "President and CEO, Southwestern Christian College", "assets/images/campus/president-podium-oath.jpg", "Dr. Ervin D. Seamster, Jr. addressing the campus community")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <h2>Dear Prospective Students, Parents, Donors and Supporters,</h2>
      <p>Welcome to our beloved Southwestern Christian College, a small school with a BIG love of learning! Thank you for visiting our website to discover more about who we are, why we strive for academic excellence. If you haven&rsquo;t visited the beautiful campus&mdash;in Terrell, Texas&mdash;what are you waiting for?</p>
      <p>Come join a school that is deeply-rooted in Christian values and morals, connected to a rich history of pioneers who helped pave the way for the modern success at Southwestern. We are forward thinkers who stay ON THE MOVE and hope you will be inspired by stellar teaching, friendly students, good Texas food, team sports, student activities, and our close proximity to Dallas, the 9th largest city in America.</p>
      <p>Many have asked me about the current transformation underway at SwCC. I can testify to this&mdash;if you give us a semester, we will change your life and prepare you for an unforgettable journey. If you give us a year, we will be right there, to encourage you, nourish you with a rich village culture, and we will be right by your side to witness your evolution: From student to leader, from student to businesswoman, from student to minister, from student to teacher, from student to SUCCESS STORY.</p>
      <p>I should know&hellip;</p>
      <p>More than 25 years ago, I arrived on this same campus&mdash;raw, with a love of God and basketball, unsure of myself or what gifts I possessed. Earlier teachers had marked me for failure. A lackluster GPA was all the evidence they needed. My academic light wasn&rsquo;t dim. Sadly, it had never been turned on. Southwestern Christian College changed all that. The &lsquo;Nobody&rsquo; others had thrown away was the &lsquo;Somebody&rsquo; professors and mentors at SwCC counseled, picked up, brushed off, encouraged with prayers and love, financial support and amazing hope.</p>
      <p>Thankfully, my grades rose from the cellar to the Dean&rsquo;s List. Many of you know a little of my story. After graduating from Southwestern, I continued my education at Perkins School of Theology and United Theological Seminary. In January 2017, I was appointed President and CEO of Southwestern Christian College, the same HBCU that laid the foundation for my faith and my success.</p>
      <p>These accomplishments, and a slew of others, have prepared me to stand with you now, fully comprehend your fears and dreams, as well as the stumbling blocks designed to stop you. No matter your age, your socioeconomic background, I enthusiastically applaud your determination in making it this far and considering Southwestern as part of your future.</p>
      <p>Before you make a decision or choose a more traditional public university, I ask you to pay us a visit, call and speak with the SwCC Director of Admissions, Shane Mushonga. I ask you to join us in Chapel for our devotion, call and speak with a student leader. I will even make myself available so you can send me any questions that you have. I ask you to come to Southwestern for a Rap Session and pizza one Friday evening, to experience us in our daily environment, our natural habitat.</p>
      <p>Whether you are a parent or a church, a private, individual donor or member of an organization, your support is deeply appreciated. And for all prospective students searching for the right academic fit, thank you so much for considering Southwestern Christian College for your future! Without our wonderful, talented students, there wouldn&rsquo;t be a school. There wouldn&rsquo;t be an HBCU to celebrate. You are the school.</p>
      <blockquote class="testimonial">&ldquo;Give us a semester, and change your life. Give us a year&mdash;and witness your evolution.&rdquo;</blockquote>
      <p>Your affectionate servant and friend,<br><strong>Dr. Ervin D. Seamster, Jr.</strong><br>President and CEO<br>Southwestern Christian College</p>
    </div>
    <aside class="side-card">
      <h4>Connect</h4>
      <p style="color:var(--stone); font-size:0.92rem;">Have a question for the President&rsquo;s Office?</p>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">972-524-3341</a></dd>
        <dt>Email</dt><dd><a href="mailto:info@swcc.edu">info@swcc.edu</a></dd>
      </dl>
    </aside>
  </div>
</section>
<section class="section section-tight on-surface">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Archive</p>
      <h2>Past Letters From Our President</h2>
      <p class="lede">Updates and reflections shared with the SwCC family, March 2020 through March 2025.</p>
    </div>
    <ul class="doc-list">
      {_president_letters()}
    </ul>
  </div>
</section>
''')

# ---------------------------------------------------------------- Board
BOARD_OFFICERS = [
    ("John H. Dansby, Sr.", "Chairman"),
    ("Leonardo Gilbert", "Vice Chairman"),
    ("Helen Curtis", "Secretary"),
]
BOARD_MEMBERS = [
    "Billy Curl", "Maybelline Griffin", "Glynda Mayo-Hall", "Charles Harrison III",
    "Daniel Harrison", "Ramon Hodridge", "Roderick Johnson", "LeDetra Jones",
    "David Lane", "Bruce Nash", "Dr. Reba Rollinson", "Randall Tucker, Sr.",
]


def _board_cards():
    cards = "".join(
        f'<div class="person-card"><h4>{name}</h4><p class="person-role">{title}</p></div>'
        for name, title in BOARD_OFFICERS
    )
    cards += "".join(
        f'<div class="person-card"><h4>{name}</h4><p class="person-role">Trustee</p></div>'
        for name in BOARD_MEMBERS
    )
    return cards


add("board.html", "Meet Our Board", "Meet the Board of Trustees of Southwestern Christian College.", f'''
{plain_hero("About SwCC", "Meet Our Board of Trustees", "The volunteer leaders who steward the mission of Southwestern Christian College.")}
<section class="section section-tight on-surface">
  <div class="container banner-figure">
    <img src="assets/images/campus/board-of-trustees.jpg" alt="The Southwestern Christian College Board of Trustees in academic regalia at a commencement ceremony">
  </div>
</section>
<section class="section on-paper">
  <div class="container">
    <div class="people-grid">
      {_board_cards()}
    </div>
  </div>
</section>
''')

# ---------------------------------------------------------------- Faculty & Staff
def _people(rows):
    cards = []
    for name, role, email in rows:
        email_html = f'<p><a href="mailto:{email}">{email}</a></p>' if email else ""
        cards.append(
            f'<div class="person-card"><h4>{name}</h4><p class="person-role">{role}</p>{email_html}</div>'
        )
    return "".join(cards)


FACULTY = [
    ("Dr. Femi Adeyemi", "Adjunct Professor", ""),
    ("Vanessa Baker", "English Professor", ""),
    ("Erik Buchanan, M.A.", "Spanish Professor", "Erik.Buchanan@swcc.edu"),
    ("Justin Felder", "Adjunct Bible Instructor", ""),
    ("Johnson Kisero", "Biology Professor", ""),
    ("Nathan Nwobi", "Mathematics Professor", ""),
    ("Dr. Walter Price", "Speech Professor", "professorprice@swcc.edu"),
    ("Lyante Savala", "Adjunct Professor / Choral Director", ""),
]
LEADERSHIP = [
    ("Dr. Barry Graham", "Interim Chief of Academic Affairs", "bgrah@swcc.edu"),
    ("Dr. Ben Foster", "Dean of Student Affairs", ""),
    ("Dwayne Pugh", "Dean of Chapel &amp; Director of Recording Studio", ""),
    ("Dr. Eric Jackson", "Director of Admissions", ""),
]
OPS = [
    ("Kecia Baker-Morris", "Registrar", ""),
    ("Alva Baker", "Accounts Payable Manager", ""),
    ("Vernesha Cathey", "Title III Director / Recruiter", ""),
    ("Charles Hanks", "Director of Financial Aid", ""),
    ("Alma Hernandez", "Administrative Assistant to the President", ""),
    ("Drew Johnson", "Facilities Manager / Women&rsquo;s Dorm Supervisor", ""),
    ("Dr. Yalonda Coats", "Chief of Police", ""),
    ("Officer Corya Lang", "Assistant Chief of Police / HR Manager", ""),
    ("Kenny Fox", "Assistant CFO", ""),
    ("Robert Morrow", "Food Service Manager / President&rsquo;s Special Assistant", ""),
    ("Gloria Rice", "School Operator / Admin. Assistant for Admissions", ""),
    ("Dr. Stevie Roberts", "Men&rsquo;s Dorm Supervisor", ""),
    ("Lois Walker", "Administrative Assistant, Business Office", ""),
    ("Tomeka Wilson", "Comptroller", ""),
]
ATHLETICS_STAFF = [
    ("Darryl Allen", "Track Coach", ""),
    ("Dustin White", "Athletic Director / Men&rsquo;s Basketball Coach", ""),
]

add("faculty-staff.html", "Meet Our Faculty & Staff", "Meet the faculty and staff of Southwestern Christian College.", f'''
{plain_hero("About SwCC", "Meet Our Faculty &amp; Staff", "The people who teach, mentor, and run the day-to-day life of the college.")}
<section class="section on-paper">
  <div class="container">
    <h2 style="margin-bottom:24px;">Academic Department</h2>
    <div class="people-grid">{_people(FACULTY)}</div>
  </div>
</section>
<section class="section section-tight on-surface">
  <div class="container">
    <h2 style="margin-bottom:24px;">Administration &amp; Leadership</h2>
    <div class="people-grid">{_people(LEADERSHIP)}</div>
  </div>
</section>
<section class="section section-tight on-paper">
  <div class="container">
    <h2 style="margin-bottom:24px;">Student Services &amp; Operations</h2>
    <div class="people-grid">{_people(OPS)}</div>
  </div>
</section>
<section class="section section-tight on-surface">
  <div class="container">
    <h2 style="margin-bottom:24px;">Athletics</h2>
    <div class="people-grid">{_people(ATHLETICS_STAFF)}</div>
  </div>
</section>
''')

# ---------------------------------------------------------------- Guiding Philosophy
add("guiding-philosophy.html", "Guiding Philosophy", "The guiding philosophy of Southwestern Christian College: academic instruction rooted in biblical study.", f'''
{plain_hero("About SwCC", "Guiding Philosophy", "Academic instruction paired with spiritual development, grounded in biblical study.")}
<section class="section on-paper">
  <div class="container prose">
    <p>Southwestern Christian College exists to prepare students for effective and successful Christian living. That purpose shapes every part of campus life: academic instruction runs alongside spiritual development grounded in the daily study of Scripture.</p>
    <h2>Social Competence</h2>
    <p>We develop each student&rsquo;s ability to engage meaningfully in their community &mdash; to express ideas clearly, collaborate well with others, and pursue a vocation that satisfies both calling and craft.</p>
    <h2>Spiritual Foundation</h2>
    <p>Man has a responsibility to God that supersedes all others. Daily biblical instruction is a fundamental part of life at SwCC, not an elective add-on to it.</p>
    <h2>Integrated Purpose</h2>
    <p>Our academic instruction prepares each student to effectively take their place in the business and social world &mdash; well rooted and grounded in the Word of God.</p>
  </div>
</section>
''')

# ---------------------------------------------------------------- Our History
add("history.html", "Our History", "The history of Southwestern Christian College, from its 1948 founding as Southern Bible Institute to today.", f'''
{photo_hero("Our History", "Our History", "From a forty-five-student Bible institute in Fort Worth to a college campus with deep roots in Terrell, Texas.", "assets/images/campus/academic-regalia-procession.jpg", "Faculty in academic regalia during a campus ceremony")}
<section class="section on-paper">
  <div class="container">
    <div class="timeline">
      <div class="timeline-item">
        <span class="timeline-year">1865</span>
        <h3>The Round House</h3>
        <p>Long before the college existed, the land it now occupies held the &ldquo;Round House&rdquo; &mdash; the first dwelling built in Terrell. Its octagonal shape was designed for protection, and it held the first glass windows in Kaufman County. It remains one of only twenty surviving round houses in the country.</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-year">1948</span>
        <h3>Southern Bible Institute Is Founded</h3>
        <p>The school opened in the fall of 1948 with about forty-five students in Fort Worth, Texas, under the name Southern Bible Institute. George P. Bowser (1874&ndash;1950) stands as a key founding figure in that early work.</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-year">1949</span>
        <h3>A Move to Terrell &mdash; and a New Name</h3>
        <p>In the summer of 1949, the Trustees purchased property in Terrell that had previously belonged to Texas Military College. That same ground had earlier served as a co-ed school (1896&ndash;1904), a Methodist school, and Colonel Perry&rsquo;s military academy. With the move, the school took the name it carries today: Southwestern Christian College.</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-year">2008</span>
        <h3>Rebuilding After Fire</h3>
        <p>In the pre-dawn hours of January 27, 2008, a fire destroyed the college&rsquo;s administration building and an adjacent structure. The campus rebuilt &mdash; and the renovation work continues today across the Administration Building, the Student Union, and several residence halls.</p>
      </div>
    </div>
  </div>
</section>
''')

# ---------------------------------------------------------------- Videos
add("videos.html", "Videos", "Watch SwCC chapel services and campus life on the Southwestern Christian College YouTube channel.", f'''
{plain_hero("About SwCC", "Videos", "Chapel services, campus moments, and more from the SwCC community.")}
<section class="section on-paper">
  <div class="container prose">
    <p>SwCC shares chapel services and livestreams on YouTube throughout the year. Subscribe to keep up with what&rsquo;s happening on campus.</p>
    <a class="btn btn-outline-dark" href="https://www.youtube.com/@swccchapel7112/streams" target="_blank" rel="noopener">View More Videos on YouTube</a>
  </div>
</section>
''')

# ---------------------------------------------------------------- Alumni
add("alumni.html", "Alumni", "The Southwestern Christian College National Alumni Association supports and connects SwCC graduates.", f'''
{photo_hero("Alumni", "Alumni", "A community of RAMs stays connected long after graduation.", "assets/images/campus/hbcu-congratulations-group.jpg", "Alumni and community members celebrating together")}
<section class="section on-paper">
  <div class="container two-col">
    <div class="prose">
      <p>The Southwestern Christian College National Alumni Association supports the college financially and charitably, and coordinates activities that keep graduates connected to the campus and to one another. It serves as the central alumni body, with its own leadership and administrative structure.</p>
      <a class="btn btn-outline-dark" href="https://www.swccalumni.com" target="_blank" rel="noopener">Visit the Alumni Association</a>
    </div>
    <aside class="side-card">
      <h4>Stay Connected</h4>
      <dl>
        <dt>Phone</dt><dd><a href="tel:9725243341">972-524-3341</a></dd>
        <dt>Email</dt><dd><a href="mailto:info@swcc.edu">info@swcc.edu</a></dd>
      </dl>
    </aside>
  </div>
</section>
''')
