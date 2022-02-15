import React from "react";
import WeatherEngine from "../WeatherEngine/WeatherEngine";

const WeatherView = (props) => {
  return (
    <div>
      <div class="flex-container">
        <WeatherEngine location="moscow" />
        <WeatherEngine location="halifax" />
        <WeatherEngine location="sydney" />
        <WeatherEngine location="london" />
        <WeatherEngine location="tallinn" />
        <WeatherEngine location="toronto" />
        <WeatherEngine location="vancouver" />
        <WeatherEngine location="cuba" />
        <WeatherEngine location="tbilisi" />
        <WeatherEngine location="san jose" />
      </div>
    </div>
  );
};

export default WeatherView;
