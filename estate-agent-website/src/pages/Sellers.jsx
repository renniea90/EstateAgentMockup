import Data from '../data/Data.json'
import AllSellers from '../components/AllSellers'

export default function SellersPage() {
    return (
        <div>
            SELLERS PAGE
            <div className="customer-grid">
              {Data.Sellers.map((item) => (
                <AllSellers
                ID={item.ID}
                FirstName={item.FirstName}
                SurName={item.SurName}
                />
              ))}
            </div>
        </div>
    )
}