import React, {Component} from 'react'
import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from './../../services/transformWeather';
import './styles.css';
const location = "Buenos Aires,ar";
const apiKey = "735eb9e5c8121fa30f4fdcf2cce88101";
const urlOpenWeatherMap = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

const data = {
    temperature: 21,
    weatherState: "cloud",
    humidity: 80,
    wind: "10m/s"
}
class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: data
        }
    }
    handleUpdateClick = () => {
        fetch(urlOpenWeatherMap).then((data) => {
            //convert data to json format
            return data.json();
        }).then((weatherData) => {
            //store the information in a specific format
            const data = transformWeather(weatherData);
            //change the value to state constants
            this.setState({data: data})
        }).catch((params) => {})
    }
    render() {
        return (
            <div className='weatherLocationCont'>
                <Location city={this.state.city}/>
                <WeatherData data={this.state.data}/>
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        )
    }
}
export default WeatherLocation;