import Data from '../data/Data.json'
import AllSellers from '../components/AllSellers'
import RegisterSeller from '../components/RegisterSeller'
import AddBookings from '../components/AddBooking'

export default function SellersPage() {
    return (
        <div>
            SELLERS PAGE
            <div className="customer-grid">
              <AllSellers />
              {/* {Data.Sellers.map((item) => (
                <AllSellers
                ID={item.ID}
                FirstName={item.FirstName}
                SurName={item.SurName}
                /> */}
              {/* ))} */}
            </div>
            <RegisterSeller/>
        </div>
    )
}