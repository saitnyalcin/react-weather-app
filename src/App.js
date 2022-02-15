import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import WeatherView from "./components/WeatherView/WeatherView";

function App() {
  return (
    <div class="App">
      <Navbar />
      <div class="row">
        <div class="main">
          <WeatherView />
        </div>
      </div>
    </div>
  );
}

export default App;
