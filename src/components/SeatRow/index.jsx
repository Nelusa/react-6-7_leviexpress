import Seat from "../Seat/index.jsx";

const SeatRow = ({ row, rowSelectedSeat, onSeatSelected }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => (
        <Seat key={seat.number} number={seat.number} isOccupied={seat.isOccupied} isSelected={rowSelectedSeat === seat.number} onSelect={onSeatSelected} />
      ))}
    </div>
  );
}

export default SeatRow;