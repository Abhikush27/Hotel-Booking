import React,{useState,useEffect} from "react";
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
  axios.get('/places').then(({data})=>{
    setPlace(data);
  })
},[]);

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
           {place.length}
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
