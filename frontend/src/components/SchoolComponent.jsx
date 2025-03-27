import React from "react";
import { useState, useRef } from "react";
import MenuBar from "../reusable-components/MenuBar";
import { createSchool, deleteSchool } from "../api/School";
const SchoolComponent = () => {
    const schoolNameRef = useRef();
    const schoolAddressRef = useRef();

    const handleSubmit = async (e) => {
        const [schools, setSchools] = useState([]);
        useEffect(() => {
            getAllSchools().then((schools) => {
                console.log(schools);
                setSchools(schools);
            })
        }, [])

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
    return (
        <div className="d-block">
            <div className=" text-white gap-3 h-full d-flex justify-content-center align-items-center m-auto" style={{ height: "80vh" }}>
                <form className="d-flex flex-column justify-content-center align-items-center h-50 bg-secondary w-75" onSubmit={handleSubmit} >
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="schoolName">School Name</label>
                        <input type="text" className="form-control" name="schoolName" id="schoolName" placeholder="Example Senior Secondary School" ref={schoolNameRef} />
                    </div>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="schoolAddress">School Address</label>
                        <input type="text" className="form-control" name="schoolAddress" id="schoolAddress" placeholder="54th street, Gangtok, Sikkim" ref={schoolAddressRef} />
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