import React,{useState} from 'react'
import './Date.css'
import {Button} from "@mui/material"
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import {useNavigate} from 'react-router-dom';


const Dates = () => {
    
    const [fromDate, selectStartDate] = useState(new Date());
    const [toDate, selectEndDate] = useState(new Date());

    const navigate = useNavigate();
    
    const selectionRange = {
        startDate: fromDate,
        endDate: toDate,
        key: "selection",
      };

    function handleSelect(ranges) {
        selectStartDate(ranges.selection.startDate);
        selectEndDate(ranges.selection.endDate);
    }

    const nav =()=>{
      
      navigate('/search')
    }
    
  return (
            <div className='date'>

<DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
                Number of guests <PeopleAltIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />

    <Button onClick={nav}>Search Airbnb</Button>
</div>
  )
}

export default Dates
// called in banner.js