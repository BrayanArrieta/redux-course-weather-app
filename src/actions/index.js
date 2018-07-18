import transformForecast from "../services/transformForecast";
import transformWeather from "../services/transformWeather";

const apiKey = "735eb9e5c8121fa30f4fdcf2cce88101";
const apiOpenWeatherMapForecast = 'http://api.openweathermap.org/data/2.5/forecast';
const apiOpenWeatherMap = 'http://api.openweathermap.org/data/2.5/weather';
//actions creators redux, the payload its similar to the value
export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = (payload) => ({type: SET_CITY, payload: payload});
const setForecastData = (payload) => ({type: SET_FORECAST_DATA, payload: payload})
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload });

/*
Select the city and request the information from the API
*/
export const setSelectedCity = (payload) => {
    return (dispatch, getState) => {
        const url = `${apiOpenWeatherMapForecast}?q=${payload}&appid=${apiKey}`;
        dispatch(setCity(payload));
        
        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        const now = new Date();

        if (date && (now - date) < 1 * 60 * 1000) {
            return; 
        }
        
        return fetch(url)
            .then(data => (data.json()))
            .then(weatherData => {
                const forecastData = transformForecast(weatherData);
                //modify the state
                dispatch(setForecastData({city: payload, forecastData}));
            });
    }
}

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));

            const url = `${apiOpenWeatherMap}?q=${city}&appid=${apiKey}`;
            fetch(url).then((data) => {
                return data.json();
            }).then((weatherData) => {
                //store the information in a specific format
                const data = transformWeather(weatherData);

                dispatch(setWeatherCity({city, weather: data}));
            }).catch((params) => {})
        });
    }

};