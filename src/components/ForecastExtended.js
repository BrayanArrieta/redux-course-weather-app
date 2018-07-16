import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformForecast from '../services/transformForecast';
// const days = [     'Monday',     'Tuesday',     'Wednesday',     'Thursday',
// 'Friday',     'Saturday',     'Sunday' ] const data = {     temperature: 21,
// weatherState: "cloud",     humidity: 80,     wind: "10m/s" }
const apiKey = "735eb9e5c8121fa30f4fdcf2cce88101";
const apiOpenWeatherMapForecast = 'http://api.openweathermap.org/data/2.5/forecast';
class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }
    componentDidMount = () => {
        const url = `${apiOpenWeatherMapForecast}?q=${this.props.city}&appid=${apiKey}`;
        fetch(url)
            .then(data => (data.json()))
            .then(forecastData => {
                const data = transformForecast(forecastData);
                this.setState({forecastData: data});
            });
    }

    renderForecastItem = (forecastData) => {
        return forecastData.map(item => (<ForecastItem
            key={`${item.weekDay}${item.hour}`}
            hour={item.hour}
            data={item.data}
            weekDay={item.weekDay}/>));
    }
    renderProgress = () => {
        return <CircularProgress size={50} color="secondary"/>;
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return (
            <div>
                <h2 className='forecastTitle'>
                    Extended Forecast Climate for {city}
                </h2>
                {forecastData
                    ? this.renderForecastItem(forecastData)
                    : this.renderProgress()}
            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};
export default ForecastExtended;