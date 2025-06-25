// app/(tabs)/index.tsx
import "../../global.css";
import { View, Text } from "react-native";
import SearchBar from "../../components/SearchBar";
import WeatherCard from "../../components/WeatherCard";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-100 items-center justify-start pt-20 px-4">
      <Text className="text-3xl font-bold text-blue-600 mb-6">Weather App</Text>
      <SearchBar />
      <WeatherCard />
    </View>
  );
}
