import React from "react";

const Form = ({ setQuery, setCity, city, setLongitude, setLatitude, getWeatherCurrentLocation }) => {
  const updateSearch = (e) => {
    setCity(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(city);
    setCity("");
  };

  const getLocation = (e) => {
    e.preventDefault();
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
    getWeatherCurrentLocation();
  };

  return (
    <form onSubmit={getQuery}>
      <label htmlFor="query">Insert city name</label>
      <div className="input">
        <div onClick={getLocation} className="btn-location">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <input onChange={updateSearch} type="text" id="city" value={city}/>
        <button type="submit" className="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
