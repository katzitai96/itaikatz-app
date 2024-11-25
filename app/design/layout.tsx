import type { ReactNode } from "react";
import styles from "./page.module.css";
export default function SockTimeLayout({ children }: { children: ReactNode }) {
  return <main className={styles.SockTimeMain}>{children}</main>;
}
