import React from "react";

const EmployerSecondStepForm = () =>{
    return(
        <div className="employer__fields">
        <div>
            <label>Contract</label>
            <input type="text" title="Insert contract details"></input>
        </div>
        <div>
            <label>Location</label>
            <input type="text" title="Insert company location"></input>
        </div>
        <div>
            <label>Technical languages</label>
            <input type="text" title="Insert technical languages"></input>
        </div>
        <div>
            <label>Technical Tools</label>
            <input type="text" title="Insert technical tools"></input>
        </div>
    </div>
    )
} 

export default EmployerSecondStepForm

