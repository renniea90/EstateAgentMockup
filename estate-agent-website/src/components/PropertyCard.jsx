import { FaBed, FaBath, FaPoundSign } from "react-icons/fa";
import castle from '../images/castle.jpeg'
import { useState } from "react";
import fetchData from "./DisplayProperty";
import '../CSS/PropertyDisplay.css'


// state is an object just holds the data related to a component - holds information that controls behaviour. Props cannot be changed. State is not passed TO a component, it sits inside a component


export default function PropertyCard({ id, ImageUrl, address, price, bedrooms, bathrooms, garden, salestatus, fetchData }) {

  const changeStatus = (SaleStatus) => {
    fetch('http://localhost:8000/Properties/'+id, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({SaleStatus}),
    })
      .then(fetchData)
  }
    

  return (

    // const isgarden = {garden} 
    <div className="item-card">

      {/* <img src={castle} width={400} height={250}/> */}
      {/* <img src={require(`${imageUrl}`)} width={400} height={250} />  */}
      <img src={ImageUrl} width={400} height={250} />
      <button className="btn">{salestatus}</button>

      {/* <button className="btn">{garden} </button>  */}


      <p className="p-one" ><span></span>{address}</p>
      <p className="p-two" ><span>< FaPoundSign /> </span>{price}</p>
      <p ClassName="p-three"><span>	<FaBed /> </span> {bedrooms} </p>
      <p ClassName="p-four"><span> 	<FaBath /> </span> {bathrooms}</p>
      <button onClick={() => changeStatus("WITHDRAWN")}>Withdraw Property</button> 
      {/* only show the relevant button, so the IF statement would be appear - ternary op */}
      <button onClick={() => changeStatus("FORSALE")}>Resubmit Property</button>
      {/* <p ClassName="p-five"><span> Garden </span> {garden}</p>
                  <p ClassName="p-six"><span> </span> {salestatus}</p> */}


    </div>

  )
}
