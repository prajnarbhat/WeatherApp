const WeatherCard = (props) => {

    console.log("Whats inside weather daata:", props.data);

    const loadingData = props.loading

    const WeatherCardData = props.data;
    return (
        <>
            
            {WeatherCardData && !loadingData  && WeatherCardData.weather ? (
                <div className="mt-4">
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-bold text-[30px]"> {WeatherCardData.main.temp}°C</p>
                        <h2 className="font-bold text-[20px]">{WeatherCardData.name}</h2>
                        <p className="text-[20px]">{WeatherCardData.weather[0].description}</p>
                    </div>
                    <br></br>
                    <div className="flex justify-around">
                        <p className="text-[20px]">  {WeatherCardData.main.humidity}% <br></br>humidity</p>
                        <p className="text-[20px]">  {WeatherCardData.wind.speed} <br></br> m/s</p>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center">
                    <p className="font-bold text-[20px]">No data found</p>
                </div>
            )}
        </>
    )
}

export default WeatherCard;