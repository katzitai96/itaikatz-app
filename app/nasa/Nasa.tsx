import styles from "./page.module.css";
import { getData } from "./getNasaData";
import NasaImage from "./components/NasaImage";
// import { useEffect, useState } from "react";

export default function Nasa({ dataCheck }) {
  return (
    <main>
      <h1>Nasa Images</h1>
      <div className={styles.NasaImagesPage}>
        {dataCheck.map((item: any, index: number) => {
          return (
            <NasaImage
              hdurl={item.hdurl}
              explanation={item.explanation}
              date={item.date}
              key={index}
              title={item.title}
              index={index}
            ></NasaImage>
          );
        })}
      </div>
    </main>
  );
}

export async function FetchNasaData() {
  const dataCheck: any[] = await getData(4);
  return { props: { dataCheck } };
}
