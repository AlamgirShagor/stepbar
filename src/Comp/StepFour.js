import React from 'react';

const StepFour = ({setStep, button}) => {
    return (
        <div style={{paddin : "30%"}}>
            <br/>
            <p style={{fontSize: "30px", color : "#454CD7", marginBottom : "0"}}>Success!</p>
            <p style={{fontSize: "20px", color : "#333", marginTop : "0"}}>Thanks for submitting your form</p>
            <button type="button" style={button} onClick={()=>setStep(1) }  >Previous</button>
        </div>
    );
};

export default StepFour;