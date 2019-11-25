import React from "react";
import styles from "./MapContainer.module.scss";
import SimpleMap from "./Map";

export const MapContainer = ({ weathers, onSelect }) => (
  <div className={styles.weathers}>
    <SimpleMap onSelect={onSelect} weathers={weathers}></SimpleMap>
  </div>
);
