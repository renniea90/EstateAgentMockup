import Data from '../data/Data.json'
import AllBuyers from '../components/AllBuyers'
import RegisterBuyer from '../components/RegisterBuyer'
import '../CSS/BuyersPage.css'

export default function BuyersPage() {
  return (
    <div className="buyers flex space-between">
      <div className="half-white-container-left">
        <div className="customer-grid">
          <AllBuyers />
        </div>
      </div>
      <div>
        <div className="half-white-container-right">
          <div className="color-background">
            <h1 className="title">Looking for your new home?</h1>
            <h2 className="blurb">Register as a buyer below so we can help your dreams come true!</h2>
          </div>
        </div>
        <div className="half-white-container-right">
          <RegisterBuyer />
        </div>
      </div>
    </div>
  )
}