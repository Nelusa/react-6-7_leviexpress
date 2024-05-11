import "./style.css";
import SeatRow from "../SeatRow/index.jsx";

const SeatPicker = ({ seats, selectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((row, index) => (
          <SeatRow key={index} row={row} rowSelectedSeat={selectedSeat} onSeatSelected={onSeatSelected} />
        ))}
      </div>
    </div>
  )
}

export default SeatPicker;