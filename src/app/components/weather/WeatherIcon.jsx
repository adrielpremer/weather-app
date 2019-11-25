import React from "react";

import { WiDaySunny, WiCloudy, WiRain, WiSnowWind } from "react-icons/wi";
import { GiChewedSkull } from "react-icons/gi";

export const WeatherIcon = ({ type }) => {
  switch (type) {
    case "Clear":
      return <WiDaySunny />;
    case "Rain":
      return <WiRain />;
    case "Clouds":
      return <WiCloudy />;
    case "Snow":
      return <WiSnowWind />;
    default:
      return <div>{type}</div>;
  }
};
