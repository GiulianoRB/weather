import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
    <div>
        <WeatherTemperature></WeatherTemperature>
        <WeatherExtraInfo humidity={'10'} wind={'50 m/s'}></WeatherExtraInfo>
    </div>
);

export default WeatherData;