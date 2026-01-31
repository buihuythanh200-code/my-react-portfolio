import styles from "./Benefit.module.css";
function Benefit() {
  const listBenefit = [
    {
      linkImage:
        "https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/692862aed6c58ad474d46be2_01%201.png",
      title: "Value-driven development",
      desc: "I build high-quality web experiences that feel premium while staying efficient and practical. Every line of code is written with performance and usability in mind.",
    },
    {
      linkImage:
        "https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/692862aede1e2f0929873b37_01%202.png",
      title: "Thoughtful & custom design",
      desc: "I don’t rely on generic templates. Each project is carefully crafted to reflect the brand, the product, and the users it serves.",
    },
    {
      linkImage:
        "https://cdn.prod.website-files.com/68f32de327233c470b1e6a87/692862ae14c5c9b4be414cb9_01%201-1.png",
      title: "From interaction to impact",
      desc: "Great interfaces do more than look good — they guide users, improve engagement, and support real business goals through thoughtful frontend development..",
    },
  ];

  return (
    <section className={styles["section-benefit"]}>
      <div className={styles["section-title"]}>
        <span>Why work with me</span>
        <h2>Result-focused, detail-driven</h2>
      </div>
      <div className={styles["section-container"]}>
        {listBenefit.map((benefit, index) => {
          return (
            <div key={index} className={styles.item}>
              <img src={benefit.linkImage} alt="" />
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Benefit;
