import React,{useState,useEffect} from "react";
import {useNavigate,useLocation } from 'react-router-dom';

function StepFour(){

    const location = useLocation();
    const navigate = useNavigate();
    const { displaydata } = location.state || {}; 
    const [Total,setTotal] = useState(0);

    useEffect(()=>{
        let a = parseInt((displaydata.Plan.Price).replace('$',''));
        let b = parseInt((displaydata .OnlineService['price']).replace('$',''));
        let c = parseInt((displaydata .LargerStorage['price']).replace('$',''));
        let d = parseInt((displaydata.CustomizableProfile['price']).replace('$',''));
        setTotal(a+b+c+d);
       
    },[]);

    return(
        <div className="StepFourPanel">
            <div className="info">
                <span className="title">Finishing up</span>
                <span className="subtitle">Double-Check everything looks OK before confirming</span>
            </div>
            <div className="formal">

                {displaydata.Plan !== null ? (
                    <div className="plan">
                        <span>{displaydata.Plan.Type + ' (' +displaydata.Plan.Time + ')' } </span>
                        <span>{displaydata .Plan.Price}{displaydata.Plan.Time === 'Monthly' ? '/mo':'/yr'}</span>
                    </div>
                ) : null}
                <div className="services">
                    {displaydata.OnlineService !== null ? (
                        <div className="extra">
                            <span>{displaydata.OnlineService['Service']}</span>
                            <span>{displaydata .OnlineService['price']}{displaydata.Plan.Time === 'Monthly' ? '/mo':'/yr'}</span>
                        </div>
                    ) : ''}

                    {displaydata.LargerStorage !== null ? (
                        <div className="extra">
                            <span>{displaydata.LargerStorage['Service']}</span>
                            <span>{displaydata .LargerStorage['price']}{displaydata.Plan.Time === 'Monthly' ? '/mo':'/yr'}</span>
                        </div>
                    ) : ''}

                    {displaydata.Plan !== null ? (
                        <div className="extra">
                            <span>{displaydata.CustomizableProfile['Service']}</span>
                            <span>{displaydata.CustomizableProfile['price']}{displaydata.Plan.Time === 'Monthly' ? '/mo':'/yr'}</span>
                        </div>
                    ) : ''}
                </div>

                <div className="total">
                    <span >Total</span>
                    <span>{Total}{displaydata.Plan.Time === 'Monthly' ? '/mo':'/yr'}</span>
                </div>

            </div>

            <div className="click">
                    <div onClick={() =>{navigate('/StepTwo')}}>Go Back</div>
                    <button onClick={()=>{alert('Submitted')}}>Finish</button>
            </div>
        </div>
    );
}
export default StepFour;

