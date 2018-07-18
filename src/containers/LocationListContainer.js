import React, {Component} from 'react';
import LocationList from '../components/LocationList';
import {setSelectedCity,setWeather} from '../actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class LocationListContainer extends Component {
    componentDidMount() {
        const { dispatchSetWeather, dispatchSetSelectedCity, cities, city } = this.props;
        dispatchSetWeather(cities);
        dispatchSetSelectedCity(city);
    }
    handleSelectedLocation = (city) => {
        this
            .props
            .dispatchSetSelectedCity(city);
    }
    render() {
        const {cities} = this.props;
        return (<LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>);
    }
}
LocationListContainer.propTypes = {
    dispatchSetSelectedCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};
// return a object with the action identifier and the action to dispatch In
// addition can receive more functions
const mapDispatchToProps = (dispatch) => ({
    dispatchSetSelectedCity: value => dispatch(setSelectedCity(value)),
    dispatchSetWeather: cities => dispatch(setWeather(cities)),
});

const mapStateToProps = state => ({
    city: state.city
});
// for connect react and redux convert the class and connect to the store and
// return a new class with this specifications export the new class connected to
// the store and redux
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);