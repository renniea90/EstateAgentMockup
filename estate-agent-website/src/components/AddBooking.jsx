
import { useState } from "react";


import Data from "../data/Data.json";





export default function AddBooking({fetchData}) {
  // create state

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
 
  let [property, setProperty] = useState("")
  let [buyer, setBuyer] = useState("")


 
//Filter the option list so only holds propertys that are forsale
//can only use the filter function as an array so need to place the json data into an array

const dataArray = Object.values(Data.Properties);

const forsale = dataArray.filter(item => item.SaleStatus === 'FORSALE');


// const dataBookingArray = Object.values(Data.Bookings);

// const existingBooking = dataBookingArray.filter(item => item.date === date);



const existingBooking = Data.Bookings.find((booking) => {
    return (
      booking.date === date &&
      booking.time === time &&
      booking.property === property
    );
  });
  
 

  const handleSubmit = (e) => {
    // tells the event if the event doesnt get handled dont use the default action as I want to do something else
  

  
    e.preventDefault();

  



// If seller exists then post to JSON
if (property === "" || buyer ==="") {
    alert("Please select your name & a property to book a viewing for");
} else {
   
  

  
  

    if (existingBooking){
     
        alert("Please select another time slot as this is booked");
    } else {

    
            const task = {
                date,
                time,
                property,
                buyer
            };



      fetch(
        "http://localhost:8000/Bookings",
        {
          method: "POST",
          // for most api json call
          headers: { "Content-Type": "application/json" },
          // changing into json data
          body: JSON.stringify(task),
        }
      ).then(
        ()=> {

           

          alert("New Viewing Booked");

          // reset text boxes
          setDate();
          setTime("");
          setProperty("");
          setBuyer("");
        }
      );

      //otherwise ask seller to register
  
}
}
  };

  return (


    <form onSubmit={handleSubmit}>
     
     <label>Buyers: </label>
      <select name="Buyers"
        onChange={(e) => setBuyer(e.target.value)}
      >
        <option value=""></option>
        {Data.Buyers.map((item) => (
          <option value={item.ID}>{item.FirstName} {item.SurName} </option>
        ))}
      </select>
      <br /> <br /> <br />

     <label>Properties For Sale: </label>
      <select name="Propertys"
        onChange={(e) => setProperty(e.target.value)}
      >
        <option value=""></option>
     
        {forsale.map((item) => (
           
          <option value={item.ID}>{item.Address}</option>
            
        ))}
      </select>
      <br /> <br /> <br />
      <label htmlFor="fname"> Date :</label>
      <input
        id="fname"
        type="date"
        required
        value={date}
        // event
        onChange={(e) => setDate(e.target.value)}
      />
      <br /> <br /> <br />
      <label>
        <span>Time :</span>{" "}
      </label>
      <select
        value={time}
        // event
        onChange={(e) => setTime(e.target.value)}
      >
        <option value=""></option>
        <option value="8to9">8am to 9am</option>
        <option value="9to10">9am to 10am</option>
        <option value="10to11">10am to 11am</option>
        <option value="11to12">11am to 12pm</option>
        <option value="12to1">12pm to 1pm</option>
        <option value="1to2">1pm to 2pm</option>
        <option value="2to3">2pm to 3pm</option>
        <option value="3to4">3pm to 4pm</option>
        <option value="4to5">4pm to 5pm</option>
      </select>
      <br /> <br /> <br />
     
      <button>Add Booking</button> 
 

    </form>
  );
}
