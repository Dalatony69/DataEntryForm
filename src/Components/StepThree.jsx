import React,{useState} from "react";
import {useNavigate,useLocation } from 'react-router-dom';

function StepThree(){

    const location = useLocation();
    const navigate = useNavigate('');
    const [OnlineService, setOnlineService] = useState(false);
    const [LargerStorage, setLargerStorage] = useState(false);
    const [CustomizableProfile, setCustomizableProfile] = useState(false);
    const {Plan} = location.state; 

    const Continue = () =>{
        const onlineService = OnlineService ? {Service : 'OnlineService' , price : '$1'}: null ;
        const largerStorage = LargerStorage ? {Service : 'LargerStorage' , price : '$2'}: null ;
        const customizableProfile = CustomizableProfile ? {Service : 'Customizable Profile' , price : '$2'}: null ;

        const displaydata ={
            Plan : Plan ,
            OnlineService : onlineService,
            LargerStorage : largerStorage ,
            CustomizableProfile : customizableProfile
        }
        navigate('/StepFour',{state:{displaydata}});
    }

    return(
        <div className="StepThreePanel">
            <div className="info">
                <span className="title">Pick add-ons</span>
                <span className="subtitle">Add-ons help enhance your gaming experience.</span>
            </div>
            <div className="formal">
                        <div className="holder">
                            <div className="tick">
                                <div>
                                    <input type="checkbox" onChange={() => setOnlineService(!OnlineService)}/>
                                </div>
                            </div>
                            <div className="explain">
                                <span className="one">Online Service</span>
                                <span className="two">Access to multiplayer games</span>
                            </div>
                            <div className="price">
                                <span>{Plan['Time'] === 'Monthly' ? '+$1/mo':'+$1/yr'}</span>
                            </div>
                        </div>

                        <div className="holder">
                            <div className="tick">
                                <div>
                                    <input type="checkbox" onChange={() => setLargerStorage(!LargerStorage)}/>
                                </div>
                            </div>
                            <div className="explain">
                                <span className="one">Larger Storage</span>
                                <span className="two">Extra 1TB of cloud ave</span>
                            </div>
                            <div className="price">
                                <span>{Plan['Time'] === 'Monthly' ? '+$2/mo':'+$2/yr'}</span>
                            </div>
                        </div>

                        <div className="holder">
                            <div className="tick">
                                <div>
                                    <input type="checkbox" onChange={() => setCustomizableProfile(!CustomizableProfile)}/>
                                </div>
                            </div>
                            <div className="explain">
                                <span className="one">Customizable Profile</span>
                                <span className="two">Custom theme on your profile</span>
                            </div>
                            <div className="price">
                                <span>{Plan['Time'] === 'Monthly' ? '+$2/mo':'+$2/yr'}</span>
                            </div>
                        </div>
            </div>
            <div className="click">
                    <div onClick={() =>{navigate('/StepTwo')}}>Go Back</div>
                    <button onClick={Continue}>Next Step</button>
            </div>
        </div>
    );
}
export default StepThree;