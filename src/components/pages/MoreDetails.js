import axios from "axios";
import React from "react";
import { getWeather } from "../api/getWeather";
import './MoreDetails.css';
import { Link } from "react-router-dom";

import preloaderImage from '../../img/preloader-image.gif';
import locImage from '../../img/location.png';
import _01d from '../../img/icon/01d.gif';
import _02d from '../../img/icon/02d.gif';
import _03d from '../../img/icon/03d.gif';
import _09d from '../../img/icon/09d.gif';
import _10d from '../../img/icon/10d.gif';
import _11d from '../../img/icon/11d.gif';
import _13d from '../../img/icon/13d.gif';
import _50d from '../../img/icon/50d.png';

import preloader from '../../img/Airplane.gif';


const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота"];
const month = ["Січ", "Лют", "Бер", "Квіт", "Трав", "Черв", "Лип", "Серп", "Вер", "Жовт", "Лист", "Груд"];
const now = new Date();
const dayNow = days[now.getDay()];
const monthNow = month[now.getMonth()];
const dayNumNow = now.getDate();
const yearNow = now.getFullYear();
const nowFullDate = `${dayNumNow} ${monthNow} ${yearNow}`;

class MoreDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextHour: [],
            imageOne: null,
            imageTwo: null,
            imageThree: null,
            imageFour: null,
            city: '',
            country: '',
            cloud: '',
            humidity: '',
            wind: '',
            descriptions: ''
        }
    }

    madeMount() {
        const image = this.state.nextHour.map(img => {
            return [img.weather[0].icon]
        })
        const imageOne = [image[0]].toString();
        const imageTwo = [image[1]].toString();
        const imageThree = [image[2]].toString();
        const imageFour = [image[3]].toString();
        if (imageOne === '01d' || imageOne === '01n') {
            this.setState({ imageOne: _01d });
        } else if (imageOne === '02d' || imageOne === '02n') {
            this.setState({ imageOne: _03d });
        } else if (imageOne === '03d' || imageOne === '03n') {
            this.setState({ imageOne: _03d });
        } else if (imageOne === '04d' || imageOne === '04n') {
            this.setState({ imageOne: _03d });
        } else if (imageOne === '09d' || imageOne === '09n') {
            this.setState({ imageOne: _09d });
        } else if (imageOne === '10d' || imageOne === '10n') {
            this.setState({ imageOne: _10d });
        } else if (imageOne === '11d' || imageOne === '11n') {
            this.setState({ imageOne: _11d });
        } else if (imageOne === '13d' || imageOne === '13n') {
            this.setState({ imageOne: _13d });
        } else if (imageOne === '50d' || imageOne === '50n') {
            this.setState({ imageOne: _03d });
        }

        if (imageTwo === '01d' || imageTwo === '01n') {
            this.setState({ imageTwo: _01d });
        } else if (imageTwo === '02d' || imageTwo === '02n') {
            this.setState({ imageTwo: _03d });
        } else if (imageTwo === '03d' || imageTwo === '03n') {
            this.setState({ imageTwo: _03d });
        } else if (imageTwo === '04d' || imageTwo === '04n') {
            this.setState({ imageTwo: _03d });
        } else if (imageTwo === '09d' || imageTwo === '09n') {
            this.setState({ imageTwo: _09d });
        } else if (imageTwo === '10d' || imageTwo === '10n') {
            this.setState({ imageTwo: _10d });
        } else if (imageTwo === '11d' || imageTwo === '11n') {
            this.setState({ imageTwo: _11d });
        } else if (imageTwo === '13d' || imageTwo === '13n') {
            this.setState({ imageTwo: _13d });
        } else if (imageTwo === '50d' || imageTwo === '50n') {
            this.setState({ imageTwo: _03d });
        }

        if (imageThree === '01d' || imageThree === '01n') {
            this.setState({ imageThree: _01d });
        } else if (imageThree === '02d' || imageThree === '02n') {
            this.setState({ imageThree: _03d });
        } else if (imageThree === '03d' || imageThree === '03n') {
            this.setState({ imageThree: _03d });
        } else if (imageThree === '04d' || imageThree === '04n') {
            this.setState({ imageThree: _03d });
        } else if (imageThree === '09d' || imageThree === '09n') {
            this.setState({ imageThree: _09d });
        } else if (imageThree === '10d' || imageThree === '10n') {
            this.setState({ imageThree: _10d });
        } else if (imageThree === '11d' || imageThree === '11n') {
            this.setState({ imageThree: _11d });
        } else if (imageThree === '13d' || imageThree === '13n') {
            this.setState({ imageThree: _13d });
        } else if (imageThree === '50d' || imageThree === '50n') {
            this.setState({ imageThree: _03d });
        }

        if (imageFour === '01d' || imageFour === '01n') {
            this.setState({ imageFour: _01d });
        } else if (imageFour === '02d' || imageFour === '02n') {
            this.setState({ imageFour: _03d });
        } else if (imageFour === '03d' || imageFour === '03n') {
            this.setState({ imageFour: _03d });
        } else if (imageFour === '04d' || imageFour === '04n') {
            this.setState({ imageFour: _03d });
        } else if (imageFour === '09d' || imageFour === '09n') {
            this.setState({ imageFour: _09d });
        } else if (imageFour === '10d' || imageFour === '10n') {
            this.setState({ imageFour: _10d });
        } else if (imageFour === '11d' || imageFour === '11n') {
            this.setState({ imageFour: _11d });
        } else if (imageFour === '13d' || imageFour === '13n') {
            this.setState({ imageFour: _13d });
        } else if (imageFour === '50d' || imageFour === '50n') {
            this.setState({ imageFour: _03d });
        }
    }

    componentDidMount() {
        const city = localStorage.getItem('cityDetail');
        const country = localStorage.getItem('country');

        this.setState({
            city: city,
            country: country
        })
        const apiKey = 'e7b7486aa655f5669afe76376c83a8f3';
        const cityApi = 'https://api.openweathermap.org/geo/1.0/direct?q=' + this.props.cityLocal + '&appid=' + apiKey;

        return axios.get(cityApi)
            .then(response => {
                const lat = response.data[0].lat;
                const lon = response.data[0].lon;
                getWeather(lat, lon)
                    .then(data => {
                        this.setState({
                            nextHour: [data.data.list[0], data.data.list[1], data.data.list[2], data.data.list[3]],
                            cloud: data.data.list[0].clouds.all,
                            humidity: data.data.list[0].main.humidity,
                            wind: data.data.list[0].wind.speed,
                            descriptions: data.data.list[0].weather[0].description
                        })
                    })
            });

    }

    render() {
        if (this.state.imageOne === null) {
            this.madeMount();
        }
        const { nextHour, cloud, humidity, wind, descriptions } = this.state;
        const doneIconWeather = [this.state.imageOne, this.state.imageTwo, this.state.imageThree, this.state.imageFour];
        return (
            <div className="container-details">
                <div className="details__information">
                    <div className="info-left">
                        <div className="weather-image__day">{dayNow}</div>
                        <div className="weather-image__date">{nowFullDate}</div>
                        {this.state.city === ''
                            ?
                            <div className="weather-image__location"></div>
                            :
                            <div className="weather-image__location">
                                <img src={locImage} alt="" />
                                {this.state.country !== '' ?
                                    <span>{this.state.city}, {this.state.country}</span>
                                    :
                                    <span>{this.state.city}</span>
                                }
                            </div>
                        }
                    </div>
                    <div className="info-right">
                        {cloud === '' ?
                            <img src={preloader} alt="" className="preloader" /> :
                            <div className="weather-info__precipitation beetwen gap-72 text-white">ХМАРНІСТЬ <span>{cloud}%</span></div>
                        }
                        {humidity === '' ?
                            <img src={preloader} alt="" className="preloader" /> :
                            <div className="weather-info__humidity beetwen gap-72 text-white">ВОЛОГІСТЬ <span>{humidity}%</span></div>
                        }
                        {wind === '' ?
                            <img src={preloader} alt="" className="preloader" /> :
                            <div className="weather-info__wind beetwen gap-72 text-white">ВІТЕР <span>{wind} м/сек</span></div>
                        }
                        {descriptions === '' ?
                            <img src={preloader} alt="" className="preloader" /> :
                            <div className="weather-info__wind beetwen gap-72 text-white">НАРАЗІ:<span>{descriptions}</span></div>
                        }
                    </div>
                </div>
                <div className="details__weather">
                    {this.state.imageOne === null &&
                        <img src={preloaderImage} alt="" />
                    }
                    {nextHour.map((weather, index) => {
                        return (
                            <div className='weather-info__hours-weather' key={index}>
                                <div className="today-weather__icon"><img src={doneIconWeather[index]} alt="" /></div>
                                <div className="today-weather__day">{new Date(weather.dt_txt).getHours()}:00</div>
                                <div className="today-weather__degrees">{Math.floor(weather.main.temp - 273.15)}&deg;C</div>
                            </div>
                        )
                    })}
                </div>
                <div className="details__back">
                    <Link className="back-btn" to='/'>Повернутись назад</Link>
                </div>
            </div >

        )
    }
}

export default MoreDetails;