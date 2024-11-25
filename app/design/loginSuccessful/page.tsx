import styles from "./page.module.css";

export default function loginSuccessful() {
  return (
    <section className={styles.loginSuccessful}>
      <img src="/v.svg" alt="big V" className={styles.VImage} />
      <p className={styles.discription}>
        Your Ecorate account has been successfully created!{" "}
      </p>
      <a href="#" className={styles.SignInSubmit}>
        Start monitoring your activity
        <img
          src="/arrow_right.svg"
          alt="arrow right"
          className={styles.arrowRight}
        />
      </a>
    </section>
  );
}
