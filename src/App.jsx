import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Humidity from './component/Humidity';
import Wind from './component/Wind';
import Temprature from './component/Temprature';
function App() {

  const [city,setCity]=useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  
  const apiURL=`https://api.weatherapi.com/v1/current.json?key=169efbb1752644d486a112827241102&q=${city}&aqi=no`;
  useEffect (()=>{
    fetch(apiURL)
    .then((response)=>{
      if(!response.ok){
        throw new Error("Error");
      }
       return response.json();
    })
    .then((data)=>{
      console.log(data);
      setWeatherData(data);
    })
    .catch((e)=>{
      console.log(e);
    })
  },[city])

  const handleSearch=(city)=>{
    setCity(city);
  }

  return (
    <>
    <Navbar onSearch={handleSearch} />
    <div className="container">
        <h1 className="my-4 text-center">Weather for {city}  <span id="cityName"></span></h1>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <Temprature 
      stats={{
        tempC: weatherData?.current.temp_c,
        tempF: weatherData?.current.temp_f,
        isDay: weatherData?.current.is_day
      }} />
      <Humidity
      stats={{
        humidity: weatherData?.current.humidity,
        cloudPct: weatherData?.current.cloud,
        feelsLike: weatherData?.current.feelslike_c
      }} />
      <Wind
      stats={{
        wind: weatherData?.current.wind_kph,
        windSpeed: weatherData?.current.wind_mph,
        windDegree: weatherData?.current.wind_degree,
        windDir: weatherData?.current.wind_dir
      }} />
      </div>
    </div>
    </>
  )
}

export default App
