from common import photo_hero

PAGES = []


def add(filename, title, description, body):
    PAGES.append((filename, title, description, body))


add("student-achievement.html", "Student Achievement", "Student achievement data and IPEDS reporting for Southwestern Christian College.", f'''
{photo_hero("Student Achievement", "Student Achievement", "A holistic educational program that motivates students to value and achieve academic excellence within a commitment to moral and spiritual values.", "assets/images/campus/graduation-candid-rows.jpg", "Graduates seated together at commencement")}
<section class="section on-paper">
  <div class="container prose">
    <p>Our mission is to offer a holistic educational program that motivates our students to value and achieve academic excellence within the context of commitment to moral and spiritual values &mdash; and to prepare future leaders in distinct communities and the world at large.</p>
    <h2>IPEDS Reports</h2>
    <p>Southwestern Christian College reports student achievement data annually to the Integrated Postsecondary Education Data System (IPEDS). 2021&ndash;2024 reports are available from the Office of Institutional Effectiveness upon request.</p>
    <a class="btn btn-outline-dark" href="institutional-effectiveness.html">Institutional Effectiveness</a>
  </div>
</section>
''')
