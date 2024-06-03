import { useState, useContext } from "react"
import DisplayProperty from "../components/DisplayProperty"
import FindProperty from "../components/FindProperty"
import { PropContext, PropProvider } from "../context/prop-context"

export default function HomePage() {

const [filter, setFilter] = useState({})

// Load values from context


    return (
        <div>
            HOME PAGE
            <PropProvider>
            
            <FindProperty />
            {/* <DisplayProperty filterResults={gotFilter} minPrice={priceMin} maxPrice={priceMax} minBeds={bedRoomsMin} maxBeds={bedRoomsMax} minBaths={bathRoomsMin} maxBaths={bathRoomsMax} hasGarden={garden} /> */}
            <DisplayProperty filterResults="false" />
            {/* <FindProperty setFilter={setFilter}/>
            <DisplayProperty filter={filter}/> */}
            </PropProvider>
        </div>
    )
}