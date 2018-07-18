import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Location from "./Location";
import WeatherData from "./WeatherData";
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';

class WeatherLocation extends Component {
    render() {
        const {onWeatherLocationClick, city, data} = this.props;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}/> {data
                    ? <WeatherData data={data}/>
                    : <CircularProgress size={50} color="secondary"/>}
            </div>
        )
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
    data: PropTypes.shape({temperature: PropTypes.number.isRequired, weatherState: PropTypes.string.isRequired, humidity: PropTypes.number.isRequired, wind: PropTypes.string.isRequired})
};
export default WeatherLocation;