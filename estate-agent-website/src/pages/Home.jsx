import AddProperty from "../components/AddProperty"
import '../CSS/Home.css'
import { useState, useContext } from "react"
import DisplayProperty from "../components/DisplayProperty"
import FindProperty from "../components/FindProperty"
import { PropContext, PropProvider } from "../context/prop-context"

export default function HomePage() {

const [filter, setFilter] = useState({})

// Load values from context

    return (
        <PropProvider>
          <div className="page-content">
            <div className="white-container">
              <FindProperty />
             </div>
            <div className="white-container">
              <DisplayProperty filterResults="false" />
            </div>
            <div className="white-container">
              <AddProperty />
            </div>
          </div>
        </PropProvider>
        )
}