function About({appName}) {

  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-4">{appName} – About</h1>

      <p className="mb-4">
        Want to know more about OpenWeatherMap API? Click Learn More to find out!
      </p>

      <a
        href="https://openweathermap.org/"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-6"
      >
        Learn More
      </a>

<div className="max-w-3xl mx-auto p-6 bg-gray-100 mt-4 bg-opacity-90 rounded-lg shadow-md text-gray-800 leading-7 text-lg">
  <p>
    <span className="font-semibold text-blue-600">{appName}</span> is a simple and user-friendly tool that provides detailed and up-to-date weather information for any city in the world.
    When a user searches for a location, the app displays key weather data including the current sky conditions (such as clear, cloudy, or rainy),
    the actual temperature, and how the temperature feels.
  </p>

  <br />

  <p>
    In addition, it shows the humidity level as a percentage, the wind speed in kilometers per hour (KPH),
    and the atmospheric pressure measured in hectopascals (hPa).
    These details help users stay informed about the weather so they can plan their day accordingly.
    Whether you're checking the conditions in your own city or exploring the climate in another part of the world,
    <span className="font-semibold text-blue-600">{appName}</span> gives you a quick and accurate snapshot of the current environment.
  </p>
</div>

    </div>
  )
}

export default About
