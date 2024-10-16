import React,{useState,useEffect} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

function ControlBar(){

    const [location,setLocation] = useState("");
    const getlocation = useLocation();
    const navigate = useNavigate('');

    useEffect(()=>{
        setLocation(getlocation.pathname);
    },[getlocation]);

    return(
        <div className='ControlBar'>
            <div className='holder'>
                <div className='step'>
                    <div className='number' onClick={() => navigate('/')} style={{backgroundColor : location === '/' ? 'VAR(--Magnolia)' : '' , color : location === '/' ? 'VAR(--MarineBlue)' : '',border : location === '/' ? '2px solid VAR(--MarineBlue)' : ''}}>
                        <span>1</span>
                     </div>
                    <div className='info'>
                        <div className='clarification'>STEP 1</div>
                        <div className='detail'>YOUR INFO</div>
                    </div>
                </div>

                <div className='step'>
                    <div className='number' onClick={() => navigate('/StepTwo')} style={{backgroundColor : location === '/StepTwo' ? 'VAR(--Magnolia)' : '' , color : location === '/StepTwo' ? 'VAR(--MarineBlue)' : '',border : location === '/StepTwo' ? '2px solid VAR(--MarineBlue)' : ''}}>
                        <span>2</span>
                     </div>
                    <div className='info'>
                        <div className='clarification'>STEP 2</div>
                        <div className='detail'>SELECT PLAN</div>
                    </div>
                </div>

                <div className='step'>
                <div className='number' onClick={() => navigate('/StepThree')} style={{backgroundColor : location === '/StepThree' ? 'VAR(--Magnolia)' : '' , color : location === '/StepThree' ? 'VAR(--MarineBlue)' : '',border : location === '/StepThree' ? '2px solid VAR(--MarineBlue)' : ''}}>
                        <span>3</span>
                     </div>
                    <div className='info'>
                        <div className='clarification'>STEP 3</div>
                        <div className='detail'>ADD-ONS</div>
                    </div>
                </div>

                <div className='step'>
                <div className='number' onClick={() => navigate('/StepFour')} style={{backgroundColor : location === '/StepFour' ? 'VAR(--Magnolia)' : '' , color : location === '/StepFour' ? 'VAR(--MarineBlue)' : '',border : location === '/StepFour' ? '2px solid VAR(--MarineBlue)' : ''}}>
                        <span>4</span>
                     </div>
                    <div className='info'>
                        <div className='clarification'>STEP 4</div>
                        <div className='detail'>SUMMARY</div>
                    </div>
                </div>

    
            </div>
        </div>
    );
}
export default ControlBar;