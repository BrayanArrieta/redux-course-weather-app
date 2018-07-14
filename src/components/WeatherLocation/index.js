import React, {Component} from 'react'
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';

const data = {
    temperature: 21,
    weatherState: "cloud",
    humidity: 80,
    wind: "10m/s"
}

class WeatherLocation extends Component {
    render() {
        return (
            <div className='weatherLocationCont'>
                <Location city={"Buenos Aires"}/>
                <WeatherData data={data}/>
            </div>
        )
    }
}

export default WeatherLocation;