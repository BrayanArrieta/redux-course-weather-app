import React, {Component} from 'react';
import ForecastExtended from '../components/ForecastExtended';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props;
        return ((city
            ? <ForecastExtended city={city} forecastData={forecastData}/>
            : null));
    }
}
ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array
};
//get the state with the value that was send as parameter
//receive the state
const mapStateToProps = ({city,cities}) => ({city: city, forecastData: cities[city] && cities[city].forecastData})
// for connect react and redux convert the class and connect to the store and
// return a new class with this specifications export the new class connected to
// the store and redux
export default connect(mapStateToProps, null)(ForecastExtendedContainer);