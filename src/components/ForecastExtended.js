import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]
const data = {
    temperature: 21,
    weatherState: "cloud",
    humidity: 80,
    wind: "10m/s"
}
class ForecastExtended extends Component {

    constructor() {
        super();
    }
    renderForecastItem = () => {
        return days.map(day => (<ForecastItem weekDay={day} hour={20} data={data}/>));
    }

    render() {
        const {city} = this.props;
        return (
            <div>
                <h2 className='forecastTitle'>
                    Extended Forecast Climate for {city}
                </h2>
                {this.renderForecastItem()}
            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};
export default ForecastExtended;