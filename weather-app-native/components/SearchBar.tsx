import { useContext } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { WeatherContext } from "../context/WeatherContext";

export default function SearchBar() {
  const { location, setLocation, searchLocation } = useContext(WeatherContext);

  return (
    <View className="flex-row items-center justify-center px-4 mt-4">
      <TextInput
        value={location}
        onChangeText={setLocation}
        placeholder="Enter location"
        className="flex-1 bg-white px-4 py-2 text-black rounded-xl shadow-md"
        returnKeyType="search"
        onSubmitEditing={searchLocation}
      />
      <TouchableOpacity
        onPress={searchLocation}
        className="ml-2 bg-blue-500 px-4 py-2 rounded-xl"
      >
        <Text className="text-white font-bold">Search</Text>
      </TouchableOpacity>
    </View>
  );
}
