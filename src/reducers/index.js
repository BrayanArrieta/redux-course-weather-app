import {combineReducers} from 'redux';
import {cities, getForecastDataFromCities as _getForecastDataFromCities} from './cities';
import {city} from './city';
export default combineReducers({cities: cities, city: city});

export const getForecastDataFromCities = (state) => (_getForecastDataFromCities(state.cities, getCity(state)));

export const getCity = (state) => (state.city);
