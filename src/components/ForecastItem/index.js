import React, {Component} from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';

class ForecastItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weekDay: this.props.weekDay,
            hour: this.props.hour,
            data:this.props.data
        }
    }
    render() {
        const {weekDay, hour,data} = this.state;
        return (
            <div>
                <div>
                    {weekDay} Time: {hour}
                </div>
                <WeatherData data={data}/>
            </div>

        );
    }
}
ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired, 
        weatherState: PropTypes.string.isRequired, 
        humidity: PropTypes.number.isRequired, 
        wind: PropTypes.string.isRequired
    })
};
export default ForecastItem;