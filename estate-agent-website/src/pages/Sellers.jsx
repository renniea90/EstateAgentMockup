import Data from '../data/Data.json'
import AllSellers from '../components/AllSellers'
import RegisterSeller from '../components/RegisterSeller'
import '../CSS/SellersPage.css'

export default function SellersPage() {
  return (
    <div className="sellers flex row-reverse space-between">
      <div className="half-white-container-left">
        <div className="customer-grid">
          <AllSellers />
        </div>
      </div>
      <div>
        <div className="half-white-container-right">
          <div className="color-background">
            <h1 className="title">Have a home you're looking to sell?</h1>
            <h2 className="blurb">Our team of experts are on hand to help get your sales listing just right. Register below to start!</h2>
            <h5 className="small-print">Please note - you cannot list your property for sale until you've registered as a Seller.</h5>
          </div>
        </div>
        <div className="half-white-container-right">
          <RegisterSeller />
        </div>
      </div>
      
    </div>










    // <div>
    //     <div className="customer-grid">
    //       <AllSellers />
    //     </div>
    //     <RegisterSeller/>
    // </div>
  )
}