

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
                seller.map(seller => (<tr key={seller.id}>
                    <td>{seller.id}</td>
                    <td>{seller.FirstName}</td>
                    <td>{seller.SurName}</td>
                </tr>))
            }
        </tbody>
    </table>);
}

export default AllSellers;





// function AllSellers({ ID, FirstName, SurName}) { 

//     return ( 

//         <div className="all-sellers"> 

//             <p>{ID}</p> 

//             <p>{FirstName}</p> 

//             <p>{SurName}</p> 

//         </div> 

//     ) 

// } 

// export default AllSellers