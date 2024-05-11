import React, { useEffect, useState } from 'react';
import './style.css';
import CityOptions from "../CityOptions/index.jsx";
import DatesOptions from "../DatesOptions/index.jsx";

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities');
      const data = await response.json();
      const apiCities = data.results;

      setCities(apiCities);
    }

    const fetchDates = async () => {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates');
      const data = await response.json();
      const apiDates = data.results;

      setDates(apiDates);
    }

    fetchCities();
    fetchDates();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const fetchJourney = async () => {
      const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`);
      const data = await response.json();
      const apiJourney = data.results;
      onJourneyChange(apiJourney);
    }

    fetchJourney();
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
                <DatesOptions dates={dates} />
              </select>
            </label>
            <div className="journey-picker__controls">
              <button
                  className="btn"
                  type="submit"
                  disabled={!fromCity || !toCity || !date}
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
