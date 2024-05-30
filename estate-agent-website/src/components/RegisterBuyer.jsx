import { useState, useEffect } from "react";
// import WiteToJSON from "./WriteToJSON";
import '../Register.css';

const RegisterBuyer = () => {

// Add state for each of the Buyer fields
const [First_Name, setFirstName] = useState('')
const [SurName, setSurName] = useState('')
const [ExistingBuyer,setExistingBuyer] = useState(false)

function DoRegister(e) {
    e.preventDefault();
    const newBuyer = { First_Name, SurName }
    fetch('http://localhost:8000/Buyers',
    {
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(newBuyer)
        }
    )
    alert("New Buyer added!")
    setFirstName('')
    setSurName('')

}

    return(
        <form onSubmit={DoRegister}>
        <div>
            <h1 className="App-heade">Register a new Buyer here</h1>
            <div className="flex-container">
                <div>
                    First Name: <input type="text" value={setFirstName}  name="FirstName" onChange={(e)=> setFirstName(e.target.value)}/>
                </div>
                <br /><br /><br />
                <div>
                    Surname: <input type="text" name="SurName" value={setSurName} onChange={(e)=> setSurName(e.target.value)}/>
                </div>
            </div>
            <br /><br /><br />
            <button>Add Buyer</button>
        </div>
        </form>
    );
}

export default RegisterBuyer;
