const WeatherInfo = (props) => {
  console.log(props);
  return (
    <div className="border">
      <div className="">
        <div className="d-flex justify-content-between">
          <div>{props.weatherData.name}</div>
          <div> HEART AND ADD TO FAVORITES</div>
        </div>
      </div>
      <div className="">SCATTERD CLOUDS</div>
      <div className="">
        LIST OF BLOCKS THAT SHOW THE WEATHER FOR THE NEXT WEEK
      </div>
    </div>
  );
};

export default WeatherInfo;
