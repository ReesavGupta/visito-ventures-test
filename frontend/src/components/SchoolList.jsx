import React from "react";
import MenuBar from "../reusable-components/MenuBar";
import { getAllSchools, deleteSchool, updateSchool } from "../api/School";
import { useState, useEffect, useRef } from "react";
import { FiTrash2, FiEdit } from "react-icons/fi";
import SchoolComponent from "./SchoolComponent";
const SchoolList = () => {
    const [schools, setSchools] = useState([]);
    const [addSchool, setAddSchool] = useState(false);
    const [editSchool, setEditSchool] = useState(false)
    const [editSchoolId, setEditSchoolId] = useState(false)


    const editSchoolNameRef = useRef()
    const editSchoolLocRef = useRef()



    useEffect(() => {
        getAllSchools().then((schools) => {
            // console.log(schools);
            setSchools(schools);
        })
    }, [])


    const handleFormSubmit = (e) => {
        // e.preventDefault()
        const data = {
            "name": editSchoolNameRef.current.value,
            "location": editSchoolLocRef.current.value
        }
        try {
            updateSchool(editSchoolId, data).then((res) => {
                console.log(res)
            })
        } catch (error) {
            console.error(error);

        }
    }
    return (
        <div className="bg-black" style={{ height: "100vh", color: "white" }}>
            <MenuBar >

                <button className="bg-black text-white border-0 rounded p-2" onClick={() => {
                    setAddSchool(prev=>!prev)
                }}>+  Add School</button>

            </MenuBar>
            <div className="container w-75 flex-column text-center mt-5" style={{ display: (addSchool || editSchool) ? "none" : "flex" }}>
                <h1>list of schools</h1>
                <div className="container d-flex align-items-center">

                    <div className="school w-50 border text-center border-grey">
                        <p>School Name</p>
                        <ul className="list-group list-group-flush list-unstyled">
                            {schools.map((school, key) => {
                                return (
                                    <li className="list-item border border-grey" style={{ height: "5vh" }}>{school.name}</li>
                                )
                            }
                            )}

                        </ul>
                    </div>
                    <div className="school_code w-50 border border-grey text-center">
                        <p>School Id</p>
                        <ul className="list-group list-group-flush list-unstyled">
                            {schools.map((school, key) => {
                                return (
                                    <li className="list-item border border-grey" style={{ height: "5vh" }}>{school.schoolCode}</li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <div className="school_delete w-25 border border-grey text-center">
                        <p>Delete</p>
                        <ul className="list-group list-group-flush list-unstyled">
                            {schools.map((school, key) => {
                                return (
                                    <li className="list-item border border-grey" style={{ height: "5vh", cursor:"pointer" }} onClick={() => {
                                        deleteSchool(school.schoolId);
                                        window.location.reload();

                                    }}>Delete</li>

                                )
                            }
                            )}
                        </ul>
                    </div>
                    <div className="school_id w-25 border border-grey text-center" >
                        <p>School Id</p>
                        <ul className="list-group list-group-flush list-unstyled">
                            {schools.map((school, key) => {
                                return (
                                    <li size={30} className="list-item border border-grey" style={{ height: "5vh", cursor:'pointer' }} onClick={() => {
                                        setEditSchool(true)
                                        setEditSchoolId(school.schoolId)
                                    }}>Edit</li>

                                )
                            }
                            )}



                        </ul>
                    </div>

                </div>
            </div>

            {
                addSchool &&
                <div className="d-flex row justify-content-center " style={{ position: "absolute", top: '8vh', right: "20vw", zIndex: "1000", width: "50vw",  }}>
                    <SchoolComponent >
                        <div className="d-flex w-100 justify-content-end ">
                            <button type="reset" className="fw-bold text-white bg-secondary rounded border-0  align-self-start" onClick={() => {
                                setAddSchool(false)
                            }}>X</button>
                        </div>
                    </SchoolComponent>

                </div>
            }



            {
                editSchool &&
                <div className="d-flex row justify-content-center bg-secondary text-center rounded " style={{ position: "absolute", top: '20dvh', right: "30dvw", zIndex: "1000", width: "50vw", height: "50vh" }} >
                    <p style={{ height: "6vh", marginTop: '5px' }}>School Id: {editSchoolId}</p>


                    <form className="d-flex justify-content-evenly align-items-center h-75" onSubmit={handleFormSubmit} style={{ flexDirection: "column" }}>

                        <div className="form-group w-50 text-center mt-3 fw-bold text row">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="border-0 rounded" name="name" id="name" ref={editSchoolNameRef} />
                        </div>


                        <div className="form-group w-50 text-center mt-3 fw-bold text row">
                            <label htmlFor="location">Location</label>
                            <input type="text" className="border-0 rounded" name="location" id="location" ref={editSchoolLocRef} />
                        </div>

                        <div className="form-group d-flex ">

                            <button type="submit" className="bg-black border-0 rounded text-white m-3 h-50">Submit</button>

                            <button type="reset" className="bg-black border-0 rounded text-white m-3 h-50" onClick={() => {
                                setEditSchool(false)
                            }}>Cancel</button>
                        </div>
                    </form>

                </div>
            }

        </div>
    )

}
export default SchoolList
