import { JourneyPicker } from '../../components/JourneyPicker';
import {useState} from "react";

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyObject) => {
    setJourney(journeyObject);
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <p>Nalezeno spojení s id {journey.journeyId}</p>}
    </main>
  );
};
