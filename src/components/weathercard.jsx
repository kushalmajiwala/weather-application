import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export const Weathercard = ({ tempInfo }) => {

    const [weatherState, setWeatherState] = useState("");
    const {
        temp, humidity, pressure, weathermood, name, speed, country, sunset
    } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds":
                    setWeatherState("bi bi-cloud");
                    break;
                case "Haze":
                    setWeatherState("bi bi-cloud-haze2");
                    break;
                case "Mist":
                    setWeatherState("bi bi-cloud-haze2");
                    break;
                case "Clear":
                    setWeatherState("bi bi-brightness-high");
                    break;
                case "Smoke":
                    setWeatherState("bi bi-cloud-haze");
                    break;
                default:
                    setWeatherState("bi bi-brightness-high");
                    break;
            }
        }
    }, [weathermood]);

    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <>
            <div className="main-container">
                <div className="info-container">
                    <div className='cloud-container'>
                        <i class={weatherState}></i>
                    </div>
                    <div className='temp-container'>
                        <div className='value-container'>
                            <p className="degree">{temp}&deg;</p>
                            <div className='country-container'>
                                <p className='cloud'>{weathermood}</p>
                                <p className='country'>{name}, {country}</p>
                            </div>
                        </div>
                        <div className='date-container'>
                            <p className='date'> {new Date().toLocaleDateString()} </p>
                            <p className='time'> {new Date().toLocaleTimeString(navigator.language, {
                                hour: '2-digit',
                                minute: '2-digit'
                            })} </p>
                        </div>
                    </div>
                    <div className='details-container'>
                        <div className='sunIcon'>
                            <i class="bi bi-sunset commonIcon"></i>
                        </div>
                        <div className='sunInfo commonInfo'>
                            <p>{timeStr} PM</p>
                            <p className='commonText'>Sunset</p>
                        </div>
                        <div className='humidityIcon'>
                            <i class="bi bi-droplet-half commonIcon"></i>
                        </div>
                        <div className='humidityInfo commonInfo'>
                            <p>{humidity}</p>
                            <p className='commonText'>Humidity</p>
                        </div>
                        <div className='pressureIcon'>
                            <i class="bi bi-cloud-rain commonIcon"></i>
                        </div>
                        <div className='pressureInfo commonInfo'>
                            <p>Pressure</p>
                            <p className='commonText'>{pressure} MM</p>
                        </div>
                        <div className='windIcon'>
                            <i class="bi bi-wind commonIcon"></i>
                        </div>
                        <div className='windInfo commonInfo'>
                            <p>Wind-Speed</p>
                            <p className='commonText'>{speed}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Weathercard;
