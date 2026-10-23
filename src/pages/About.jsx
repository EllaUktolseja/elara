export default function About() {
  return (
    <section className="page-section container">
      <p className="eyebrow">ABOUT ME</p>
      <h1 className="page-title">Curious by nature.<br /><span className="gradient-text">Intentional by design.</span></h1>
      <div className="about-layout">
        <div className="about-monogram" aria-hidden="true"><span>E</span><i>ELARA / 2026</i></div>
        <div className="prose">
          <h2>A little context</h2>
          <p>I’m a developer in Indonesia who enjoys turning ideas into digital experiences. I’m interested in the way thoughtful design and practical engineering can make products easier to understand and use.</p>
          <p>My approach is to learn by building: break a problem into manageable pieces, make the structure understandable, and improve the details through iteration.</p>
          <h2>What I’m working toward</h2>
          <p>I’m growing my skills across frontend development, reusable architecture, and full-stack concepts. Each project is an opportunity to practice sound fundamentals and make something useful.</p>
          <div className="about-facts"><div><strong>01</strong><span>Learn continuously</span></div><div><strong>02</strong><span>Build thoughtfully</span></div><div><strong>03</strong><span>Improve iteratively</span></div></div>
        </div>
      </div>
    </section>
  )
}
