import React, { memo, useEffect, useState } from "react";
// import { getCity } from "../api/getCity";
import { getWeather } from "../api/getWeather";
import './WeatherView.css';
import WeatherInfo from "./component/WeatherInfo";
import WeatherImage from "./component/WeatherImage";

// image
import locImage from '../../img/location.png';
import _01d from '../../img/icon/01d.gif';
import _02d from '../../img/icon/02d.gif';
import _03d from '../../img/icon/03d.gif';
import _09d from '../../img/icon/09d.gif';
import _10d from '../../img/icon/10d.gif';
import _11d from '../../img/icon/11d.gif';
import _13d from '../../img/icon/13d.gif';
import _50d from '../../img/icon/50d.png';
import axios from "axios";
// image

const WeatherView = memo((props) => {
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [cloud, setCloud] = useState('');
    const [temperature, setTemperature] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [imageWeather, setImageWeather] = useState();
    const [country, setCountry] = useState('');
    const [nextDaysWeather, setNextDaysWeather] = useState([]);

    useEffect(() => {
        if (props.city !== null) {
            setCity(props.city);
        }

        if (props.latitude !== undefined && props.longitude !== undefined) {
            if ((humidity || wind || cloud || temperature) === '') {
                getWeather(props.latitude, props.longitude)
                    .then(data => {
                        setHumidity(data.data.list[0].main.humidity);
                        setWind(data.data.list[0].wind.speed);
                        setCloud(data.data.list[0].clouds.all);
                        setTemperature(Math.floor(data.data.list[0].main.temp - 273.15));
                        setDescription(data.data.list[0].weather[0].description);
                        setImageWeather(data.data.list[0].weather[0].icon);
                        setCountry(data.data.city.country);
                        setCity(data.data.city.name)
                        setNextDaysWeather([data.data.list[0], data.data.list[7], data.data.list[15], data.data.list[23]]);
                    })
            }
        } else if (city !== '') {
            const apiKey = 'e7b7486aa655f5669afe76376c83a8f3';
            const cityApi = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&appid=' + apiKey;
            axios.get(cityApi)
                .then(response => {
                    const lat = response.data[0].lat;
                    const lon = response.data[0].lon;
                    getWeather(lat, lon)
                        .then(data => {
                            setHumidity(data.data.list[0].main.humidity);
                            setWind(data.data.list[0].wind.speed);
                            setCloud(data.data.list[0].clouds.all);
                            setTemperature(Math.floor(data.data.list[0].main.temp - 273.15));
                            setDescription(data.data.list[0].weather[0].description);
                            setImageWeather(data.data.list[0].weather[0].icon);
                            setCountry(data.data.city.country);
                            setNextDaysWeather([data.data.list[0], data.data.list[7], data.data.list[15], data.data.list[23]]);
                        })
                });
        }
    }, [city, props.latitude, props.longitude])

    if (imageWeather === '01d') {
        setImageWeather(_01d);
    } else if (imageWeather === '02d') {
        setImageWeather(_02d);
    } else if (imageWeather === '03d') {
        setImageWeather(_03d);
    } else if (imageWeather === '04d') {
        setImageWeather(_03d);
    } else if (imageWeather === '09d') {
        setImageWeather(_09d);
    } else if (imageWeather === '10d') {
        setImageWeather(_10d);
    } else if (imageWeather === '11d') {
        setImageWeather(_11d);
    } else if (imageWeather === '13d') {
        setImageWeather(_13d);
    } else if (imageWeather === '50d') {
        setImageWeather(_50d);
    } else if (imageWeather === '01n') {
        setImageWeather(_01d);
    } else if (imageWeather === '02n') {
        setImageWeather(_02d);
    } else if (imageWeather === '03n') {
        setImageWeather(_03d);
    } else if (imageWeather === '04n') {
        setImageWeather(_03d);
    } else if (imageWeather === '09n') {
        setImageWeather(_09d);
    } else if (imageWeather === '10n') {
        setImageWeather(_10d);
    } else if (imageWeather === '11n') {
        setImageWeather(_11d);
    } else if (imageWeather === '13n') {
        setImageWeather(_13d);
    } else if (imageWeather === '50n') {
        setImageWeather(_50d);
    }

    return (
        <div className="weather-view__body">
            <div className="weather-content">
                <WeatherImage
                    dayNow={props.dayNow}
                    nowFullDate={props.nowFullDate}
                    city={city}
                    locImage={locImage}
                    imageWeather={imageWeather}
                    temperature={temperature}
                    description={description}
                    country={country}
                />
                <WeatherInfo
                    cloud={cloud}
                    wind={wind}
                    city={city}
                    country={country}
                    humidity={humidity}
                    locImage={locImage}
                    temperature={temperature}
                    dayAbbrevNow={props.dayAbbrevNow}
                    imageWeather={imageWeather}
                    weatherFourDay={nextDaysWeather}
                />
            </div>
        </div>
    )
})

export default WeatherView;