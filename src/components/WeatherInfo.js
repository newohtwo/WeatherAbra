const WeatherInfo = ({ weatherData }) => {
  return (
    <div className="border">
      <div className="">
        <div className="d-flex justify-content-between">
          <div>{weatherData.name}</div>
          <div className="d-flex align-self-center">
            <img
              style={{ width: "20px" }}
              src="/assets/heart_not_active.svg"
              className=""
            ></img>
            <button className="m-2">add to favorites</button>
          </div>
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
