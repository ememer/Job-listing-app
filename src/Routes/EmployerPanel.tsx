import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import EmployerStepsButtons from '../components/EmployerStepsButtons';


import './EmployerPanel.css';


const EmployerPanel = () => {
    const location = useLocation().pathname
    const [stepNumber, setStepNumber] = useState<number>(1);
    
    useEffect(()=>{
        // TO DO - TO USE LOCATION AND REACT ROUTER IN PROPER WAY HANDLING WITH URLs PARAMS
        setStepNumber(+location.slice(location.length -1, location.length))
    },[location])    
    

    return (
        <form onSubmit={(e) => e.preventDefault()} className="employer__form">
           <Outlet/>
            <div className="form__progressbar">
                <div className="fields__progressbar">
                    <span className={clsx((stepNumber === 1 || stepNumber > 1) ? 'active__step' : "fields__step")}></span>
                    <span className={clsx((stepNumber === 2 || stepNumber > 2) ? 'active__step' : "fields__step")}></span>
                    <span className={clsx((stepNumber === 3 || stepNumber > 3) ? 'active__step' : "fields__step")}></span>
                    <span className={clsx((stepNumber === 4 || stepNumber > 4) ? 'active__step' : "fields__step")}></span>
                    <span className={clsx((stepNumber === 5 || stepNumber > 5) ? 'active__step' : "fields__step")}></span>
                </div>
               <EmployerStepsButtons step={stepNumber}/>
            </div>
        </form>
    );
};

export default EmployerPanel;
