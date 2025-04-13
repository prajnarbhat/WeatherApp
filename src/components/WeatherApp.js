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
        <h3> Weather App</h3>
        <SearchData data={cityName} onCityNameChange={onCityNameChange}/>

        <WeatherCard data={weatherData} loading={loading}/>
        </>
    )
}

export default WeatherApp;