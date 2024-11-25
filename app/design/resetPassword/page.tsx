"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function ResetPassword() {
  const title = "forgot password";
  const welcome_text_2 = "To reset your password, Enter your email address";

  const [clearButtonVisible_1, setClearButtonVisible1] = useState(false);
  const [clearButtonVisible_2, setClearButtonVisible2] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [signInSuccess, setsignInSuccess] = useState(0);

  const showClearButton1 = () => {
    if (!clearButtonVisible_1) {
      setClearButtonVisible1(true);
    }
  };

  const clearField1 = () => {
    setValue1("");
    setClearButtonVisible1(false);
  };
  const signInAction = () => {
    setsignInSuccess(1); // error
    // setsignInSuccess(2); // success
  };

  return (
    <div className={styles.ResetPassword}>
      <section className={styles.titleAndArrow}>
        <a href="/design">
          <img
            src="/arrow_left.svg"
            alt="back_arrow"
            className={styles.arrowLeftImg}
          />
        </a>

        <h2 className={styles.title}>{title}</h2>
      </section>
      <p className={styles.welcome_text_2}>{welcome_text_2}</p>
      <form className={styles.LoginForm} action={signInAction}>
        <div
          className={
            signInSuccess != 1
              ? styles.input_sign_in
              : styles.input_sign_in_invalid
          }
          onFocus={showClearButton1}
          onBlur={showClearButton1}
        >
          <label htmlFor="input_email" className={styles.input_label}>
            Email:
          </label>
          <input
            className={styles.email_input_value}
            type="email"
            id="input_email"
            placeholder="user@example.com"
            value={value1}
            onFocus={showClearButton1}
            onBlur={showClearButton1}
            onChange={(e) => setValue1(e.target.value)}
          />
          {clearButtonVisible_1 && (
            <img
              src="/x.svg"
              alt="clear email"
              className={styles.clearField}
              onClick={clearField1}
            />
          )}
        </div>
        <section className={styles.passWordSubscript}>
          {signInSuccess == 1 && (
            <p className={styles.wrongPasswordLabel}>The input is incorrect</p>
          )}
        </section>
        <input type="submit" className={styles.SignInSubmit} value="Send" />
      </form>
    </div>
  );
}
