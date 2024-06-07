import { FaBed, FaBath } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function PropertyCard({ editID, setEditID, setEdit, id, ImageUrl, address, price, bedrooms, bathrooms, garden, salestatus, fetchData }) {

  const [show, setShow] = useState(false);

  const [editAddress, setEditAddress] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editBedrooms, setEditBedrooms] = useState("");
  const [editBathrooms, setEditBathrooms] = useState("");
  const [editGarden, setEditGarden] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");
  const [editSaleStatus, setEditSaleStatus] = useState("");
  
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true)
    console.log("Property selected" + id)
    setEditAddress(address);
    setEditPrice(price);
    setEditBedrooms(bedrooms);
    setEditBathrooms(bathrooms);
    setEditGarden(garden);
    setEditImageUrl(ImageUrl);
    setEditSaleStatus(salestatus);
    setEdit(id);
  }

  const sendUpdate = (e, Address, Price, Bedrooms, Bathrooms, Garden, ImageUrl, SaleStatus) => {
    e.preventDefault()
    console.log('http://localhost:8000/Properties/' + id)
    fetch('http://localhost:8000/Properties/' + id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Address: editAddress, Price: editPrice, Bedrooms: editBedrooms, Bathrooms: editBathrooms, Garden: editGarden, ImageUrl: editImageUrl, SaleStatus: editSaleStatus }),
    })
        .then(fetchData)
        .then(setEdit(""))
        .then(handleClose())
        .then(alert("Property details amended successfully"))
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
        <div>
          <button className="appt-btn float-left btn-left">
            <Link to='/bookings' className="appt-link">Book an appointment</Link>
          </button>
          <button onClick={handleShow} className="edit-btn float-right">Edit</button>
          {/* <UpdateProperty onClick={EditProperty()} id={editID} Address={editAddress} Price={editPrice} Bedrooms={editBedrooms} Bathrooms={editBathrooms} Garden={editGarden} ImageUrl={editImageUrl} SaleStatus={editSaleStatus} handleClose={handleClose} handleShow={handleShow} /> */}
        </div>
      </div>
      <>
       
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
          <Modal.Header closeButton>
            <Modal.Title>EDIT PROPERTY DATA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form onSubmit={sendUpdate} id="update-property">
                <div className="form-container">
                  <div className="address-title">
                    <p>Address:</p>
                  </div>
                  <div className="price-title">
                    <p>Price:</p>
                  </div>
                  <div className="bedrooms-title">
                    <p>Bedrooms:</p>
                  </div>
                  <div className="bathrooms-title">
                    <p>Bathrooms:</p>
                  </div>
                  <div className="garden-title">
                    <p>Garden:</p>
                  </div>
                  <div className="imageUrl-title">
                    <p>Image URL:</p>
                  </div>
                  <div className="status-title">
                    <p>Status:</p>
                  </div>
                  <div className="address-input">
                    <input required type="text" defaultValue={editAddress} onChange={(e) => setEditAddress(e.target.value)} />
                  </div>
                  <div className="price-input">
                    <input required type="number" min={0} defaultValue={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
                  </div>
                  <div className="bedrooms-input">
                    <input required type="number" min={0} defaultValue={editBedrooms} onChange={(e) => setEditBedrooms(e.target.value)} />
                  </div>
                  <div className="bathrooms-input">
                    <input required type="number" min={0} defaultValue={editBathrooms} onChange={(e) => setEditBathrooms(e.target.value)} />
                  </div>
                  <div className="garden-input">
                    <select required type="text" defaultValue={editGarden} onChange={(e) => setEditGarden(e.target.value)}>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="url-input">
                    <input required type="text" defaultValue={editImageUrl} onChange={(e) => setEditImageUrl(e.target.value)} />
                  </div>
                  <div className="status-input">
                    <select required defaultValue={editSaleStatus} onChange={(e) => setEditSaleStatus(e.target.value)}>
                      <option>FORSALE</option>
                      <option>WITHDRAWN</option>
                      <option>SOLD</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" className="filter-btn" onClick={handleClose}>Cancel</button>
            <button form="update-property" variant="primary" className="amend-submit-btn" >Amend</button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}