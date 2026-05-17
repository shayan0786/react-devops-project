import './App.css'
import { useState } from 'react'

function App() {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {

    if(city === ""){
      alert("Please enter city name")
      return
    }

    const apiKey = "dbeffeef00f4d636f1c50ffa17892d37"

    const url =
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    const response = await fetch(url)
    const data = await response.json()

    setWeather(data)
  }

  return (
    <div className="container">

      <div className="weather-card">

        <h1>🌦 Weather App</h1>

        <div className="search-box">

          <input
            type="text"
            placeholder="Enter city name"
            onChange={(e)=>setCity(e.target.value)}
          />

          <button onClick={getWeather}>
            Search
          </button>

        </div>

        {
          weather && weather.main && (

            <div className="weather-info">

              <h2>{weather.name}</h2>

              <h3>{weather.main.temp}°C</h3>

              <p>🌡 Humidity : {weather.main.humidity}%</p>

              <p>💨 Wind Speed : {weather.wind.speed} km/h</p>

              <p>
                ☁ Condition : {weather.weather[0].main}
              </p>

            </div>

          )
        }

      </div>

    </div>
  )
}

export default App