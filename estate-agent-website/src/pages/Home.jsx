// import AddProperty from "../components/AddProperty";
import "../CSS/HomePage.css";
import { useState, useContext, useEffect } from "react";
import DisplayProperty from "../components/DisplayProperty";
import FindProperty from "../components/FindProperty";
import { PropContext, PropProvider } from "../context/prop-context";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Data from "../data/Data.json";

export default function HomePage() {
  const [filter, setFilter] = useState({});
  const [showAdd, setShowAdd] = useState(false);

  const [ImageUrl, setImageUrl] = useState("");
  const [Address, setAddress] = useState("");
  const [Price, setPrice] = useState(0);
  const [Bedrooms, setBedrooms] = useState(1);
  const [Bathrooms, setBathrooms] = useState(1);
  const [Garden, setGarden] = useState("No");
  const [SaleStatus, setSaleStatus] = useState("FORSALE");
  const [Seller, setSeller] = useState("")

  //moved from display propertys as need for multiple data fetches
  //fetches data from properties object in JSON file then feed into "AddProperty" so that it can refresh the data after a propoerty is added
  // and passes the api state through to "DisplayProperty" to include apidata for all, fetch data for status change and filter results for filtering
  let [apiData, setData] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:8000/Properties")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  // Load values from context


  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const handleSubmit = (e) => {
    // tells the event if the event doesnt get handled dont use the default action as I want to do something else
    e.preventDefault();
    // If seller exists then post to JSON
    if (Seller != "") {
      const task = {
        ImageUrl,
        Address,
        Price,
        Bedrooms,
        Bathrooms,
        Garden,
        SaleStatus,
      };

      fetch(
        "http://localhost:8000/Properties",
        {
          method: "POST",
          // for most api json call
          headers: { "Content-Type": "application/json" },
          // changing into json data
          body: JSON.stringify(task),
        }
      ).then(
        () => {
          alert("New Property Added");
          // reset text boxes
          setImageUrl("");
          setAddress("");
          setPrice(0);
          setBedrooms(0);
          setBathrooms(0);
          setGarden("");
          setSeller("");
          fetchData()
          handleCloseAdd()
        }
      );
      //otherwise ask seller to register
    } else {
      alert("Seller doesnt exist, please register in the seller page");
    }
  };

  return (
    <PropProvider>
      <div className="page-content">
        <div className="white-container">
          <FindProperty />
        </div>
        <div className="white-container">
          <DisplayProperty apiData={apiData} fetchData={fetchData} filterResults="false" />
        </div>
        <div className=" flex space-around white-container">
          <div className="filter-container add-banner">
            <h2>Have a property you want to sell?</h2>
            <h4>Click here to add your property details! </h4>
          </div>
          <button variant="primary" className="amend-submit-btn" onClick={handleShowAdd}>Add</button>
        </div>
        <Modal show={showAdd} onHide={handleCloseAdd} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>ADD PROPERTY</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div class="new-property-container">
                <div class="existing-seller-title">
                  <label>Existing Sellers : </label>
                </div>
                <div class="new-address-title">
                  <label htmlFor="fname"> Address :</label>
                </div>
                <div class="new-price-title">
                  <label><span>Price :</span>{" "}</label>
                </div>
                <div class="new-bedrooms-title">
                  <label>Bedrooms : </label>
                </div>
                <div class="new-bathrooms-title">
                  <label>Bathrooms : </label>
                </div>
                <div class="new-garden-title">
                  <label>Garden : </label>
                </div>
                <div class="new-ImagUrl-title">
                  <label>Image URL : </label>
                </div>
                <div class="existing-seller-input">
                  <select name="Sellers" onChange={(e) => setSeller(e.target.value)} value={Seller}>
                    <option value=""></option>
                    {Data.Sellers.map((item) => (
                      <option value={item.ID}>{item.FirstName + " " + item.SurName}</option>
                    )
                    )}
                  </select>
                </div>
                <div class="new-address-input">
                  <input id="fname" type="text" required value={Address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div class="new-price-input">
                  <input type="Number" required value={Price} min={0} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div class="new-bedrooms-input">
                  <input type="number" required value={Bedrooms} min={0} onChange={(e) => setBedrooms(e.target.value)} />
                </div>
                <div class="new-bathrooms-input">
                  <input type="number" required value={Bathrooms} min={0} onChange={(e) => setBathrooms(e.target.value)} />
                </div>
                <div class="new-garden-input">
                  <select value={Garden} onChange={(e) => setGarden(e.target.value)}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div class="new-image-input">
                  <input type="text" required value={ImageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </div>
              </div>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" className="filter-btn" onClick={handleCloseAdd}>Cancel</button>
            <button variant="primary" className="amend-submit-btn" type="submit" onClick={handleSubmit}>Add Property</button>
          </Modal.Footer>
        </Modal>
      </div>
    </PropProvider>

  );
}