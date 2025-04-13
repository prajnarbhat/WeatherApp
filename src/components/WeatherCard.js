const WeatherCard = (props) => {

    console.log("Whats inside weather daata:", props.data);

    const loadingData = props.loading

    const WeatherCardData = props.data;
    return (
        <>
            <h3> Weather Card</h3>
            
            {WeatherCardData && !loadingData  && WeatherCardData.weather ? (
                <div className="mt-4">
                <h2>{WeatherCardData.name}</h2>
                <p>{WeatherCardData.weather[0].description}</p>
                <p>🌡 Temperature: {WeatherCardData.main.temp}°C</p>
                <p>💧 Humidity: {WeatherCardData.main.humidity}%</p>
                <p>🌬 Wind Speed: {WeatherCardData.wind.speed} m/s</p>
                </div>
            ) : (
                <p>No data found</p>
            )}
        </>
    )
}

export default WeatherCard;