import { useContext, useMemo } from "react";
import { View, Text } from "react-native";
import { WeatherContext } from "../context/WeatherContext";

export default function WeatherCard() {
  const { data } = useContext(WeatherContext);

  const formattedTemp = useMemo(() => {
    if (!data.main || typeof data.main.temp !== "number") return "";
    return `${Math.round(data.main.temp)} °C`;
  }, [data.main?.temp]);

  if (!data.weather) return null;

  return (
    <View className="w-80 h-60 bg-gray-300 shadow-lg rounded-xl mt-8 px-6 py-4 justify-between">
      <View className="flex-row justify-between">
        <View>
          <Text className="text-xl font-bold">{data.name}, {data.sys?.country}</Text>
          <Text className="text-2xl text-blue-600 mt-2">{formattedTemp}</Text>
          <Text className="text-md text-gray-700">{data.weather[0]?.description}</Text>
        </View>
      </View>

      <View className="mt-4">
        <Text className="text-md">Feels like: {Math.round(data.main.feels_like)} °C</Text>
        <Text className="text-md">Humidity: {data.main.humidity}%</Text>
        <Text className="text-md">Wind: {data.wind.speed} KPH</Text>
        <Text className="text-md">Pressure: {data.main.pressure} hPa</Text>
      </View>
    </View>
  );
}
