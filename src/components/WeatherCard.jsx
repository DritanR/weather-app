import { useContext, useMemo } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function WeatherCard() {
    const { data } = useContext(WeatherContext)

    const formattedTemp = useMemo(() => {
        if (!data.main || typeof data.main.temp !== 'number') return ""

        return `${Math.round(data.main.temp)} °C`
    }, [data.main?.temp])

    return (
        <div>
            {data.weather ? (
                <div className='w-[500px] h-[250px] bg-gray-300 shadow-lg rounded-xl m-auto relative px-6 top-[10%]'>
                    <div className='flex justify-between w-full'>
                        <div className='w-1/2 my-4 mx-auto flex justify-between items-center'>
                            <div className='flex flex-col items-start justify-between h-full'>
                                <div>
                                    <p className='text-xl'>
                                        {data.name},
                                        {data.sys.country}
                                    </p>
                                    <p className='text-sm'>
                                        {data.weather[0].description}
                                    </p>
                                </div>

                                <div>
                                    <h1 className='text-6xl font-semibold'>{formattedTemp}</h1>
                                </div>
                            </div>
                        </div>

                        <div className='w-1/2 flex flex-col justify-between items-end'>
                            <div className='relative'>
                                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" className='w-[120px]' />
                            </div>

                            {data.name !== undefined ? (
                                <div className='flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs'>
                                    <div className='flex justify-between gap-x-8'>
                                        <p>Feels like</p>
                                        <p className='font-bold w-20'>
                                            {data.main.feels_like.toFixed()} °C
                                        </p>
                                    </div>
                                    <div className='flex justify-between gap-x-8'>
                                        <p>Humidity</p>
                                        <p className='font-bold w-20'>
                                            {data.main.humidity} %
                                        </p>
                                    </div>

                                    <div className='flex justify-between gap-x-8'>
                                        <p>Wind Speed</p>
                                        <p className='font-bold w-20'>
                                            {data.wind.speed.toFixed()} KPH
                                        </p>
                                    </div>

                                    <div className='flex justify-between gap-x-8'>
                                        <p>Pressure</p>
                                        <p className='font-bold w-20'>
                                            {data.main.pressure} hPa
                                        </p>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default WeatherCard