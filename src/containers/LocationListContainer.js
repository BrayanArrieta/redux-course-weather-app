import React, {Component} from 'react';
import LocationList from '../components/LocationList';
import {setCity} from '../actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class LocationListContainer extends Component {
    handleSelectedLocation = (city) => {
        this
            .props
            .dispatchSetCity(city);
    }
    render() {
        const {cities} = this.props;
        return (<LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}/>);
    }
}
LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired
};
// return a object with the action identifier and the action to dispatch In
// addition can receive more functions
const mapDispatchToProps = (dispatch) => ({
    dispatchSetCity: value => dispatch(setCity(value))
});
// for connect react and redux convert the class and connect to the store and
// return a new class with this specifications export the new class connected to
// the store and redux
export default connect(null, mapDispatchToProps)(LocationListContainer);