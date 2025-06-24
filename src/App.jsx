import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import { WeatherProvider } from './context/WeatherContext'

function App() {
  return (
    <WeatherProvider>
    <SearchBar />
    <WeatherCard />
    </WeatherProvider>
  )
}

export default App
