import convert from 'convert-units';
const getTemperature = (kelvin) => {
    //convert the string to number format
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
}

const getWeatherState = (weather) => {
    return "sun";
}

const transformWeather = (weatherData) => {
    const {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(this.weather);
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
