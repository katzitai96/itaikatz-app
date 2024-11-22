import { NASA_API_KEY } from "@/lib/config";
import styles from "./page.module.css";
import NasaImage, { NasaItemData } from "@/app/nasa/nasaImage";

export default async function Nasa() {
  const data = getNasaData(3);
  return (
    <main>
      <h1>Nasa Images</h1>
      {data}
    </main>
  );
}

async function getNasaData(count: number) {
  const response = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=" +
      NASA_API_KEY +
      "&count=" +
      count
  );
  const data = await response.json();
  const allData = data.map((item: NasaItemData, index: number) => {
    return (
      <NasaImage
        key={index}
        title={item.title}
        index={index}
        hdurl={item.hdurl}
        explanation={item.explanation}
        date={item.date}
      ></NasaImage>
    );
  });
  return <div className={styles.NasaImagesPage}>{allData}</div>;
}
