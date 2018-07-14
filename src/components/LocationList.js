import React, {Component} from 'react';
import WeatherLocation from './WeatherLocation';

class LocationList extends Component {
    render() {
        return (
            <div>
                <WeatherLocation city={"Buenos Aires,ar"}/>
                <WeatherLocation city={"Bogotá,col"}/>
                <WeatherLocation city={"San Jose,cr"}/>
            </div>
        );
    }
}

export default LocationList;