import React from "react";
import { useState } from "react";
import MenuBar from "../reusable-components/MenuBar";
const SchoolComponent = () =>{
    return(
        <div >
            <MenuBar/>
            <div className="container bg-secondary mt-5 gap-3 w-70">
                <form action="" className="d-flex flex-column justify-content-center align-items-center ">
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="schoolName">School Name</label>
                        <input type="text" className="form-control" name="schoolName" id="schoolName" placeholder="Example Senior Secondary School"/>
                    </div>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="schoolAddress">School Address</label>
                        <input type="text" className="form-control" name="schoolAddress" id="schoolAddress" placeholder="54th street, Gangtok, Sikkim"/>
                    </div>
                    
                    

                    <button className="btn bg-black text-white my-3">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default SchoolComponent