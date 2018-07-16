import React, {Component} from 'react';
import PropTypes from 'prop-types';
class ForecastExtended extends Component {

    constructor() {
        super();
    }
    render() {
        const {city} = this.props;
        return (
            <div>
                Extended {city}
            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired
};
export default ForecastExtended;