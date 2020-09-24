import React, { useEffect } from "react";
//import day from '../img/animated/day.svg';

const Timezone = ({ location, imgSrc, weather, setImgSrc }) => {

  useEffect(() => {
    icons();
  }, [weather.icon]);

  const icons = () => {
    switch (weather.icon) {
      case "01d":
        setImgSrc("day");
        break;

      case "01n":
        setImgSrc("night");
        break;

      case "02d":
        setImgSrc("cloudy-day");
        break;

      case "02d":
        setImgSrc("cloudy-night");
        break;

      case "03d":
        setImgSrc("cloudy-day-3");
        break;

      case "03n":
        setImgSrc("cloudy-night-3");

        break;

      case "04d":
        setImgSrc("cloudy");
        break;

      case "04n":
        setImgSrc("cloudy");
        break;

      case "09d":
        setImgSrc("rainy-6");
        break;

      case "09n":
        setImgSrc("rainy-6");
        break;

      case "10d":
        setImgSrc("rainy-1");
        break;

      case "10n":
        setImgSrc("rainy-5");
        break;

      case "11d":
        setImgSrc("thunder");
        break;

      case "11n":
        setImgSrc("thunder");
        break;

      case "13d":
        setImgSrc("snowy-3");
        break;

      case "13d":
        setImgSrc("snowy-6");
        break;

      case "50d":
        setImgSrc("cloudy");
        break;

      case "50n":
        setImgSrc("cloudy");
        break;
    }
  };

  return (
    <div className="location">
      <h1 className="timezone">{location}</h1>
      <img className="icon" src={`./img/animated/${imgSrc}.svg`}  alt=""/>
    </div>
  );
};

export default Timezone;
