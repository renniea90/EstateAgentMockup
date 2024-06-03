import AddProperty from "../components/AddProperty"
import DisplayProperty from "../components/DisplayProperty"
import '../CSS/Home.css'

export default function HomePage() {
    return (

        <div className="grid-container">
            <div >
                <h1>Properties </h1>
                <br></br>
                <DisplayProperty />
            </div>

             <div className="AddPropertyDiv">
             <h1>Add Property </h1>
                <AddProperty />
            </div>
        </div>
        )
}