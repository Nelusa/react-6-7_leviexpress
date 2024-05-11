import { JourneyPicker } from '../../components/JourneyPicker';
import {useState} from "react";
import JourneyDetail from "../../components/JourneyDetail/index.jsx";
import SelectedSeat from "../../components/SelectedSeat/index.jsx";

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyObject) => {
    setJourney(journeyObject);
  }

  console.log(journey)

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {/*{journey && <p>Nalezeno spojení s id {journey.journeyId}</p>}*/}
      {journey && <JourneyDetail journey={journey} />}
      {journey && <SelectedSeat number={journey.autoSeat} />}
    </main>
  );
};
