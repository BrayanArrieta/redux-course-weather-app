import React from 'react'
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';
const data = {
    temperature:21,
    weatherState:"cloud",
    humidity:80,
    wind:"10m/s"
}

const WeatherLocation = () => (
    <div className='weatherLocationCont'>
        <Location city={"Buenos Aires"}/>
        <WeatherData data={data}/>
    </div>
);

export default WeatherLocation;