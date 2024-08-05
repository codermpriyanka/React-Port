import React from "react";
import styles from "./Contacts.module.css";
import { getImageUrl } from "../utils";

const Contacts = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">pm7894061@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://linkedin.com/in/priyanka-muduli7">
            linkedin.com/priyanka-muduli7
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/codermpriyanka">
            github.com/codermpriyanka
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contacts;
