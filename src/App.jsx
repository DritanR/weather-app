import './App.css'
import { WeatherProvider } from './context/WeatherContext'
import Weather from './pages/Weather'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='w-full h-full relative'>
        <WeatherProvider>
          <Routes>
          <Route path='/' element={<Weather />} />
          </Routes>
        </WeatherProvider>
      </div>
    </Router>
  )
}

export default App
