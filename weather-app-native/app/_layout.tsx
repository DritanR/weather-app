import { Slot } from "expo-router";
import { WeatherProvider } from "../context/WeatherContext";

export default function Layout() {
  return (
    <WeatherProvider>
      <Slot />
    </WeatherProvider>
  );
}