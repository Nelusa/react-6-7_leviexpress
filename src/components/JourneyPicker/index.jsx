import React, { useEffect, useState } from 'react';
import './style.css';
import CityOptions from "../CityOptions/index.jsx";

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities');
      const data = await response.json();
      const apiCities = data.results;

      setCities(apiCities);
    }

    fetchCities();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Odesílám formulář s cestou');
    console.log(fromCity, toCity, date);
  }


  return (
      <div className="journey-picker container">
        <h2 className="journey-picker__head">Kam chcete jet?</h2>
        <div className="journey-picker__body">
          <form className="journey-picker__form" onSubmit={handleSubmit}>
            <label>
              <div className="journey-picker__label">Odkud:</div>
              <select
                value={fromCity}
                onChange={(event) => setFromCity(event.target.value)}
              >
                <CityOptions cities={cities} />
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Kam:</div>
              <select
                value={toCity}
                onChange={(event) => setToCity(event.target.value)}
              >
                <CityOptions cities={cities} />
              </select>
            </label>
            <label>
              <div className="journey-picker__label">Datum:</div>
              <select
                value={date}
                onChange={(event) => setDate(event.target.value)}
              >
                <option value="">Vyberte</option>
                <option value="datum01">Datum 01</option>
                <option value="datum02">Datum 02</option>
                <option value="datum03">Datum 03</option>
                <option value="datum04">Datum 04</option>
                <option value="datum05">Datum 05</option>
              </select>
            </label>
            <div className="journey-picker__controls">
              <button
                  className="btn"
                  type="submit"
              >
                Vyhledat spoj
              </button>
            </div>
          </form>
          <img className="journey-picker__map" alt="Mapa" src="/map.svg"/>
        </div>
      </div>
  );
}
