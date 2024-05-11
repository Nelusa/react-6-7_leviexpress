import "./style.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const ReservationPage = () => {
  const {id} = useParams()
  const [reservation, setReservation] = useState(null)

  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
      const data = await response.json()
      setReservation(data.results)
    }

    fetchReservation()
  }, [id])

  if (reservation === null) {
    return <div className="reservation container">Loading...</div>
  }

  const {date, fromCity, seatNumber, toCity} = reservation

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {id}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div className="reservation__info">
          <p>{date}</p>
          <p>{fromCity.name}, {fromCity.time}</p>
          <p>{toCity.name}, {toCity.time}</p>
          <p>{seatNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default ReservationPage;