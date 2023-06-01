import React, { useLayoutEffect } from 'react'
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import './style.css';

function App() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = "rgb(40, 39, 39)";
  });

  return (
    <>
      <div className="outer-container">
        <p style={{ textAlign: 'center', fontSize: '25px', color:'white' }}>WEATHER APPLICATION</p>
        <div className="search-container">
          <span className="p-input-icon-left">
            <i className="pi pi-search searchIcon" />
            <InputText placeholder="Search" />
          </span>
          <Button label="Search" />
        </div>
        <div className="main-container">
          <div className="info-container">
            <div className='cloud-container'>
              hello
            </div>
            <div className='temp-container'>
              <div className='value-container'>
                <p>58</p>
                <p>clouds</p>
              </div>
              <div className='date-container'>
                <p>5/5/2023</p>
                <p>3:3:3 PM</p>
              </div>
            </div>
            <div className='details-container'>
              <p>Hello</p>
              <p>hi</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=232738817f4de756f5e8e55677a5d338
export default App;
