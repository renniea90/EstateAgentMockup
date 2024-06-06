import { FaBed, FaBath } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
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
          {/* <UpdateProperty onClick={EditProperty()} id={editID} Address={editAddress} Price={editPrice} Bedrooms={editBedrooms} Bathrooms={editBathrooms} Garden={editGarden} ImageUrl={editImageUrl} SaleStatus={editSaleStatus} handleClose={handleClose} handleShow={handleShow} /> */}
        </div>
      </div>
      <>
        <button onClick={handleShow}>Edit</button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
          <Modal.Header closeButton>
            <Modal.Title>EDIT PROPERTY DATA</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form onSubmit={sendUpdate} id="update-property">
                <div class="form-container">
                  <div class="address-title">
                    <p>Address:</p>
                  </div>
                  <div class="price-title">
                    <p>Price:</p>
                  </div>
                  <div class="bedrooms-title">
                    <p>Bedrooms:</p>
                  </div>
                  <div class="bathrooms-title">
                    <p>Bathrooms:</p>
                  </div>
                  <div class="garden-title">
                    <p>Garden:</p>
                  </div>
                  <div class="imageUrl-title">
                    <p>Image URL:</p>
                  </div>
                  <div class="status-title">
                    <p>Status:</p>
                  </div>
                  <div class="address-input">
                    <input required type="text" defaultValue={editAddress} onChange={(e) => setEditAddress(e.target.value)} />
                  </div>
                  <div class="price-input">
                    <input required type="number" min={0} defaultValue={editPrice} onChange={(e) => setEditPrice(e.target.value)} />
                  </div>
                  <div class="bedrooms-input">
                    <input required type="number" min={0} defaultValue={editBedrooms} onChange={(e) => setEditBedrooms(e.target.value)} />
                  </div>
                  <div class="bathrooms-input">
                    <input required type="number" min={0} defaultValue={editBathrooms} onChange={(e) => setEditBathrooms(e.target.value)} />
                  </div>
                  <div class="garden-input">
                    <select required type="text" defaultValue={editGarden} onChange={(e) => setEditGarden(e.target.value)}>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div class="url-input">
                    <input required type="text" defaultValue={editImageUrl} onChange={(e) => setEditImageUrl(e.target.value)} />
                  </div>
                  <div class="status-input">
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
            <button form="update-property" variant="primary" className="filter-btn" >Amend</button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  )
}