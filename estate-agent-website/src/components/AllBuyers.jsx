


import { useEffect, useState } from "react";

function AllBuyers() {

    let [buyer, setBuyer] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/Buyers")
        .then((response) => response.json())
        .then((data) => setBuyer(data));
    }, 
    []
    );
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th className="th-border">First Name</th>
                        <th>Surname</th>
                    </tr>
                </thead>
                <tbody>
                    {buyer.map(buyer => (
                    <tr className="hover" key={buyer.id}>
                        <td>{buyer.id}</td>
                        <td className="td-border">{buyer.FirstName}</td>
                        <td>{buyer.SurName}</td>
                    </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AllBuyers;