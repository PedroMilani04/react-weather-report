import React, { useState } from "react";
import axios from "axios";
function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=7989b48507389ed58967d1ad0f43715f`

  // começar app em baixo
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p> California </p>
          </div>
          <div className="temperature">
            <h1>50°F</h1>
          </div>
          <div className="weather-desc">
            <p>Sunny</p>
          </div>
        </div>
        <div className="bottom">
          <div className="temperature-feels">
            <p>60°F</p>
            <p className="desc">Feels like</p>
          </div>
          <div className="humidity">
            <p>30%</p>
            <p className="desc">Humidity</p>
          </div>
          <div className="winds">
            <p>6 MPH</p>
            <p className="desc">Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
