import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import CircularProgress from '@material-ui/core/CircularProgress';
// const days = [     'Monday',     'Tuesday',     'Wednesday',     'Thursday',
// 'Friday',     'Saturday',     'Sunday' ] const data = {     temperature: 21,
// weatherState: "cloud",     humidity: 80,     wind: "10m/s" }

class ForecastExtended extends Component {

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
        const {city, forecastData} = this.props;
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
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
};
export default ForecastExtended;