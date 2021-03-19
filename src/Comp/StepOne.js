import React from 'react';

const StepOne = ({setStep, button, input, handleSubmit, userData, setuserData}) => {
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
                placeholder = "What is the item"
                style = {input}
                name = "item"
                onChange = {handleBlur}
                value={userData.item}
                />
                <input
                type="text"
                placeholder = "Dimensins"
                name = "Dimensins"
                style = {input}
                value={userData.Dimensins}
                onChange = {handleBlur}
                />
                <select style = {input} onChange = {handleBlur} name="Material" value={userData.Material}>
                    <option value="Material">Material</option>
                    <option value="Steel">Steel</option>
                    <option value="Aluminium">Aluminium</option>
                    <option value="Cast Iron">Cast Iron</option>
                    <option value="Other">Other</option>
                </select>
                <div style={{overflow: "hidden", marginTop: "10px"}}>
                <input type="hidden" role="uploadcare-uploader" name="my_file" />
                </div>
                <div style={{float: "right"}}>
                    <button type="button" onClick={()=>setStep(2) } style={button} >Next</button>
                </div>
            </form>
        </div>
    );
};

export default StepOne;