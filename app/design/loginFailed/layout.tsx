import type { ReactNode } from "react";
import styles from "./page.module.css";
export default function loginFailedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <section className={styles.loginFailedLayout}>{children}</section>;
}
