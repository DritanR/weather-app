import './App.css'
import Header from './components/Header'
import { WeatherProvider } from './context/WeatherContext'
import About from './pages/About'
import Weather from './pages/Weather'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Header />
        <WeatherProvider>
          <Routes>
          <Route path='/' element={<Weather />} />
          <Route path='/about' element={<About />} />
          </Routes>
        </WeatherProvider>
    </Router>
  )
}

export default App
