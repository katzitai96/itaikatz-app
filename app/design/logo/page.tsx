import styles from "./page.module.css";

export default function SockTimeLogo() {
  return (
    <div className={styles.SockTimeLogo}>
      <h2 className={styles.Slogan}>SockTime</h2>
      <h4 className={styles.by}>by</h4>
      <img className={styles.ZoomLogo} src="/zoom-logo.svg" alt="zoom logo" />
      <img
        src="/logo.svg"
        alt="sock time logo"
        className={styles.SockTimeLogoImg}
      />
    </div>
  );
}
