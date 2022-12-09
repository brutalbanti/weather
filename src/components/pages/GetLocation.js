import React, { memo, useEffect, useState } from "react";
import WeatherView from "../view/WeatherView";
import '../view/component/popup.css';
import PopUp from "../view/component/PopUp";

const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота"];
const month = ["Січ", "Лют", "Бер", "Квіт", "Трав", "Черв", "Лип", "Серп", "Вер", "Жовт", "Лист", "Груд"];
const now = new Date();
const dayNow = days[now.getDay()];
const monthNow = month[now.getMonth()];
const dayNumNow = now.getDate();
const yearNow = now.getFullYear();
const nowFullDate = `${dayNumNow} ${monthNow} ${yearNow}`;

export const GetLocation = (props) => {
    const [locationLatitude, setLocationLatitude] = useState();
    const [locationLongitude, setLocationLongitude] = useState();
    const [cityValue, setCityValue] = useState('');
    const [submitCity, setSubmitCity] = useState('');
    const [popup, setPopup] = useState(true);
    const [value, setValue] = useState('');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    function showPosition(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocationLatitude(latitude);
        setLocationLongitude(longitude);
        if (latitude !== '' && longitude !== '') {
            if (localStorage.getItem('city')) {
                localStorage.removeItem('cityDetail');
                localStorage.setItem('cityDetail', localStorage.getItem('city'));
                localStorage.removeItem('city');
            }
        }
    }

    const onChange = (e) => {
        setCityValue(e.target.value);
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setSubmitCity(cityValue);
        if (localStorage.getItem('city')) {
            localStorage.removeItem('city');
            localStorage.setItem('city', cityValue);
        } else {
            localStorage.setItem('city', cityValue);
        }
    }
    useEffect(() => {
        if (props.cityLocal !== null) {
            setPopup(false)
        }
    }, [popup])

    return (
        <>
            {(((locationLatitude && locationLongitude) === undefined) && popup === true)
                &&
                <PopUp
                    value={cityValue}
                    onChange={onChange}
                    onSubmit={onSubmit}
                    submitValue={cityValue}
                />
            }
            {props.cityLocal !== null &&
                <WeatherView
                    latitude={locationLatitude}
                    longitude={locationLongitude}
                    dayNow={dayNow}
                    nowFullDate={nowFullDate}
                    city={props.cityLocal}
                />
            }
            {
                (((locationLatitude && locationLongitude) !== undefined)) && props.cityLocal === null &&
                < WeatherView
                    latitude={locationLatitude}
                    longitude={locationLongitude}
                    dayNow={dayNow}
                    nowFullDate={nowFullDate}
                    city={props.cityLocal}
                />
            }
        </>
    )
}