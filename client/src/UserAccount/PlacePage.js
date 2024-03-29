import React ,{useEffect,useState}from "react";
import { Link} from "react-router-dom";
import "./PlacePage.css";
import axios from 'axios';
import { useParams } from "react-router-dom";
import PlacesForm from "./PlacesForm";


function PlacePage() {
  const { action } = useParams();
 const[place,setPlace] = useState([]);

  // TO DISPLAY THE PLACES
useEffect(()=>{
axios.get('/account/user-places').then(({data}) =>{
  console.log(data);
setPlace(data);
})

},[]) ; 

  return (
    <div>
      {action !== "addplaces" && (
        <div>
         <div className="add-place">
           <Link className="addicon" to={"/account/places/addplaces"}>
             Add Places
           </Link>
         </div>

         <div>
          {place.length>0 && place.map(place => (
            <Link key = {place._id} to={'/account/places/'+place._id}>
            
              <div>
                {place.photos.length > 0 && (
                  <img className="image-fetch" src={'http://localhost:7000/'+place.photos} alt="" />
                )}
              </div>
              <h2>{place.title}</h2>
              <p>{place.description}</p>
            </Link>
            
            
          ))}
         </div>

        </div>
      )}

      {action === "addplaces" && (

        <PlacesForm/>   
      )}

    </div>
  );
}

export default PlacePage;