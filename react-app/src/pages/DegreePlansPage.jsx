import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DegreePlansPage() {
  useEffect(() => {
    document.title = "Degree Plans | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">Academics</p>
    <h1>Degree Plans</h1>
    <p className="lede">Graduation requirements for every program of study at SwCC.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <h2>Associate of Arts — 62 Hours</h2>
    <p>Required coursework spans Bible, Computer Science, English, Foreign Language, History, Humanities, Mathematics, Physical Education, Psychology/Sociology, and Speech, plus electives.</p>
    <table className="dp-table">
      <caption className="sr-only">Associate of Arts courses and hours</caption>
      <thead><tr><th scope="col">Courses</th><th scope="col">Hours</th></tr></thead>
      <tbody>
<tr><td>Bible (121, 122, 221, 222)</td><td>8</td></tr>
<tr><td>CS 131, Introduction to Computer Science</td><td>3</td></tr>
<tr><td>English (131, 132, 3 hours Literature)</td><td>9</td></tr>
<tr><td>Foreign Language (141, 142)</td><td>8</td></tr>
<tr><td>History (131, 132, 234)</td><td>9</td></tr>
<tr><td>Humanities (231 or 232)</td><td>3</td></tr>
<tr><td>Mathematics (MTH 135 or above)</td><td>3</td></tr>
<tr><td>Physical Education (Activity)</td><td>2</td></tr>
<tr><td>PSY 110, Freshman Orientation</td><td>1</td></tr>
<tr><td>UJI 110, UJIMA</td><td>1</td></tr>
<tr><td>PSY 131 or SOC 131</td><td>3</td></tr>
<tr><td>Speech 131</td><td>3</td></tr>
<tr><td>Electives</td><td>9</td></tr>
      </tbody>
      <tfoot><tr><th scope="row">Total Hours</th><td>62</td></tr></tfoot>
    </table>
    <h2>Associate of Science — 62 Hours</h2>
    <p>Mirrors the Associate of Arts, substituting Natural Science coursework for the Foreign Language requirement.</p>
    <table className="dp-table">
      <caption className="sr-only">Associate of Science courses and hours</caption>
      <thead><tr><th scope="col">Courses</th><th scope="col">Hours</th></tr></thead>
      <tbody>
<tr><td>Bible (121, 122, 221, 222)</td><td>8</td></tr>
<tr><td>CS 131, Introduction to Computer Science</td><td>3</td></tr>
<tr><td>English (131, 132, 3 hours Literature)</td><td>9</td></tr>
<tr><td>History (131, 132, 234)</td><td>9</td></tr>
<tr><td>Humanities (231 or 232)</td><td>3</td></tr>
<tr><td>Mathematics (MTH 135 or above)</td><td>3</td></tr>
<tr><td>Natural Science</td><td>8</td></tr>
<tr><td>Physical Education (Activity)</td><td>2</td></tr>
<tr><td>PSY 110, Freshman Orientation</td><td>1</td></tr>
<tr><td>UJI 110, UJIMA</td><td>1</td></tr>
<tr><td>PSY 131 or SOC 131</td><td>3</td></tr>
<tr><td>Speech 131</td><td>3</td></tr>
<tr><td>Electives</td><td>9</td></tr>
      </tbody>
      <tfoot><tr><th scope="row">Total Hours</th><td>62</td></tr></tfoot>
    </table>
    <h2>Associate of Science in Criminal Justice — 62 Hours</h2>
    <p>The Associate of Science foundation paired with nine hours of Criminal Justice program electives. <Link to="/criminal-justice">Learn about the Criminal Justice program</Link>.</p>
    <table className="dp-table">
      <caption className="sr-only">Associate of Science in Criminal Justice courses and hours</caption>
      <thead><tr><th scope="col">Courses</th><th scope="col">Hours</th></tr></thead>
      <tbody>
<tr><td>Bible (121, 122, 221, 222)</td><td>8</td></tr>
<tr><td>CS 131, Introduction to Computer Science</td><td>3</td></tr>
<tr><td>English (131, 132, 3 hours Literature)</td><td>9</td></tr>
<tr><td>History (131, 132, 234)</td><td>9</td></tr>
<tr><td>Humanities (231 or 232)</td><td>3</td></tr>
<tr><td>Mathematics (MTH 135 or above)</td><td>3</td></tr>
<tr><td>Natural Science</td><td>8</td></tr>
<tr><td>Physical Education (Activity)</td><td>2</td></tr>
<tr><td>PSY 110, Freshman Orientation</td><td>1</td></tr>
<tr><td>UJI 110, UJIMA</td><td>1</td></tr>
<tr><td>PSY 131 or SOC 131</td><td>3</td></tr>
<tr><td>Speech 131</td><td>3</td></tr>
<tr><td>Program Electives**</td><td>9</td></tr>
      </tbody>
      <tfoot><tr><th scope="row">Total Hours</th><td>62</td></tr></tfoot>
    </table>
    <h3 className="dp-sub">**Program Electives (9 hours)</h3>
    <table className="dp-table dp-electives">
      <caption className="sr-only">Criminal Justice program electives</caption>
      <thead><tr><th scope="col">Course</th><th scope="col">Hours</th></tr></thead>
      <tbody>
<tr><td>CMJ131 Introduction to Criminal Justice</td><td>3</td></tr>
<tr><td>CMJ132 Introduction to Law Enforcement</td><td>3</td></tr>
<tr><td>CMJ231 Corrections</td><td>3</td></tr>
<tr><td>CMJ232 Juvenile Delinquency</td><td>3</td></tr>
<tr><td>CMJ233 Criminology</td><td>3</td></tr>
<tr><td>CMJ234 Homeland Security</td><td>3</td></tr>
      </tbody>
    </table>
    <h2>Religious Studies Bachelor of Science — 131 Hours</h2>
    <p>Builds on the associate-level foundation with specialized coursework in Religion, Bible, and Ministry, an internship component, a minor, and additional electives.</p>
    <table className="dp-table">
      <caption className="sr-only">Religious Studies Bachelor of Science courses and hours</caption>
      <thead><tr><th scope="col">Courses</th><th scope="col">Hours</th></tr></thead>
      <tbody>
<tr><td>Bible (121, 122, 221, 222)</td><td>8</td></tr>
<tr><td>CS 131, Introduction to Computer Science</td><td>3</td></tr>
<tr><td>English (131, 132, 3 hours Literature)</td><td>9</td></tr>
<tr><td>History (131, 132, 234)</td><td>9</td></tr>
<tr><td>Humanities (231 or 232)</td><td>3</td></tr>
<tr><td>Mathematics (MTH 135 or above)</td><td>3</td></tr>
<tr><td>Natural Science</td><td>8</td></tr>
<tr><td>Physical Education (Activity)</td><td>2</td></tr>
<tr><td>PSY 110, Freshman Orientation</td><td>1</td></tr>
<tr><td>UJI 110, UJIMA</td><td>1</td></tr>
<tr><td>PSY 131 or SOC 131</td><td>3</td></tr>
<tr><td>Speech 131</td><td>3</td></tr>
<tr><td>*Religion</td><td>22</td></tr>
<tr><td>*Bible and Ministry</td><td>27</td></tr>
<tr><td>*Internship</td><td>2</td></tr>
<tr><td>*Minor1</td><td>18</td></tr>
<tr><td>*Elective</td><td>9</td></tr>
      </tbody>
      <tfoot><tr><th scope="row">Total Hours</th><td>131</td></tr></tfoot>
    </table>
    <h2>Interdisciplinary Studies Bachelor of Science — 120 Hours</h2>
    <p>Builds on the general education foundation with upper-level Bible coursework, three 15-hour concentrations, and electives.</p>
    <table className="dp-table">
      <caption className="sr-only">Interdisciplinary Studies Bachelor of Science courses and hours</caption>
      <thead><tr><th scope="col">Courses</th><th scope="col">Hours</th></tr></thead>
      <tbody>
<tr><td>Bible (121, 122, 221, 222)</td><td>8</td></tr>
<tr><td>Bible (300/400 level)</td><td>12</td></tr>
<tr><td>CS 131, Introduction to Computer Science</td><td>3</td></tr>
<tr><td>English (131, 132, 3 hours Literature)</td><td>9</td></tr>
<tr><td>History (131, 132, 234)</td><td>9</td></tr>
<tr><td>Humanities (231 or 232)</td><td>3</td></tr>
<tr><td>Mathematics (MTH 135 or above)</td><td>3</td></tr>
<tr><td>Natural Science</td><td>8</td></tr>
<tr><td>Physical Education (Activity)</td><td>2</td></tr>
<tr><td>PSY 110, Freshman Orientation</td><td>1</td></tr>
<tr><td>UJI 110, UJIMA</td><td>1</td></tr>
<tr><td>PSY 131 or SOC 131</td><td>3</td></tr>
<tr><td>Speech 131</td><td>3</td></tr>
<tr><td>Concentration I</td><td>15</td></tr>
<tr><td>Concentration II</td><td>15</td></tr>
<tr><td>*Concentration III</td><td>15</td></tr>
<tr><td>Electives</td><td>10</td></tr>
      </tbody>
      <tfoot><tr><th scope="row">Total Hours</th><td>120</td></tr></tfoot>
    </table>
    <Link className="btn btn-outline-dark" to="/academic-catalogs">See Full Course Catalogs</Link>
  </div>
</section>

    </>
  );
}
