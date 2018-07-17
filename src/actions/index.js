import transformForecast from "../services/transformForecast";

const apiKey = "735eb9e5c8121fa30f4fdcf2cce88101";
const apiOpenWeatherMapForecast = 'http://api.openweathermap.org/data/2.5/forecast';
//actions creators redux
export const SET_CITY = 'SET_CITY'
//the payload its similar to the value
export const setCity = (payload) => ({type: SET_CITY, payload: payload});

export const fetchForecast = (payload) => {
    return dispatch => {

        const url = `${apiOpenWeatherMapForecast}?q=${city}&appid=${apiKey}`;
        fetch(url)
            .then(data => (data.json()))
            .then(forecastData => {
                const data = transformForecast(forecastData);
                //modify the state
            });
        return;
    }
}