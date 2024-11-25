import type { ReactNode } from "react";
import styles from "./page.module.css";
export default function ResetPassLayout({ children }: { children: ReactNode }) {
  return <section className={styles.ResetPassLayout}>{children}</section>;
}
