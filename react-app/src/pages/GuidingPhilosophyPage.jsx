import { useEffect } from "react";

export default function GuidingPhilosophyPage() {
  useEffect(() => {
    document.title = "Guiding Philosophy | Southwestern Christian College";
  }, []);

  return (
    <>

<section className="page-hero-plain">
  <div className="container">
    <p className="eyebrow eyebrow-invert">About SwCC</p>
    <h1>Guiding Philosophy</h1>
    <p className="lede">Academic instruction paired with spiritual development, grounded in biblical study.</p>
  </div>
</section>

<section className="section on-paper">
  <div className="container prose">
    <p>Southwestern Christian College exists to prepare students for effective and successful Christian living. That purpose shapes every part of campus life: academic instruction runs alongside spiritual development grounded in the daily study of Scripture.</p>
    <h2>Social Competence</h2>
    <p>We develop each student’s ability to engage meaningfully in their community — to express ideas clearly, collaborate well with others, and pursue a vocation that satisfies both calling and craft.</p>
    <h2>Spiritual Foundation</h2>
    <p>Man has a responsibility to God that supersedes all others. Daily biblical instruction is a fundamental part of life at SwCC, not an elective add-on to it.</p>
    <h2>Integrated Purpose</h2>
    <p>Our academic instruction prepares each student to effectively take their place in the business and social world — well rooted and grounded in the Word of God.</p>
  </div>
</section>

    </>
  );
}
