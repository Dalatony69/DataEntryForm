import React,{useState} from "react";
import {useNavigate } from 'react-router-dom';

function StepOne(){

    const [Name,setName] = useState('');
    const [Email,setEmail] = useState('');
    const [Phone,setPhone] = useState('');
    const navigate = useNavigate('');

    const Continue = () => {
        navigate('StepTwo',{state :{Name,Email,Phone}});
      };

    return(
        <div className="StepOnePanel">
            <div className="info">
                <span className="title">Personal Info</span>
                <span className="subtitle">Please provide your name,email address,and phone number.</span>
            </div>
            <div className="formal">
                <form >
                    <div>
                        <span>Name</span>
                        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
                    </div>

                    <div>
                        <span>Email Address</span>
                        <input type="text"  onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>

                    <div>
                        <span>Phone Number</span>
                        <input type="text"  onChange={(e)=>{setPhone(e.target.value)}}/>
                    </div>
                </form>
            </div>
            <div className="click">
                <button onClick={Continue}>Next Step</button>
            </div>
        </div>
    );
}
export default StepOne;