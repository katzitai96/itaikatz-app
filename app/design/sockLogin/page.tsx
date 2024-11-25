"use client";

import { a } from "framer-motion/client";
import styles from "./page.module.css";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function SockLogin() {
  const welcome_text_1 = "Welcome to SockTime, a social add-on for Zoom.";
  const welcome_text_2 =
    "To upload a picture of your socks and share it with other participants, enter your details";

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

  const showClearButton2 = () => {
    if (!clearButtonVisible_2) {
      setClearButtonVisible2(true);
    }
  };

  const clearField1 = () => {
    setValue1("");
    setClearButtonVisible1(false);
  };

  const clearField2 = () => {
    setValue2("");
    setClearButtonVisible2(false);
  };

  const signInAction = () => {
    setsignInSuccess(1); // error
    // setsignInSuccess(2); // success
  };

  return (
    <div className={styles.SockLogin}>
      <p>
        {welcome_text_1} <br /> {welcome_text_2}
      </p>
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
        <div
          className={
            signInSuccess != 1
              ? styles.input_sign_in
              : styles.input_sign_in_invalid
          }
        >
          <label htmlFor="input_password" className={styles.input_label}>
            Password:
          </label>
          <input
            className={styles.password_input_value}
            type="password"
            id="input_password"
            placeholder="********"
            onFocus={showClearButton2}
            onBlur={showClearButton2}
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            required
          />
          {clearButtonVisible_2 && (
            <img
              src="/x.svg"
              alt="clear email"
              className={styles.clearField}
              onClick={clearField2}
              onFocus={showClearButton2}
              onBlur={showClearButton2}
            />
          )}
        </div>
        <section className={styles.passWordSubscript}>
          <a className={styles.ForgotPasswordBtn} href="/design/resetPassword">
            Forgot password?
          </a>
          {signInSuccess == 1 && (
            <p className={styles.wrongPasswordLabel}>The input is incorrect</p>
          )}
        </section>
        <input type="submit" className={styles.SignInSubmit} value="Sign in" />
      </form>
    </div>
  );
}
