"use client";

import Square from "@/lib/components/Square";
import styles from "./page.module.css";

interface Props {
  winningCalc: (numbers: Array<string>) => string | null;
  squares: Array<string>;
  setSquares: (numbers: Array<string>) => void;
  XisNext: boolean;
  setXisNext: (XisNext: boolean) => void;
}

export default function Board(props: any) {
  function squareClickHandler(i: number): void {
    if (props.squares[i] || props.winningCalc(props.squares)) {
      return;
    }

    const nextSquares = [...props.squares];
    if (props.XisNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    props.setSquares(nextSquares);
    props.setXisNext(!props.XisNext);
  }

  return (
    <>
      <div className={styles.ticBoard}>
        <div className={styles.board_row}>
          <Square
            value={props.squares ? props.squares[0] : ""}
            clickHandler={() => squareClickHandler(0)}
          ></Square>
          <hr className={styles.sep_column} />
          <Square
            value={props.square ? props.squares[1] : ""}
            clickHandler={() => squareClickHandler(1)}
          ></Square>
          <hr className={styles.sep_column} />
          <Square
            value={props.square ? props.squares[2] : ""}
            clickHandler={() => squareClickHandler(2)}
          ></Square>
        </div>
        <hr className={styles.sep_line} />
        <div className={styles.board_row}>
          <Square
            value={props.square ? props.squares[3] : ""}
            clickHandler={() => squareClickHandler(3)}
          ></Square>
          <hr className={styles.sep_column} />
          <Square
            value={props.square ? props.squares[4] : ""}
            clickHandler={() => squareClickHandler(4)}
          ></Square>
          <hr className={styles.sep_column} />
          <Square
            value={props.square ? props.squares[5] : ""}
            clickHandler={() => squareClickHandler(5)}
          ></Square>
        </div>
        <hr className={styles.sep_line} />
        <div className={styles.board_row}>
          <Square
            value={props.square ? props.squares[6] : ""}
            clickHandler={() => squareClickHandler(6)}
          ></Square>
          <hr className={styles.sep_column} />
          <Square
            value={props.square ? props.squares[7] : ""}
            clickHandler={() => squareClickHandler(7)}
          ></Square>
          <hr className={styles.sep_column} />
          <Square
            value={props.square ? props.squares[8] : ""}
            clickHandler={() => squareClickHandler(8)}
          ></Square>
        </div>
      </div>
    </>
  );
}
