import React from "react";
import { useState, useRef } from "react";
import MenuBar from "../reusable-components/MenuBar";
import { createSchool, deleteSchool, getAllSchools } from "../api/School";
const SchoolComponent = ({children}) => {
    const schoolNameRef = useRef();
    const schoolAddressRef = useRef();
    const schoolCityAddressRef = useRef()
    const schoolCountryAddressRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const school = {
                "name": schoolNameRef.current.value,
                "location": schoolAddressRef.current.value + ',' + schoolCityAddressRef + ',' + schoolCountryAddressRef
            }


            const response = await createSchool(school);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="d-block">
            <div className=" text-white gap-3 h-full d-flex row justify-content-center align-items-center m-auto" style={{ height: "80vh" }}>
                
                <form className="d-flex flex-column justify-content-center align-items-center h-75 bg-secondary w-75" onSubmit={handleSubmit} >
                {children}
                    <div className="form-group w-50 text-start mt-3 fw-bold text">
                        <label htmlFor="schoolName">School Name<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className="form-control" name="schoolName" id="schoolName" placeholder="Example Senior Secondary School" ref={schoolNameRef} />
                    </div>
                    <div className="d-flex align-items-center justify-content-evenly w-50 ">
                        <div className="form-group w-50 text-start mt-3 me-2 fw-bold text">
                            <label htmlFor="schoolAddress">School Address<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" name="schoolAddress" id="schoolAddress" placeholder="54th street, Gangtok" ref={schoolAddressRef} />
                        </div>
                        <div className="form-group w-50 text-start mt-3 fw-bold text">
                            <label htmlFor="schoolAddress">State<span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className="form-control" name="schoolAddress" id="schoolAddress" placeholder="Sikkim" ref={schoolCityAddressRef} />
                        </div>

                    </div>
                    <div className="form-group w-50 text-start mt-3 fw-bold text">
                        <label htmlFor="schoolAddress">Country<span style={{ color: 'red' }}>*</span></label>
                        <input type="text" className="form-control" name="schoolAddress" id="schoolAddress" placeholder="India" ref={schoolCountryAddressRef} />
                    </div>


                    <div>

                        <button type="submit" className="btn bg-black text-white my-3" >Submit</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
export default SchoolComponent