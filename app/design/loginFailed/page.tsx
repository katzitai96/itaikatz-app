import styles from "./page.module.css";

export default function loginFailed() {
  return (
    <section className={styles.loginFailed}>
      <img src="/bigX.svg" alt="big X" className={styles.bigX} />
      <p className={styles.discription}>Login failed</p>
      <a href="/design" className={styles.SignInSubmit}>
        please try again
      </a>
    </section>
  );
}
