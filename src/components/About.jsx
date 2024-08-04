import React from "react";
import { getImageUrl } from "../utils";
import styles from "./About.module.css";
function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Girl.png")}
          alt="me with Lappi"
          className={styles.aboutImage}
        ></img>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cursor icon"
            ></img>
            <div className={styles.aboutItemText}>
              <h3>
                <p className={styles.aboutItemText}>
                  I am a frontend developer.
                </p>
                <p className={styles.aboutItemText}>
                  I have completed several online courses in programming
                  languages such as HTML,CSS,JavaScript,React,Redux & DSA in
                  Java.
                </p>
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
