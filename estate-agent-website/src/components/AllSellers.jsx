

import { useEffect, useState } from "react";

function AllSellers() {

    let [seller, setSeller] = useState([]);
    useEffect(() => {
      fetch("http://localhost:8000/Sellers")
        .then((response) => response.json())
        .then((data) => setSeller(data));
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
                    {seller.map(seller => (
                    <tr className="hover" key={seller.id}>
                        <td>{seller.id}</td>
                        <td className="td-border">{seller.FirstName}</td>
                        <td>{seller.SurName}</td>
                    </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AllSellers;