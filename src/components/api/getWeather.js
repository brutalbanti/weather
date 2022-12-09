import axios from 'axios';

export const getWeather = (latitude, longitude) => {
    const apiKey = 'e7b7486aa655f5669afe76376c83a8f3';
    const apiWeather = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=ua`;

    if ((latitude && longitude) !== undefined) {
        return axios.get(apiWeather)
            .then(response => response);
    }
    axios.delete(apiWeather);
}