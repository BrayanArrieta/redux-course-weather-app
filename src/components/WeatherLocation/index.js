import React, {Component} from 'react'
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';

const data1 = {
    temperature: 21,
    weatherState: "cloud",
    humidity: 80,
    wind: "10m/s"
}
const data2 = {
    temperature: 30,
    weatherState: "cloudy",
    humidity: 80,
    wind: "10m/s"
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: "Buenos Aires",
            data: data1
        }
    }
    handleUpdateClick = () => {
        this.setState({
            city: "Buenos Aires",
            data: data2
        });
        console.log("updated");
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