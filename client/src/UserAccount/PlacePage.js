import React from "react";
import { Link} from "react-router-dom";
import "./PlacePage.css";
import { useParams } from "react-router-dom";
import PlacesForm from "./PlacesForm";


function PlacePage() {
  const { action } = useParams();

  return (
    <div>
      {action !== "addplaces" && (
        <div className="add-place">
          <Link className="addicon" to={"/account/places/addplaces"}>
            {" "}
            Add Places
            {/* <AddIcon/> */}
          </Link>
        </div>
      )}

      {action === "addplaces" && (
        <PlacesForm/>
        
      )}
    </div>
  );
}

export default PlacePage;
