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

/*
fix style of menu
add real login
fix clear button logic
---order css and structure
*/
