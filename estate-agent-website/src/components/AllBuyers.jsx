


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
    

    return (<table>
        <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    First Name
                </th>
                <th>
                    Surname
                </th>
            </tr>
        </thead>
        <tbody>
            {
                buyer.map(buyer => (<tr key={buyer.id}>
                    <td>{buyer.id}</td>
                    <td>{buyer.FirstName}</td>
                    <td>{buyer.SurName}</td>
                </tr>))
            }
        </tbody>
    </table>);
}

export default AllBuyers;

// function AllSellers({ ID, FirstName, SurName}) { 

//     return ( 

//         <div className="all-sellers"> 
           
           
//                 <p>{ID}</p> 

//                 <p>{FirstName}</p> 

//                 <p>{SurName}</p> 

        
//         </div> 
//     ) 

// } 

// export default AllBuyers