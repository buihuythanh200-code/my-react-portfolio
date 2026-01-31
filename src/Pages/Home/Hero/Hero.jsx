import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-info"]}>
        <div style={{ display: "inline-block" }}>
          <span>About My Work</span>
        </div>

        <h1>Building modern web experiences</h1>
        <ul>
          <li>WEB</li>
          <li></li>
          <li>BRANDING</li>
          <li></li>
          <li>UX/UI</li>
        </ul>
        <p>
          I am an independent web developer focused on building modern,
          responsive, and user-centric websites and applications. I combine
          clean design with efficient code to create intuitive digital
          experiences that help individuals and businesses achieve their goals.
        </p>
      </div>
      <div className={styles.image}>
        <img
          src="https://images.unsplash.com/photo-1632886803110-62eafc433aa9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </section>
  );
}
export default Hero;
