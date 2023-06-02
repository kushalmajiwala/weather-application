import React, { useEffect, useLayoutEffect, useState } from 'react'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import Weathercard from './components/weathercard';
import axios from 'axios';
import './style.css';

function App() {

  const [searchValue, setSearchValue] = useState("surat");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=232738817f4de756f5e8e55677a5d338`;

    axios.get(url)
      .then((res) => {
        const data = res.data;
        console.log(res.data);
        const { temp, humidity, pressure } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;

        const myNewWeatherInfo = {
          temp, humidity, pressure, weathermood, name, speed, country, sunset
        };
        setTempInfo(myNewWeatherInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "rgb(40, 39, 39)";
  });

  useEffect(() => {
    getWeatherInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p style={{ textAlign: 'center', fontSize: '25px', color: 'white' }}>WEATHER APPLICATION</p>
      <div className="search-container">
        <span className="p-input-icon-left">
          <i className="pi pi-search searchIcon" />
          <InputText placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </span>
        <Button label="Search" onClick={getWeatherInfo} />
      </div>
      <Weathercard tempInfo={tempInfo} />
    </>
  );
}
export default App;
