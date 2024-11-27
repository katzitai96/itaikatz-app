"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Board from "./board/Board";
export default function TicTacToe() {
  const [XisNext, setXIsNext] = useState(true);
  const [squares, setsquares] = useState<string[]>(new Array(9).fill(""));

  const winner = calculateWinner(squares);
  let status;
  let winner_img;
  if (winner) {
    status = "Winner: " + winner;
    winner_img = <img src="/dancing_winner.gif" alt="dancing winner"></img>;
  } else {
    status = "Next turn is: " + (XisNext ? "X" : "O");
  }
  return (
    <main className={styles.ticGame}>
      <h1>Tic Tac Toe</h1>
      <div className={styles.status}>{status}</div>
      <Board
        winningCalc={calculateWinner}
        squares={squares}
        setSquares={setsquares}
        XisNext={XisNext}
        setXisNext={setXIsNext}
      ></Board>
      {winner_img}
    </main>
  );
}

function calculateWinner(squares: Array<string>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
