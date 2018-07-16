import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.css';
class ForecastExtended extends Component {

    constructor() {
        super();
    }
    render() {
        const {city} = this.props;
        return (
            <div>
                <h2 className='forecastTitle'>
                    Extended Forecast Climate for {city}
                </h2>

            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};
export default ForecastExtended;