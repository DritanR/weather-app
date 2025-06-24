import './App.css'
import SearchBar from './components/SearchBar'
import { WeatherProvider } from './context/WeatherContext'

function App() {
  return (
    <WeatherProvider>
    <SearchBar />
    </WeatherProvider>
  )
}

export default App
