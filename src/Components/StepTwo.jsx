import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';

function StepTwo(){

    const [Switch,setSwitch] = useState(true);
    const [Type,setType] = useState('');
    const [Price,setPrice] = useState('');
    const navigate = useNavigate('');

    const Continue = () =>{
        const time = Switch ? 'Monthly' : 'Yearly';
        const Plan ={
            Type: Type,
            Time : time,
            Price : Price
        }
        navigate('/StepThree',{state:{Plan}})
    }

    return(
        <div className="StepTwoPanel">
            <div className="info">
                <span className="title">Select Your Plan</span>
                <span className="subtitle">Please provide your name,email address,and phone number.</span>
            </div>
            <div className="formal">
                    <div className="choose">
                        <div className="holder" onClick={() => {setType('Arcade') ; setPrice('$9')}} style={{backgroundColor : Type === 'Arcade' ? 'var(--LightGray)' : '' , flex : Type === 'Arcade' ? '2' : ''}}>
                            <div className="logo">
                                <div className="arcade"></div>
                            </div>
                            <div className="type">
                                <span className="primary">Arcade</span>
                                <span className="secondary">$9/mo</span>
                            </div>
                        </div>

                        <div className="holder" onClick={() => {setType('Advanced'); setPrice('$12')}} style={{backgroundColor : Type === 'Advanced' ? 'var(--LightGray)' : '' , flex : Type === 'Advanced' ? '2' : ''}}>
                            <div className="logo">
                                <div className="advanced"></div>
                            </div>
                            <div className="type">
                                <span className="primary">Advanced</span>
                                <span className="secondary">$12/mo</span>
                            </div>
                        </div>

                        <div className="holder" onClick={() => {setType('Pro') ; setPrice('$15')}} style={{backgroundColor : Type === 'Pro' ? 'var(--LightGray)' : '' , flex : Type === 'Pro' ? '2' : ''}}>
                            <div className="logo">
                                <div className="pro"></div>
                            </div>
                            <div className="type">
                                <span className="primary">pro</span>
                                <span className="secondary">$15/mo</span>
                            </div>
                        </div>
                    </div>

                    <div className="set">
                        <div className="holder" onClick={()=>{setSwitch(!Switch)}}>
                            <div><span onClick={()=>{setSwitch(!Switch)}} style={{color : Switch ? '' : 'var(--CoolGray)'}}>Monthly</span></div>
                            <div className="switch" style={{justifyContent: Switch ? 'start' : 'end'}}>
                                <div onClick={()=>{setSwitch(!Switch)}}></div>
                            </div>
                            <div><span onClick={()=>{setSwitch(!Switch)}} style={{color : Switch ? 'var(--CoolGray)' : ''}}>Yearly</span></div>
                        </div>
                    </div>
            </div>
            <div className="click">
                    <div onClick={() =>{navigate('/')}}>Go Back</div>
                    <button onClick={Continue}>Next Step</button>
            </div>
        </div>
    );
}
export default StepTwo;