import Link from "next/link";
import styles from "./page.module.css";

export default function SockLogin() {
  const welcome_text =
    "Welcome to SockTime, a social add-on for Zoom. To upload a picture of your socks and share it with other participants, enter your details";

  return (
    <div className={styles.SockLogin}>
      <p>{welcome_text}</p>
      <label htmlFor="input_email">Email:</label>
      <input
        className={styles.SignInInput}
        type="email"
        id="input_email"
        placeholder="user@example.com"
      />
      <label htmlFor="input_password">Password:</label>
      <input
        className={styles.SignInInput}
        type="password"
        id="input_password"
        placeholder="required"
        required
      />
      <button className={styles.ForgotPasswordBtn}>Forgot password?</button>
      <button className={styles.SignInSubmit}>Sign in</button>
    </div>
  );
}
