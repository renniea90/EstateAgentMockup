import { useEffect, useState } from "react";

function CancelBooking(id) {


    
    fetch("http://localhost:8000/Bookings/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(), 
    }).then(() => {
        alert("Viewing Cancelled");
       
    });
};

function AllBookings() {

    let [booking, setBooking] = useState([]);

   
  
    useEffect(() => {
      fetch("http://localhost:8000/Bookings" )
        .then((response) => response.json())
        .then((data) => setBooking(data));
    }, 
    []
    );
    
    return (<table>
        <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Buyer
                </th>
                <th>
                   Property Address
                </th>
                <th>
                    Date
                </th>
                <th>
                    Time
                </th>
            </tr>
        </thead>
        <tbody>
            {
                booking.map(booking => (<tr key={booking.id}>
                    <td>{booking.id}</td>
                    <td>{booking.buyer}</td>
                    <td>{booking.property}</td>
                    <td>{booking.date}</td>
                    <td>{booking.time}</td>
                    <td><button onClick={()=> CancelBooking(booking.id)}>Cancel Booking</button></td> 
                </tr>))
            }
        </tbody>
        
        
    </table>);


}

export default AllBookings;