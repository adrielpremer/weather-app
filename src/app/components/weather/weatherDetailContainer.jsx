import React from "react";
import { Button } from "../button/Button";
import { Layout } from "../layout/Layout";
import { Weather } from "./Weather";

export const WeatherDetailContainer = ({ weather, onClose }) => {
  return (
    <Layout width={1050}>
      <Weather weather={weather}></Weather>
      <Button onClick={() => onClose()}>Map</Button>
    </Layout>
  );
};
