import { FaBed, FaBath, FaPoundSign  } from "react-icons/fa";
import castle from '../images/castle.jpeg'

import '../css/PropertyDisplay.css'

export default function PropertyCard ( { id, ImageUrl, address, price,bedrooms , bathrooms, garden, salestatus}) {

    return (
  
    // const isgarden = {garden} 
        <div className="item-card">
 
              {/* <img src={castle} width={400} height={250}/> */}
              {/* <img src={require(`${imageUrl}`)} width={400} height={250} />  */}
               <img src={ImageUrl} width={400} height={250} />  
                  <button className="btn">{salestatus}</button> 
               
                {/* <button className="btn">{garden} </button>  */}
               
               
                  <p className="p-one" ><span></span>{address}</p>
                  <p className="p-two" ><span>< FaPoundSign /> </span>{price}</p>
                  <p ClassName="p-three"><span>	<FaBed /> </span> {bedrooms} </p>
                  <p ClassName="p-four"><span> 	<FaBath /> </span> {bathrooms}</p>
                  {/* <p ClassName="p-five"><span> Garden </span> {garden}</p>
                  <p ClassName="p-six"><span> </span> {salestatus}</p> */}
  
            
          </div>
     
    )
  }
  