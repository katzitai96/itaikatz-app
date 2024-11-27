"use client";

import { NASA_API_KEY } from "@/lib/config";
import styles from "./page.module.css";
import { getData } from "./components/getNasaData";
import NasaImage from "./nasaImage/page";
import { useEffect, useState } from "react";

export default function Nasa() {
  const [apodData, setApodData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(4);
        console.log("Fetched APOD Data");
        setApodData(data);
      } catch (error) {
        console.error("Error fetching APOD data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Nasa Images</h1>
      <div className={styles.NasaImagesPage}>
        {apodData.map((item: any, index: number) => {
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
