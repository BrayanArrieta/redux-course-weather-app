import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';
class LocationList extends Component {
    constructor({cities, onSelectedLocation}) {
        super();
        this.state = {
            cities: cities,
            onSelectedLocation: onSelectedLocation
        }
    }
    handleWeatherLocationClick = (city) => {
        this
            .state
            .onSelectedLocation(city);
    }

    strToComponent = cities => (cities.map((city) => (<WeatherLocation
        key={city}
        city={city}
        onWeatherLocationClick={() => {
        this.handleWeatherLocationClick(city);
    }}/>)));
    render() {
        return (
            <div className='locationList'>
                {this.strToComponent(this.state.cities)}
            </div>
        );
    }
}
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired
};
export default LocationList;