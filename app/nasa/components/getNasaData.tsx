import { NASA_API_KEY } from "@/lib/config";

export async function getData(count: number) {
  try {
    const apyKey = NASA_API_KEY;
    // Make the HTTP GET request to the NASA API
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apyKey}&count=${count}`
    );

    // Check if the response is successful
    if (!response.ok) {
      console.log(
        "Error fetching NASA data:",
        response.status,
        response.statusText
      );
      // throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json(); // Parse and return the data

    // Validate response type (if you expect an array)
    if (!Array.isArray(data)) {
      // throw new Error("Unexpected API response format: expected an array.");
    }

    return data;
  } catch (error) {
    console.log("Error in getData function:", error);
    // return [];
    throw error; // Re-throw the error after logging
  }
}
