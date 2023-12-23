const ForecastWeatherBlock = ({dailyForecast}) =>{
    console.log(dailyForecast);
    return (
        <div className="card m-2 p-2 card-body d-inline-flex justify-content">
        {/* <h2>{favoriteWeather.Key}</h2> */}
        <h2 className="card-title">{dailyForecast.Temperature.Minimum.Value}</h2>
        <h2 className="card-title">{dailyForecast.Temperature.Maximum.Value}</h2>
        <div className="card-text">
          <p>{dailyForecast.Day.IconPhrase}</p>
        </div>
      </div>
    )
}

export default ForecastWeatherBlock;