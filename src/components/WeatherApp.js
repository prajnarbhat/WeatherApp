import { useEffect, useState } from "react";
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


    const API_KEY = 'faa0acb25d9fc113867bccd554ace956';
    return (
        <>

        {loading && <p className="mt-4 text-blue-500">Loading weather data...</p>}
        <h3> Weather App</h3>
        <input type="search" name="name" value={cityName} onChange={(e) => setCityName(e.target.value)} className="border-b-gray-800 bg-slate-300"/>
            {weatherData && !loading && weatherData.weather ? (
                <div className="mt-4">
                <h2>{weatherData.name}</h2>
                <p>{weatherData.weather[0].description}</p>
                <p>🌡 Temperature: {weatherData.main.temp}°C</p>
                <p>💧 Humidity: {weatherData.main.humidity}%</p>
                <p>🌬 Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
            ) : (
                <p>No data found</p>
            )}

       
        </>
    )
}

export default WeatherApp;