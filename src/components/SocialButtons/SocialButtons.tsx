import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./socialButtons.module.css";

export default function MyComponent() {
  return (
    <div className={styles["social-btns"]}>
      <a
        className={`${styles.btn} ${styles.google}`}
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube}  style={{ color: "blue" }}
         />
      </a>

      <a
        className={`${styles.btn} ${styles.telegram}`}
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTelegram}  
        />
      </a>
      <a
        className={`${styles.btn} ${styles.instagram}`}
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} 
         />
      </a>
    </div>
  );
}
