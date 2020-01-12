import React, { useState } from "react";
import axios from "axios";

import SearchContainer from "./searchContainer";
import WeatherContainer from "./weatherContainer";
import { api } from "../utils/staticVariables";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");

  const fetchWeatherData = () => {
    axios
      .get(`${api.base}/weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => {
        setWeather(res.data);
        setQuery("");
      })
      .catch(err => {
        console.warn("ERROR OCCURED RETRIEVING DATA");
      });
  };

  const search = evt => {
    if (evt.key === "Enter") fetchWeatherData();
  };

  const appClassName =
    typeof weather.main !== "undefined"
      ? weather.main.temp > 16
        ? "app warm"
        : " app"
      : "app";

  return (
    <div className={appClassName}>
      <main>
        <SearchContainer setQuery={setQuery} search={search} query={query} />
        {typeof weather.main !== "undefined" ? (
          <WeatherContainer weather={weather} />
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default App;
