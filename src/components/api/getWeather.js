import axios from 'axios';
import WeatherView from '../view/WeatherView';

export const getWeather = (latitude, longitude, city) => {
    const apiKey = 'e7b7486aa655f5669afe76376c83a8f3';
    const apiWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=ua`;

    if ((latitude && longitude) !== undefined) {
        return axios.get(apiWeather)
            .then(response => response);
    }

    axios.delete(apiWeather);

}