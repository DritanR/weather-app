import {createContext, useState, useEffect, useContext} from 'react'
import axios from "axios";

export const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {
    const [data, setData] = useState({})
    const [location, setLocation]= useState("")
    const API_KEY = 'dde6d82b30eecde8cf45536b6af80621'
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`

    const searchLocation = (event) => {
        if (event.key == "Enter") {
            axios.get(URL)
            .then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation("")
        }
    }
    return (
        <WeatherContext.Provider value={{location, setLocation, searchLocation}}>
            {children}
        </WeatherContext.Provider>
    )
}