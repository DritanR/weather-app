import { View, Text, Linking, Pressable } from 'react-native';

export default function About() {
  return (
    <View className="p-6 max-w-3xl mx-auto">
      <Text className="text-3xl font-bold mb-4">Weather App – About</Text>

      <Text className="mb-4">
        Want to know more about OpenWeatherMap API? Click below to find out!
      </Text>

      <Pressable
        onPress={() => Linking.openURL('https://openweathermap.org/')}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-6"
      >
        <Text className="text-white text-center">Learn More</Text>
      </Pressable>

      <View className="bg-gray-100 mt-4 bg-opacity-90 rounded-lg shadow-md p-4">
        <Text className="leading-7 text-lg text-gray-800">
          <Text className="font-semibold text-blue-600">Weather App</Text> is a simple and user-friendly tool that provides detailed and
          up-to-date weather information for any city in the world. When a user searches for a
          location, the app displays key weather data including the current sky conditions (such as
          clear, cloudy, or rainy), the actual temperature, and how the temperature feels.
        </Text>

        <Text className="leading-7 text-lg text-gray-800 mt-4">
          In addition, it shows the humidity level as a percentage, the wind speed in kilometers per
          hour (KPH), and the atmospheric pressure measured in hectopascals (hPa). These details help
          users stay informed about the weather so they can plan their day accordingly. Whether
          you're checking the conditions in your own city or exploring the climate in another part of
          the world, <Text className="font-semibold text-blue-600">Weather App</Text> gives you a quick
          and accurate snapshot of the current environment.
        </Text>
      </View>
    </View>
  );
}