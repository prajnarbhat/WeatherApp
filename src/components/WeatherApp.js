import { useEffect, useState } from "react";
import SearchData from "./SearchData";
import WeatherCard from "./WeatherCard";

const WeatherApp = () => {

    const [weatherData, setWeatherData] = useState(null)
    const [cityName, setCityName] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const fetchWeatherData = async() => {

            setLoading(true);

            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`)
                const data = await response.json();
                //console.log(data)
                setWeatherData(data);
            }
            catch(error) {
                console.log("Error fetching data");
            }
        }
        fetchWeatherData();
        setLoading(false)

    },[cityName])

    const onCityNameChange = (cityTargetValue) => {
        setCityName(cityTargetValue)
    }


    const API_KEY = 'faa0acb25d9fc113867bccd554ace956';
    return (
        <>

        {loading && <p className="mt-4 text-blue-500">Loading weather data...</p>}
        
        
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400">
        <div className="block space-y-10 bg-gray-100 w-full max-w-sm p-8 border border-gray-400 rounded-lg">
            
            <SearchData data={cityName} onCityNameChange={onCityNameChange}/>

            <WeatherCard data={weatherData} loading={loading}/>
        </div>
        </div>
        </>
    )
}

export default WeatherApp;