import Data from '../data/Data.json'
import AllBuyers from '../components/AllBuyers'

import AddBookings from '../components/AddBooking'
import AllBookings from '../components/AllBookings'

export default function BookingsPage() {
    return (
        <div>
            bookings page
            <div className="customer-grid">
              <AddBookings />
              <AllBookings/>
         
                </div>
        </div>
    )
}