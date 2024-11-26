import SockTimeLogo from "./logo/page";
import SockLogin from "./sockLogin/page";
import styles from "./page.module.css";

export default function SockTimeHome() {
  return (
    <>
      <SockTimeLogo></SockTimeLogo>
      <SockLogin></SockLogin>
    </>
  );
}
