import styles from "./page.module.css";
import { getData } from "./components/getNasaData";
import NasaImage from "./components/NasaImage";
// import { useEffect, useState } from "react";

export default async function Nasa() {
  // const [apodData, setApodData] = useState<any[]>([]);

  const dataCheck: any[] = await getData(4);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getData(4);
  //       console.log("Fetched APOD Data");
  //       setApodData(data);
  //     } catch (error) {
  //       console.error("Error fetching APOD data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
