import Link from "next/link";
import {
  APP_NAME,
  COURSE_GITHUB,
  DEMOS_ENABLED,
  TIC_TAC_TOE_LOC,
  NASA_IMAGES,
} from "../config";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">{APP_NAME}</Link>
      </h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href={COURSE_GITHUB} target="_blank">
          GitHub
        </Link>
        {DEMOS_ENABLED ? <Link href="/demos">Demos</Link> : null}
        <Link href={TIC_TAC_TOE_LOC}>Tic-Tac-Toe</Link>
        <Link href={NASA_IMAGES}>Nasa Images</Link>
      </nav>
    </header>
  );
}
