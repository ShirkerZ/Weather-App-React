import React from 'react';

const Temperature = ({temperature, weather}) => {
    return (
        <div className="temperature">
            <div className="degree-section">
                <div className="degree-container">
                    <h2 className="degree">{Math.floor(temperature.temp)}</h2>
                    <span>C</span>
                </div>
                <div className="minmax">
                    <span className="max">{Math.floor(temperature.temp_max)}</span>
                    <span>/</span>
                    <span className="min">{Math.floor(temperature.temp_min)}</span>
                </div>

            </div>
            <div className="description">{weather.description}</div>
        </div>
    );
}

export default Temperature;