import axios from 'axios';

const API_KEY = '4081184728ad58b84e355a0422f95bef';

export const FETCH_WEATHER = 'FETCH_WEATHER';

function getWeatherMapEndpoint(city) {
    return `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=${city},ru`;
}

export function fetchWeather(city) {
    const url = getWeatherMapEndpoint(city);
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}
