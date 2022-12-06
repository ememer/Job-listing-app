import React, { useState } from 'react';

import './EmployerPanel.css';

let TEMP =
    'https://images.unsplash.com/photo-1612296727716-d6c69d2a2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80';

const EmployerPanel = () => {
    const [test, setTest] = useState(0);

    return (
        <form onSubmit={(e) => e.preventDefault()} className="employer__form">
            {test === 0 && (
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
            )}
            {test === 1 && (
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
            )}
            {test === 2 && (
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
            )}
            {test === 3 && (
                <div className="employer__fields">
                    <div>
                        <label>Title</label>
                        <input type="text" title="Insert announcement title"></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea rows={10} title="Insert announcement title" />
                    </div>
                    <div>
                        <label>Additional subtitle</label>
                        <input type="text" title="Insert additional subtitle"></input>
                    </div>
                    <div>
                        <label>Additional description</label>
                        <textarea rows={5} title="Insert
                         additional description" />
                    </div>
                </div>
            )}
            <div className="form__progressbar">
                <div className="fields__progressbar">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="progressbar__btn">
                    <button onClick={() => setTest((prev) => prev + 1)}>Next</button>
                </div>
            </div>
        </form>
    );
};

export default EmployerPanel;
