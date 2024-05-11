import "./style.css";
import BusStop from "../BusStop/index.jsx";

const JourneyDetail = ({ journey }) => {
  const { stops } = journey || {};

  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {stops.map((stop) => (
          <BusStop key={stop.code} {...stop} />
        ))}
      </div>
    </div>
  )
}

export default JourneyDetail;