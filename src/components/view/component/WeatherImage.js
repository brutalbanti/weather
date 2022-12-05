import React from "react";
import preloaderImage from '../../../img/preloader-image.gif';

class WeatherImage extends React.Component {
    render() {
        const { dayNow, nowFullDate, city, locImage, imageWeather, temperature, description, country } = this.props;
        return (
            <div className="weather-content__image weather-image">
                <div className="weather-image">
                    <div className="content-weather-image">
                        <div className="weather-image__content-top">
                            <div className="weather-image__day">{dayNow}</div>
                            <div className="weather-image__date">{nowFullDate}</div>
                            {city === null
                                ?
                                <div className="weather-image__location"></div>
                                :
                                <div className="weather-image__location">
                                    <img src={locImage} alt="" />
                                    {country !== '' ?
                                        <span>{city}, {country}</span>
                                        :
                                        <span>{city}</span>
                                    }
                                </div>
                            }
                        </div>
                        <div className="weather-image__content-down">
                            <div className="weather-image__weather-img">
                                <img src={imageWeather === undefined ? preloaderImage : imageWeather} alt="" />
                            </div>
                            {temperature === '' ?
                                <div className="weather-image__degrees" style={{ fontSize: '14px' }}>loaded..</div> :
                                <div className="weather-image__degrees">{temperature}&deg;C</div>}
                            <div className="weather-image__weather-text">{description}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherImage;