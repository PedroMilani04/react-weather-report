import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [country, setCountry] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},&appid=7989b48507389ed58967d1ad0f43715f`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  
  // começar app em baixo
  return (
    <div className="App">
      <div className="search">
        <input
          className="loc"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Insert Location"
          type="text"
        />

      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
            
          </div>
          <div className="temperature">
            {data.main ? <h1>{(data.main.temp - 273.15).toFixed(2)}°C</h1> : null}
            
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
