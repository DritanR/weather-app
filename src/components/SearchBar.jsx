import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function SearchBar () {
    const {location, setLocation, searchLocation} = useContext(WeatherContext)
    return (
        <input 
        type="text"
        placeholder="Enter location"
        className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-nd"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDownCapture={searchLocation}
        />
    )
}

export default SearchBar