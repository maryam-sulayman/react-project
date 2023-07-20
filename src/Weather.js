import React from "react";

export default function Weather() {
  let dataValue = {
    city: "New York",
    date: "Sunday 04:20",
    description: "Cloudy",
    imgUrl:
      "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
    humidity: 35,
    windspeed: 23,
  };

  return (
    <div className="weather-app-wrapper">
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Enter city"
                autocomplete="off"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search-button"
              />
            </div>
            <div className="col-3">
              <button
                type="button"
                className="btn btn-success live-location-button"
              >
                Current
              </button>
            </div>
          </div>
        </form>
        <h1>{dataValue.city}</h1>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Last updated: {dataValue.date}</li>
              <li>{dataValue.description}</li>
            </ul>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {dataValue.humidity}%</li>
              <li>Windspeed: {dataValue.windspeed}Km/h</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d flex temperature">
              <img src={dataValue.imgUrl} alt={dataValue.imgUrl} />
              <span className="temperatureValue">30</span>
              <span className="units">
                <a href="/">°C </a>|<a href="/">°F</a>
              </span>
            </div>
            <div className="weather-forecast"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
