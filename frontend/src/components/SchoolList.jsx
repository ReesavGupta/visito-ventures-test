import React from "react";
import MenuBar from "../reusable-components/MenuBar";
import { getAllSchools, deleteSchool } from "../api/School";
import { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import SchoolComponent from "./SchoolComponent";
const SchoolList = () => {
    const [schools, setSchools] = useState([]);
    const [addSchool, setAddSchool] = useState(false);
    useEffect(() => {
        getAllSchools().then((schools) => {
            console.log(schools);
            setSchools(schools);
        })
    }, [])
    return (
        <div className="bg-black" style={{ height: "100vh", color: "white" }}>
            <MenuBar />
            <div className=" d-flex flex-column text-center mt-5" style={{ opacity: addSchool ? "0" : "100" }}>
                <h1>list of schools</h1>
                <div className="container d-flex align-items-center">

                    <div className="school w-50 border text-center border-grey">
                        <p>School Name</p>
                        <ul className="list-group list-group-flush list-unstyled">
                            {schools.map((school) => {
                                return (
                                    <li className="list-item border border-grey" style={{ height: "5vh" }}>{school.name}</li>
                                )
                            }
                            )}

                        </ul>
                    </div>
                    <div className="school_id w-50 border border-grey text-center">
                        <p>School Id</p>
                        <ul className="list-group list-group-flush list-unstyled">
                            {schools.map((school) => {
                                return (
                                    <li className="list-item border border-grey" style={{ height: "5vh" }}>{school.schoolCode}</li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <div className="school_id text-center" style={{ width: "10%" }}>

                        <ul className="list-group list-group-flush list-unstyled d-flex justify-content-center align-items-center flex-column mt-5">
                            {schools.map((school) => {
                                return (
                                    <FiTrash2 size={30} color="grey" onClick={() => {
                                        deleteSchool(school.schoolId);
                                        window.location.reload();

                                    }} />
                                    
                                )
                            }
                            )}
                        </ul>
                    </div>

                </div>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center">
                <button className="bg-secondary border rounded mt-5" onClick={() => {
                    setAddSchool(true)
                }}>Add Schools</button>
            </div>
            {
                addSchool &&
                <div className="d-flex row justify-content-center"  style={{ position: "absolute", top: '5vh', right: "7vw", zIndex: "1000", width: "75vw" }}>
                    <SchoolComponent />
                    <button type="reset" className="w-25 bg-secondary rounded border-0" onClick={()=>{
                        setAddSchool(false)
                    }}>Cancel</button>
                </div>
            }
        </div>
    )

}
export default SchoolList
