import React from 'react';

const StepThree = ({setStep, button, input, handleSubmit, userData, setuserData}) => {
    const handleBlur = (e) => {
        setuserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div>
            <form>
                <input
                type="text"
                placeholder = "Name"
                style = {input}
                name = "Name"
                onChange = {handleBlur}
                value={userData.Name}
                />
                <input
                type="email"
                placeholder = "Email"
                style = {input}
                name = "Name"
                onChange = {handleBlur}
                value={userData.Email}
                />
                <input
                type="tel"
                placeholder = "Phone"
                style = {input}
                name = "Phone"
                onChange = {handleBlur}
                value={userData.Email}
                />
                <textarea
                    name="mesaage"
                    placeholder = "Mesaage"
                    style = {input}
                    name = "Mesaage"
                    onChange = {handleBlur}
                    value={userData.Mesaage}
                    cols="30"
                    rows="5">
                </textarea>
                <div style={{display : "inline"}}>
                        <button type="button" style={button} onClick={()=>setStep(2) }  >Previous</button>
                    <div style={{float: "right"}}>
                        <button type="button" onClick={handleSubmit} style={button} >Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default StepThree;