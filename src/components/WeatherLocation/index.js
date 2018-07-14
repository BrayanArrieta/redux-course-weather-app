import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from './../../services/transformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
const apiKey = "735eb9e5c8121fa30f4fdcf2cce88101";
const apiOpenWeatherMap = 'http://api.openweathermap.org/data/2.5/weather';

class WeatherLocation extends Component {
    constructor({city}) {
        super();
        this.state = {
            city: city,
            data: null
        }
    }
    //method that is executed after the constructor and before that the render
    componentWillMount = () => {
        this.handleUpdateClick();

    }
    //method that is executed after the render
    componentDidMount() {}
    //method that called before every case to update the view in the webpage
    componentWillUpdate = () => {}
    //method that called after every case to update the view in the webpage
    componentDidUpdate() {}

    handleUpdateClick = () => {
        const url=`${apiOpenWeatherMap}?q=${this.state.city}&appid=${apiKey}`;
        fetch(url).then((data) => {
            //convert data to json format
            return data.json();
        }).then((weatherData) => {
            //store the information in a specific format
            const data = transformWeather(weatherData);
            //change the value to state constants
            this.setState({data: data})
        }).catch((params) => {})
    }
    render() {
        return (
            <div className='weatherLocationCont'>
                <Location city={this.state.city}/> {this.state.data
                    ? <WeatherData data={this.state.data}/>
                    : <CircularProgress size={50} color="secondary"/>}
                <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        )
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired
};
export default WeatherLocation;