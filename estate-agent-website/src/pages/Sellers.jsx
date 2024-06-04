import Data from '../data/Data.json'
import AllSellers from '../components/AllSellers'
import RegisterSeller from '../components/RegisterSeller'

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
            <RegisterSeller/>
        </div>
    )
}