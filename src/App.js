import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Timezone from './components/Timezone';
import Temperature from './components/Temperature';


function App() {

  const [city, setCity] = useState('');
  const [query, setQuery] = useState('Milan')
  const [units, setUnits] = useState('metric');
  const [temperature, setTemperature] = useState([]);
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [imgSrc, setImgSrc] = useState('day');

  useEffect(()=>{
    getWeather();
  },[query])

  useEffect(()=>{
    getWeatherCurrentLocation();
  },[longitude])


  const getWeather = async ()=>{

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${units}&appid=72fe768d404c5e2c3777a7ca2754ca13`);
    const data = await response.json();
    console.log(data);
    
    setTemperature(data.main);
    setWeather(data.weather[0]);
    setLocation(data.name)
  }

  const getWeatherCurrentLocation = async ()=>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=72fe768d404c5e2c3777a7ca2754ca13`);
    const data = await response.json();

    setTemperature(data.main);
    setWeather(data.weather[0]);
    setLocation(data.name)
  }

  return (
    <div  className="App">
      <Form setQuery={setQuery} city={city} setCity={setCity} setLatitude={setLatitude} setLongitude={setLongitude}/>
      <Timezone location={location} imgSrc={imgSrc} setImgSrc={setImgSrc} weather={weather}/>
      <Temperature temperature={temperature} weather={weather}/>
    </div>
  );
}

export default App;
