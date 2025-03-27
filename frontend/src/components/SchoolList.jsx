import React from "react";
import MenuBar from "../reusable-components/MenuBar";
import { getAllSchools, deleteSchool } from "../api/School";
import { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
const SchoolList = () => {
    const [schools, setSchools] = useState([]);
    useEffect(() => {
        getAllSchools().then((schools) => {
            console.log(schools);
            setSchools(schools);
        })
    }, [])
    return (
        <>
            <MenuBar />
            <div className=" d-flex flex-column text-center mt-5">
                <h1>list of schools</h1>
                <div className="container d-flex align-items-center">
                
                    <div className="school w-50 border border-black text-center border-grey">
                        <p>School Name</p>
                        <ul className="list-group list-group-flush list-unstyled">
                            {schools.map((school) => {
                                return (
                                    <li className="list-item border border-grey" style={{height:"5vh"}}>{school.name}</li>
                                )
                            }
                            )}

                        </ul>
                    </div>
                    <div className="school_id w-50 border border-black text-center">
                        <p>School Id</p>
                        <ul className="list-group list-group-flush list-unstyled">
                            {schools.map((school) => {
                                return (
                                    <li className="list-item border border-grey" style={{height:"5vh"}}>{school.schoolCode}</li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <div className="school_id text-center" style={{ width: "10%" }}>

                        <ul className="list-group list-group-flush list-unstyled d-flex justify-content-center align-items-center flex-column mt-5">
                            {schools.map((school) => {
                                return (
                                    <FiTrash2 size={30} onClick={() => {
                                        deleteSchool(school.schoolId);
                                        window.location.reload(); 
                                        color='red'
                                    }}/>
                                )
                            }
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )

}
export default SchoolList
