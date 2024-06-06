import { FaBed, FaBath } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { useState } from "react";

export default function PropertyCard({ setEditAddress, setEditPrice, setEditBedrooms, setEditBathrooms, setEditGarden,setEditImageUrl, setEditSaleStatus, id, ImageUrl, address, price, bedrooms, bathrooms, garden, salestatus, fetchData }) {

  const changeStatus = (SaleStatus) => {
    fetch('http://localhost:8000/Properties/' + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ SaleStatus, bathrooms }),
    })
      .then(fetchData)
  }

  function EditProperty() {
    console.log("Property selected")
    setEditAddress(address)
    setEditPrice(price)
    setEditBedrooms(bedrooms)
    setEditBathrooms(bathrooms)
    setEditGarden(garden)
    setEditImageUrl(ImageUrl)
    setEditSaleStatus(salestatus)
  }

  return (
    <div className={"item-card flex-column " + salestatus}>
      <img src={ImageUrl} className="property-img" alt="" />
      <div className="padded-property-container flex-column">
        <div className="flex space-between">
          <p className="p-one property-data property-address">{address}</p>
          <p className="property-data salestatus">{salestatus}</p>
        </div>
        <p className="p-two property-data property-price">£{price}</p>
        <div>
          <p className="p-three property-data property-beds"><span><FaBed /></span> {bedrooms} </p>
          <p className="p-four property-data property-baths"><span><FaBath /></span> {bathrooms}</p>
          <p className="p-five property-data property-garden"> <span><PiPottedPlantFill /></span> {garden} </p>
        </div>
        <div className="flex space-between">
          <button onClick={() => EditProperty()}>Edit</button>
          <button className="appt-btn INVIS btn-left">Book an Appointment</button>
          <button className="withdraw-btn btn-right" onClick={() => changeStatus("WITHDRAWN")}>Withdraw Property</button>
          {/* only show the relevant button, so the IF statement would be appear - ternary op */}
          <button className="resubmit-btn btn-right" onClick={() => changeStatus("FORSALE")}>Resubmit Property</button>
        </div>
      </div>

    </div>
  )
}