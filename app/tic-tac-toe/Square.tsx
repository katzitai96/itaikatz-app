import styles from "../../app/tic-tac-toe/page.module.css";

interface Props {
  value: string;
  clickHandler: () => void;
}

export default function Square(props: Props) {
  return (
    <button className={styles.square} onClick={props.clickHandler}>
      {props.value}
    </button>
  );
}
