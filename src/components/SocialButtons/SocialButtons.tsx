import "./socialButtons.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./socialButtons.module.css";
import Link from "next/link";

export default function MyComponent() {
  return (
    <div className={styles["social-btns"]}>
      <Link
        className={`${styles.btn} ${styles.facebook}`}
        href="/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
      <Link
        className={`${styles.btn} ${styles.twitter}`}
        href="/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </Link>
      <Link
        className={`${styles.btn} ${styles.google}`}
        href="/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} />
      </Link>
      <Link
        className={`${styles.btn} ${styles.linkedin}`}
        href="/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </div>
  );
}
