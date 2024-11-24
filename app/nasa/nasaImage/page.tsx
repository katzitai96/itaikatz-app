import styles from "../page.module.css";

export interface NasaItemData {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type?: string;
  service_version?: string;
  title: string;
  url?: string;
  index: number;
}

export default function NasaImage(props: NasaItemData) {
  return (
    <div key={props.index} className={styles.NasaImageDiv}>
      <h2>
        {props.title} {props.date}
      </h2>
      <img src={props.hdurl} alt="picture" className={styles.NasaImage} />
      <p className={styles.NasaImageDisc}>{props.explanation}</p>
    </div>
  );
}
