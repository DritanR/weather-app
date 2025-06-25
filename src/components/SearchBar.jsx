import { useContext, useRef, useEffect } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function SearchBar () {
    const {location, setLocation, searchLocation} = useContext(WeatherContext)

    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div className='text-center p-4'>
        <input 
        type="text"
        ref={inputRef}
        placeholder="Enter location"
        className="py-3 px-6 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-nd"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDownCapture={searchLocation}
        />
        </div>
    )
}

export default SearchBar