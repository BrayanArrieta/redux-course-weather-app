import transformForecast from "../services/transformForecast";

const apiKey = "735eb9e5c8121fa30f4fdcf2cce88101";
const apiOpenWeatherMapForecast = 'http://api.openweathermap.org/data/2.5/forecast';
//actions creators redux, the payload its similar to the value
export const SET_CITY = 'SET_CITY'
const setCity = (payload) => ({type: SET_CITY, payload: payload});

export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setForecastData = (payload) => ({type: SET_FORECAST_DATA, payload: payload})

/*
Select the city and request the information from the API
*/
export const setSelectedCity = (payload) => {
    return dispatch => {
        const url = `${apiOpenWeatherMapForecast}?q=${payload}&appid=${apiKey}`;
        dispatch(setCity(payload));

        return fetch(url)
            .then(data => (data.json()))
            .then(weatherData => {
                const forecastData = transformForecast(weatherData);
                //modify the state
                dispatch(setForecastData({city: payload, forecastData}));
            });
    }
}