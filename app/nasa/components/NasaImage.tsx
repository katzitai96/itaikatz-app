"use server";
import styles from "../page.module.css";

interface NasaItemDataProps {
  copyright1?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type?: string;
  service_version?: string;
  title: string;
  url?: string;
  index: number;
}

export default async function NasaImage(props: NasaItemDataProps) {
  return (
    <div className={styles.NasaImageDiv}>
      <h3>
        {props.title}
        {props.date}
      </h3>
      <img src={props.hdurl} alt="picture" className={styles.NasaImage} />
      <p className={styles.NasaImageDisc}>{props.explanation}</p>
    </div>
  );
}
