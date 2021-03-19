import React, { useContext, useState } from 'react';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTow from './StepTow';

const StepMin = () => {
    const [ currentStep, setStep] = useState(1);
    const [ userData, setuserData] = useState('');
    const input = {
        padding: "10px",
        marginTop:"10px",
        width: "100%",
        fontSize: "17px",
        border: "1px solid #aaaaaa",
        borderRadius: "5px",
        boxSizing : "border-box"
      }
    const  button = {
        color: "#ffffff",
        border: "none",
        padding: "10px 20px",
        marginTop:"10px",
        fontSize: "17px",
        borderRadius: "5px",
        backgroundColor : "#454CD7",
        cursor: "pointer",
        
      }
    const handleSubmit = (e) => {
        console.log(userData);
        setStep(4)
        setuserData('')
        // alert("Success Thanks for submitting your form")
        
    }
    function showStep(step){
        switch(step){
            case 1:
                return <StepOne setStep={setStep} input={input} button={button} handleSubmit={handleSubmit} userData={userData} setuserData={setuserData}/>
            case 2:
                return <StepTow setStep={setStep} input={input} button={button} handleSubmit={handleSubmit} userData={userData} setuserData={setuserData}/>
            case 3:
                return <StepThree setStep={setStep} input={input} button={button} handleSubmit={handleSubmit} userData={userData} setuserData={setuserData}/>
            case 4 :
                return <StepFour setStep={setStep} button={button}/>
            
        }
    }
    return (
        <div style={{paddingLeft: "20%", paddingRight: "20%", paddingTop: "30px"}}>
            {/* <StepOne/>
            <StepTow/>
            <StepThree/> */}
            {showStep(currentStep)}
        </div>
    );
};

export default StepMin;