import SockTimeLogo from "./logo/page";
import SockLogin from "./sockLogin/page";
import styles from "./page.module.css";

export default function SockTimeHome() {
  return (
    <>
      <h2 className={styles.checking}>checking</h2>
      <SockTimeLogo></SockTimeLogo>
      <SockLogin></SockLogin>
    </>
  );
}
