import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';
class LocationList extends Component {
    handleWeatherLocationClick = (city) => {
        this
            .props
            .onSelectedLocation(city);
    }

    strToComponent = cities => (
        cities.map((city) => (<WeatherLocation
        key={city.key}
        city={city.name}
        onWeatherLocationClick={() => this.handleWeatherLocationClick(city.name)}
        data={city.data}/>)));
    render() {
        const {cities} = this.props;
        return (
            <div className='locationList'>
                {this.strToComponent(cities)}
            </div>
        );
    }
}
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired
};
export default LocationList;