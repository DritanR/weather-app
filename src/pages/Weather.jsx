import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'

function Weather() {
    return (
        <div className='w-full h-full relative'
        >
            <SearchBar />
            <WeatherCard />
        </div>
    )
}

export default Weather