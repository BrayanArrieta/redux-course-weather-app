import React from 'react';

const Location = (props) => {
    // const city = props.city;
    /* destructuring
    allow connect the vars with the same name for the origin and destiny
     */
    const {city} = props;
    return (
        <div>
            <h1>{city}</h1>
        </div>
    )
};
export default Location;