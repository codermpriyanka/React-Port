import React from "react";
import { getImageUrl } from "../utils";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div>
      <section className={styles.container}>
        <div className={styles.contet}>
          <h1 className={styles.title}>Priyanka</h1>
          <p className={styles.description}>
            Hi I'm Priyanka, An Aspiring Frontend Developer.
            <p>
              Eager to contribute to innovative projects
              <p>and grow within a dynamic team.</p>
            </p>
          </p>
          <a href="mailto:pm7894061@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("hero/Profile_Round.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        ></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </div>
  );
}

export default Hero;
