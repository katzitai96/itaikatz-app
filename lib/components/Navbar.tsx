"use client";

import Link from "next/link";
import {
  APP_NAME,
  COURSE_GITHUB,
  DEMOS_ENABLED,
  TIC_TAC_TOE_LOC,
  NASA_IMAGES,
  DESIGN_LOC,
} from "../config";
import { Button } from "@nextui-org/button";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import "/styles/global.css";

import "bootstrap/dist/css/bootstrap.css";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">{APP_NAME}</Link>
      </h1>
      <nav>
        <Dropdown className="dropdown" id="drop">
          <DropdownTrigger className="btn btn-secondary dropdown-toggle">
            <img
              src="/burger_icon.svg"
              alt="manu icon"
              className="burger-logo"
            ></img>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            color="primary"
            variant="bordered"
            className="dropdown-menu-itai"
          >
            <DropdownItem
              href="/"
              key="home"
              className="dropdown-item"
              variant="bordered"
            >
              Home
            </DropdownItem>
            <DropdownItem
              href={COURSE_GITHUB}
              target="_blank"
              key="gitHub"
              className="dropdown-item"
            >
              GitHub
            </DropdownItem>
            <DropdownItem href="/demos" key="demos" className="dropdown-item">
              Demos
            </DropdownItem>
            <DropdownItem
              href={TIC_TAC_TOE_LOC}
              key="ticTacToe"
              className="dropdown-item"
              color="danger"
            >
              Tic-Tac-Toe
            </DropdownItem>
            <DropdownItem
              href={NASA_IMAGES}
              key="nasa"
              className="dropdown-item"
            >
              Nasa Images
            </DropdownItem>
            <DropdownItem
              href={DESIGN_LOC}
              key="design"
              className="dropdown-item"
            >
              Design
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* <Link href="/">Home</Link>
        <Link href={COURSE_GITHUB} target="_blank">
          GitHub
        </Link>
        {DEMOS_ENABLED ? <Link href="/demos">Demos</Link> : null}
        <Link href={TIC_TAC_TOE_LOC}>Tic-Tac-Toe</Link>
        <Link href={NASA_IMAGES}>Nasa Images</Link> */}
      </nav>
    </header>
  );
}
