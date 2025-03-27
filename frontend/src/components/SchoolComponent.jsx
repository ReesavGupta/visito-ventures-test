import React from "react";
import { useState, useRef } from "react";
import MenuBar from "../reusable-components/MenuBar";
import {createSchool, deleteSchool} from "../api/School";
const SchoolComponent = () =>{
    const schoolNameRef = useRef();
    const schoolAddressRef = useRef();
    
    const handleSubmit = async (e) =>{
        
        try {
            const school = {
                "name": schoolNameRef.current.value,
                "location": schoolAddressRef.current.value
            }
            
        
            const response = await createSchool(school);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <div >
            <MenuBar/>
            <div className="container bg-secondary mt-5 gap-3 w-70">
                <form  className="d-flex flex-column justify-content-center align-items-center" onSubmit={handleSubmit}>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="schoolName">School Name</label>
                        <input type="text" className="form-control" name="schoolName" id="schoolName" placeholder="Example Senior Secondary School" ref={schoolNameRef}/>
                    </div>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="schoolAddress">School Address</label>
                        <input type="text" className="form-control" name="schoolAddress" id="schoolAddress" placeholder="54th street, Gangtok, Sikkim" ref={schoolAddressRef}/>
                    </div>
                    
                    

                    <button type="submit" className="btn bg-black text-white my-3" >Submit</button>
                </form>
            </div>
        </div>
    )
}
export default SchoolComponent