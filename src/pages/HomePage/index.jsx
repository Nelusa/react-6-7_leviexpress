import { JourneyPicker } from '../../components/JourneyPicker';
import {useState} from "react";
import JourneyDetail from "../../components/JourneyDetail/index.jsx";
import SelectedSeat from "../../components/SelectedSeat/index.jsx";
import {useNavigate} from "react-router-dom";
import SeatPicker from "../../components/SeatPicker/index.jsx";

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
          {/*<SelectedSeat number={journey.autoSeat} />*/}
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
          </div>
        </>
      )}
      <SeatPicker />
    </main>
  );
};
