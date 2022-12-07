import React from "react";

let TEMP =
    'https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80';

const EmployerThirdStepForm = () =>{
    return(
        <div className="employer__fields">
                    <div>
                        <label>Announcement photo HTTP link </label>
                        <input type="text" title="Insert link for announcement photo"></input>
                    </div>
                    <div>
                        <label>Photo preview</label>
                        <div className="fields__photo" style={{ backgroundImage: `url("${TEMP}")` }} />
                    </div>
                </div>
    )
}

export default EmployerThirdStepForm

