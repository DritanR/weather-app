import { createContext, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext<any>(null);

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState("");

  const API_KEY = "dde6d82b30eecde8cf45536b6af80621";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = async () => {
    if (!location) return;

    try {
      const response = await axios.get(URL);
      setData(response.data);
      console.log("Weather data:", response.data);
    } catch (err) {
      console.error("Failed to fetch weather data", err);
    } finally {
      setLocation("");
    }
  };

  return (
    <WeatherContext.Provider value={{ location, setLocation, searchLocation, data }}>
      {children}
    </WeatherContext.Provider>
  );
};
