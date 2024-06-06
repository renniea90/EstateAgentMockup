import { useEffect, useState } from "react";
import Data from "../data/Data.json";

function CancelBooking(id, { fetchData }) {
  fetch("http://localhost:8000/Bookings/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  }).then(() => {
    alert("Viewing Cancelled");
    fetchData();
  });
}

function AllBookings({ fetchData }) {
  let [booking, setBooking] = useState([]);
  let [property, setProperty] = useState("");

  const dataArray = Object.values(Data.Properties);
  const forsale = dataArray.filter((item) => item.SaleStatus === "FORSALE");

  useEffect(() => {
    fetch("http://localhost:8000/Bookings")
      .then((response) => response.json())
      .then((data) => setBooking(data));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <div className="">
            <p>Properties For Sale: </p>
            <select name="Propertys" onChange={(e) => setProperty(e.target.value)}>
              <option value="">All Bookings</option>
              {forsale.map((item) => (
                <option value={item.Address}>{item.Address}</option>
              ))}
            </select>
          </div>
          <tr>
            {/* <th>ID</th> */}
            <th className="th-border">Buyer</th>
            <th>Property Address</th>
            <th>Date</th>
            <th>Time</th>
            <th>Cancel </th>
          </tr>
        </thead>
        <tbody>
          {booking
            .filter((booking) => !property || booking.property === property)
            .map((booking) => (
              <tr className="hover" key={booking.id}>
                {/* <td>{booking.id}</td> */}
                <td className="td-border">{booking.buyer}</td>
                <td className="td-border">{booking.property}</td>
                <td className="td-border">{booking.date}</td>
                <td className="td-border">{booking.time}</td>
                <td className="td-border">
                  <button onClick={() => CancelBooking(booking.id, { fetchData })}>Cancel Booking</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllBookings;
