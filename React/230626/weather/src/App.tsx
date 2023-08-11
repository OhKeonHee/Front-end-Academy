import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './Component/WeatherBox';
import WeatherButton from './Component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  let [loading, setLoading] = useState(false);
  const cities = ["paris", "new york", "tokyo", "seoul"];
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    })
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72ef23c31c7387b6e6fe7dc6bb4b8a28&units=metric` 
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
    setLoading(false);
  }

  const getWeatherByCity = async() => { // await 쓰려면 async써야댐
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=72ef23c31c7387b6e6fe7dc6bb4b8a28&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data)
    setLoading(false);
  }

  useEffect(() => {
    if(city == "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city])

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);

  const handleCityChange = (city) => {

  }

  return (
    <div className="App">
      <div className='container'>
      <ClipLoader
        color="#f00c0b"
        loading={loading}
        size={150}
      />
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} handleCityChange={handleCityChange}/>
      </div>
    </div>
  );
}

export default App;
