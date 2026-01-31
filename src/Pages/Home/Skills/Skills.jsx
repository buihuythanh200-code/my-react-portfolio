import styles from "./Skills.module.css";
function Skills() {
  const skills = [
    {
      id: 1,
      logo: "fa-brands fa-react",
      name: "React",
      percent: "70%",
      color: "#61DAFB",
    },
    {
      id: 2,
      logo: "fa-brands fa-html5",
      name: "HTML5",
      percent: "90%",
      color: "#E34F26",
    },
    {
      id: 3,
      logo: "fa-brands fa-css3-alt",
      name: "CSS",
      percent: "85%",
      color: "#1572B6",
    },
    {
      id: 4,
      logo: "fa-brands fa-js",
      name: "Javascript",
      percent: "85%",
      color: "#F7DF1E",
    },
    {
      id: 5,
      logo: "fa-brands fa-figma",
      name: "Figma",
      percent: "70%",
      color: "#F24E1E",
    },
    {
      id: 6,
      logo: "fa-brands fa-git-alt",
      name: "Git/Github",
      percent: "60%",
      color: "#F05032",
    },
    {
      id: 7,
      logo: "fa-solid fa-globe",
      name: "REST API",
      percent: "75%",
      color: "#6B7280",
    },
    {
      id: 8,
      logo: "fa-solid fa-database",
      name: "My Sql",
      percent: "70%",
      color: "#4479A1",
    },
  ];

  return (
    <section className={styles["section-skills"]}>
      <div className={styles["title"]}>
        <span>Tools and technologies I use to build and analyze products.</span>
        <h2>Skills and Technologies</h2>
      </div>

      <div className={styles["skills-container"]}>
        {skills.map((skill, index) => {
          return (
            <div className={styles["item"]} key={skill.id}>
              <div className={styles["item-logo"]}>
                <i className={skill.logo} style={{ color: skill.color }}></i>{" "}
                <span>{skill.name}</span>
              </div>
              <div className={styles["line-parameter"]}>
                <p>{skill.percent}</p>
                <div className={styles["progress"]}>
                  <div
                    className={styles["progress-fill"]}
                    style={{
                      width: skill.percent,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Skills;
