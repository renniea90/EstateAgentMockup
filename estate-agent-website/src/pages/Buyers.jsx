import Data from '../data/Data.json'
import AllBuyers from '../components/AllBuyers'
import RegisterBuyer from '../components/RegisterBuyer'

export default function BuyersPage() {
    return (
        <div>
            BUYERS PAGE
            <div className="customer-grid">
              <AllBuyers />
              {/* {Data.Buyers.map((item) => (
                <AllBuyers
                ID={item.id}
                FirstName={item.FirstName}
                SurName={item.SurName}
                />
              ))} */}
            </div>
            <RegisterBuyer />
        </div>
    )
}