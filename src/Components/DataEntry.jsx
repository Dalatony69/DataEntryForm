import React from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function DataEntry(){
    return(
        <div className="DataEntry">
                <Routes>
                    <Route path='/DataEntryForm' element={<StepOne/>}/>
                    <Route path='/DataEntryForm/StepTwo' element={<StepTwo/>}/>
                    <Route path='/DataEntryForm/StepThree' element={<StepThree/>}/>
                    <Route path='/DataEntryForm/StepFour' element={<StepFour/>}/>
                </Routes>
        </div>
    );
}
export default DataEntry;