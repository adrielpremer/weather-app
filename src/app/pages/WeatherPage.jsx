import React from "react";
import { MapContainer } from "../components/Map/MapContainer";
import { WeatherDetailContainer } from "../components/weather/weatherDetailContainer";
import { WeatherConsumer } from "../ContextProvider";

export const WeatherPage = () => {
  return (
    <WeatherConsumer>
      {({ weathers, selectedweather, onDelete, onClose, onSelect }) =>
        !!selectedweather ? (
          <WeatherDetailContainer
            weather={selectedweather}
            onDelete={onDelete}
            onClose={onClose}
          />
        ) : (
          <MapContainer onSelect={onSelect} weathers={weathers} />
        )
      }
    </WeatherConsumer>
  );
};
