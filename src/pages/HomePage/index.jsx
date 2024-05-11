import { JourneyPicker } from '../../components/JourneyPicker';
import {useState} from "react";
import JourneyDetail from "../../components/JourneyDetail/index.jsx";
import SelectedSeat from "../../components/SelectedSeat/index.jsx";
import {useNavigate} from "react-router-dom";

/*Nákup jízdenky se ve funkci handleBuy provede tak, že metodou POST zavoláte API endpoint

https://apps.kodim.cz/daweb/leviexpress/api/reservation
    Tělo požadavku bude obsahovat akci create, vlastnost seat – číslo sedadla vybrané uživatelem, a vlastnost journeyId – hodnota journeyId ze stavu. Příklad:

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    action: 'create',
    seat: journey.autoSeat,
    journeyId: journey.journeyId,
  }),
});
Volání tohoto API vrací JSON s daty, ze kterých nás bude zajímat hodnota reservationId. Vypište si ji do konzole.

    Pomocí funkce navigate a hodnoty reservationId přesměrujte uživatele na stránku detailu rezervace. Takové volání bude může vypadat následovně:

    navigate(`/reservation/${reservationId}`);*/

export const HomePage = () => {
  const navigate = useNavigate();
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyObject) => {
    setJourney(journeyObject);
  }

  const handleBuy = async () => {
    console.log('Koupit lístek');

   const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journey.autoSeat,
        journeyId: journey.journeyId,
      }),
    })

    const data = await response.json();
    const reservationId = data.results.reservationId;

    navigate(`/reservation/${reservationId}`);
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {/*{journey && <p>Nalezeno spojení s id {journey.journeyId}</p>}*/}
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
          </div>
        </>
      )}
    </main>
  );
};
