import convert from 'convert-units';
import {
    THUNDER,
    DRIZZLE,
    RAIN,
    SNOW,
    SUN,
    CLOUDY
} from '../constants/weathers';
const getTemperature = (kelvin) => {
    //convert the string to number format
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
}

const getWeatherState = weather => {
    const {id} = weather[0];
    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800) {
        return SUN;
    } else {
        return CLOUDY;
    }
}

const transformWeather = (weatherData) => {
    const { weather } = weatherData;
    const {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weather);
    //Convert the temperature from kelvin o celsius
    const temperature = getTemperature(temp);
    const data = {
        temperature: temperature,
        weatherState: weatherState,
        humidity: humidity,
        wind: `${speed} m/s`
    }
    return data;
}

export default transformWeather;
