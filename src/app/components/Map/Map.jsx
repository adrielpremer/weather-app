import "./Map.css";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Dot } from "../dot/Dot";

export const SimpleMap = ({ onSelect, weathers }) => {
  const center = {
    lat: 55.65,
    lng: 12.5
  };
  const zoom = 12;

  console.log(weathers);

  return (
    <div style={{ height: "85vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAXux7gcWByUfXEmxcdnXgxWrzAFEeaVa4" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {weathers.map((weather, key) => (
          <Dot
            key={key}
            lat={weathers[key].Lat}
            lng={weathers[key].lon}
            onClick={() => {
              onSelect(weather);
            }}
          ></Dot>
        ))}
      </GoogleMapReact>
    </div>
  );
};

// {weathers.map((weather, index) => (
//   <article key={index} className={styles.item}>
//     <weather onSelect={() => onSelect(weather)} weather={weather} />
//   </article>
// ))}

export default SimpleMap;
