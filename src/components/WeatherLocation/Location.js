import React from 'react';
import PropTypes from 'prop-types'
import './styles.css';
const Location = (props) => {
    // const city = props.city;
    /* destructuring
    allow connect the vars with the same name for the origin and destiny
     */
    const {city} = props;
    return (
        <div className='locationCont'>
            <h1>{city}</h1>
        </div>
    )
};
Location.propTypes = {
    city: PropTypes.string.isRequired
};
export default Location;