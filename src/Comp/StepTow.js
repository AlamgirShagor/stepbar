import React from 'react';

const StepTow = ({setStep, button, input, handleSubmit, userData, setuserData}) => {
    const handleBlur = (e) => {
        setuserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }
   
    return (
        <div>
            <form>
                <select style = {input} onChange = {handleBlur}  value={userData.CurrentFinish} name="CurrentFinish">
                    <option value="removed">Do you need paint removed</option>
                    <option value="Painted">Yes, remove paint</option>
                    <option value="Unpainted">No, surface is unpainted</option>
                </select>
                <input
                    style = {input}
                    name="Colour"
                    type="text"
                    placeholder="Colour (RAL if available)"
                    onChange = {handleBlur}
                    value={userData.Colour}
                />
                <select style = {input} onChange = {handleBlur}  value={userData.Finish} name="Finish">
                    <option>Finish</option>
                    <option value="Matt">Matt</option>
                    <option value="Satin">Satin</option>
                    <option value="Gloss">Gloss</option>
                </select>
                
                <div style={{display : "inline"}}>
                    <button type="button" style={button} onClick={()=>setStep(1) }  >Previous</button>
                    <div style={{float: "right"}}>
                        <button type="button" onClick={()=>setStep(3) } style={button} >Next</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default StepTow;