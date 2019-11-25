import React, { useState, useEffect } from "react";
import unirest from "unirest";
import styles from "./Weather.module.scss";
import { Image } from "../image/Image";
import { WeatherIcon } from "./WeatherIcon";
import { WiDirectionUp } from "react-icons/wi";

export const Weather = ({ weather }) => {
  const [weatherData, setWeatherData] = useState({});
  var req = unirest(
    "GET",
    "https://community-open-weather-map.p.rapidapi.com/forecast/daily"
  );
  useEffect(() => {
    req.query({
      lat: weather.Lat,
      lon: weather.lon,
      cnt: "7",
      units: "metric"
    });

    req.headers({
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "b93125d9d8msh03e7d7826013299p14066fjsn0f60f944c934"
    });

    req.end(function(res) {
      if (res.error) console.log("error");
      setWeatherData(res.body);
    });
  }, []);

  return (
    <div id="weatherContainer" className={styles.weathercontainer}>
      {!!weatherData.list ? (
        weatherData.list.map((weather, key) => (
          <div className={styles.row} key={key}>
            <WeatherIcon type={weather.weather[0].main} />

            <div className={styles.description}>
              {weather.weather[0].description}
            </div>
            <div className={styles.temperature}>
              <div>
                <div className={styles.day}>Day</div>
                <div className={styles.night}>Night</div>
                <div className={styles.day}>{weather.temp.day}</div>
                <div className={styles.night}>{weather.temp.night}</div>
              </div>
            </div>
            <div className={styles.humidity}>
              Humidity<br></br> {weather.humidity}%
            </div>
            <div
              style={{
                transform: `rotate(${weather.deg}deg)`
              }}
              className={styles.wind}
            >
              <WiDirectionUp />
            </div>
            {weather.speed}
          </div>
        ))
      ) : (
        <div>Loading Data</div>
      )}
    </div>
  );
};
