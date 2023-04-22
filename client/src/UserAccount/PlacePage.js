import React ,{useEffect}from "react";
import { Link} from "react-router-dom";
import "./PlacePage.css";
import axios from 'axios';
import { useParams } from "react-router-dom";
import PlacesForm from "./PlacesForm";


function PlacePage() {
  const { action } = useParams();

  // TO DISPLAY THE PLACES
useEffect(()=>{
  // const fetchdata = async () =>{
  //   const data = await axios.get("/places");
  //   console.log(data);
  // }
  // fetchdata();

  axios.get('http://localhost:7000/account/places').then(response => {
         // response.data is your 'course2'
         console.log(response.data)
    }).catch(err => {
         console.log(err);
    });
},[]) ; 
// this emty array states that whenever we refresh the page the function will be called

  return (
    <div>
      {action !== "addplaces" && (
        <div>
         <div className="add-place">
           <Link className="addicon" to={"/account/places/addplaces"}>
             Add Places
           </Link>
         </div>

         {/* <div>
           {place.length>0 && place.map(place =>(
            <div>
              {place.title};
              </div>
           ))}
         </div> */}

        </div>
      )}

      {action === "addplaces" && (

        <PlacesForm/>   
      )}

    </div>
  );
}

export default PlacePage;
