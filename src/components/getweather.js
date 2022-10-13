import { useState } from "react"


const Weather = ({ data }) => {
  console.log("coming")
  const icon =`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  return (
    <div className="weather">
      <h3>{data.name}, {data.sys.country}</h3>
      <h4>Temperature: {Math.round(data.main.temp)}°C </h4>
      <h4>Feels like: {Math.round(data.main.feels_like)}°C </h4>
      <h4>Wind: {Math.round(data.wind.speed)} m/s </h4>
      <h4>{data.weather[0].main}</h4>
      <img src={icon} alt="Here suppose to be img" />
    </div>
  )
}

export default Weather