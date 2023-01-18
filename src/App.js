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
            <p className="loccountry">{data.name}  {data.sys ? <p className="p2"> - {data.sys.country}</p> : null}</p>

          </div>
          <div className="temperature">
            {data.main ? <><h1>{(data.main.temp - 273.15).toFixed(1)}</h1><h2>°C</h2></> : null}

          </div>
          <div className="weather-desc">
            {data.weather ? <p>{(data.weather[0].description).charAt(0).toUpperCase() + (data.weather[0].description).slice(1)}</p> : null}
          </div>
          <div className="weather-desc">
            {data.weather ? <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57706628.732183024!2d8.23477268926637!3d28.02040743149768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1673998184966!5m2!1spt-BR!2sbr"
              
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            /> : null}
          </div>
          
        </div>
        <div className="bottom">
          <div className="temperature-feels">
            <p>{data.main ? <p>{(data.main.feels_like - 273.15).toFixed(1)}°C</p> : null}</p>
            <p className="desc">Feels like</p>
          </div>
          <div className="humidity">
            <p>{data.main ? <p>{(data.main.humidity).toFixed(1)}%</p> : null}</p>
            <p className="desc">Humidity</p>
          </div>
          <div className="winds">
            <p>{data.wind ? <p>{((data.wind.speed) * 1.6).toFixed(1)} KPH</p> : null}</p>
            <p className="desc">Wind speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
