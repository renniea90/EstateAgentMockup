import { FaBed, FaBath } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PropertyCard({ setEdit, setEditAddress, setEditPrice, setEditBedrooms, setEditBathrooms, setEditGarden,setEditImageUrl, setEditSaleStatus, id, ImageUrl, address, price, bedrooms, bathrooms, garden, salestatus, fetchData }) {

  function EditProperty() {
    console.log("Property selected"+id)
    setEditAddress(address)
    setEditPrice(price)
    setEditBedrooms(bedrooms)
    setEditBathrooms(bathrooms)
    setEditGarden(garden)
    setEditImageUrl(ImageUrl)
    setEditSaleStatus(salestatus)
    setEdit(id)
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
          <button className="appt-btn btn-left">
            <Link to='/bookings'>Book an appointment</Link>
          </button>
          
          <button onClick={() => EditProperty()}>Edit</button>
        </div>
      </div>

    </div>
  )
}