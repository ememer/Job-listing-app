import React from 'react';

const EmployerFirstStepForm = () => {
    return (
        <div className="employer__fields">
            <div>
                <label>Company Name</label>
                <input type="text" title="Insert company name"></input>
            </div>
            <div>
                <label>Position</label>
                <input type="text" title="Insert position name"></input>
            </div>
            <div>
                <label>Role</label>
                <input type="text" title="Insert role name"></input>
            </div>
            <div>
                <label>Level</label>
                <select title="Insert level of advance">
                    <option selected hidden disabled>
                        Select
                    </option>
                    <option>Trainee</option>
                    <option>Junior</option>
                    <option>Mid</option>
                    <option>Senior</option>
                </select>
            </div>
        </div>
    );
};

export default EmployerFirstStepForm;
