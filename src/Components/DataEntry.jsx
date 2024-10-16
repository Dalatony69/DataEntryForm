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
                    <Route path='/' element={<StepOne/>}/>
                    <Route path='/StepTwo' element={<StepTwo/>}/>
                    <Route path='/StepThree' element={<StepThree/>}/>
                    <Route path='/StepFour' element={<StepFour/>}/>
                </Routes>
        </div>
    );
}
export default DataEntry;