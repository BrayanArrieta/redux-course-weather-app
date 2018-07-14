import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

class LocationList extends Component {
    constructor({cities}) {
        super();
        this.state = {
            cities: cities
        }
    }
    strToComponent = cities => (cities.map((city) => (<WeatherLocation key={city} city={city}/>)));
    render() {
        return (
            <div>
                {this.strToComponent(this.state.cities)}
            </div>
        );
    }
}
LocationList.propTypes = {
    cities: PropTypes.array.isRequired
};
export default LocationList;