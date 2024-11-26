import { NASA_API_KEY } from "@/lib/config";
import styles from "./page.module.css";
import NasaImage from "./nasaImage/page";

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
  const data: [] = await response.json();

  // const allData = data.map((item: any, index: number) => {
  //   return (
  //     <NasaImage
  //       hdurl={item.hdurl}
  //       explanation={item.explanation}
  //       date={item.date}
  //       key={index}
  //       title={item.title}
  //       index={index}
  //     ></NasaImage>
  //   );
  // });
  return (
    <div className={styles.NasaImagesPage}>
      {data.map((item: any, index: number) => {
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
  );
}
