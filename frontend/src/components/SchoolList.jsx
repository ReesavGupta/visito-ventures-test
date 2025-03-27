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


    const handleFormSubmit = (e)=>{
        e.preventDefault()
        const data = {
            "name":editSchoolNameRef.current.value,
            "location":editSchoolLocRef.current.value
        }
        try{
            updateSchool(editSchoolId, data).then((res)=>{
                // console.log(res)
            })
        }catch(error){
            console.error(error);
            
        }
    }
    return (
        <div className="bg-black" style={{ height: "100vh", color: "white" }}>
            <MenuBar />
            <div className=" d-flex flex-column text-center mt-5" style={{ opacity: (addSchool || editSchool) ? "0" : "100" }}>
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
                    <div className="school_id w-50 border border-grey text-center">
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
                    <div className="school_id text-center" style={{ width: "10%" }}>

                        <ul className="list-group list-group-flush list-unstyled d-flex justify-content-center align-items-center flex-column mt-5">
                            {schools.map((school, key) => {
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
                    <div className="school_id text-center" style={{ width: "10%" }}>

                        <ul className="list-group list-group-flush list-unstyled d-flex justify-content-center align-items-center flex-column mt-5">
                            {schools.map((school, key) => {
                                return (
                                    <FiEdit size={30} color="grey" onClick={() => {
                                        setEditSchool(true)
                                        setEditSchoolId(school.schoolId)
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
                <div className="d-flex row justify-content-center" style={{ position: "absolute", top: '5vh', right: "7vw", zIndex: "1000", width: "75vw" }}>
                    <SchoolComponent />
                    <button type="reset" className="w-25 bg-secondary rounded border-0" onClick={() => {
                        setAddSchool(false)
                    }}>Cancel</button>
                </div>
            }



            {
                editSchool &&
                <div className="d-flex row justify-content-center bg-secondary text-center rounded " style={{ position: "absolute", top: '20dvh', right: "30dvw", zIndex: "1000", width: "50vw", height: "50vh" }} >
                    <p style={{ height: "6vh" , marginTop:'5px'}}>School Id: {editSchoolId}</p>


                    <form className="d-flex justify-content-evenly align-items-center h-75" onSubmit={handleFormSubmit} style={{flexDirection:"column"}}>

                        <div className="form-group w-50 text-center mt-3 fw-bold text row">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="border-0 rounded"  name="name" id="name" ref={editSchoolNameRef}/>
                        </div>


                        <div className="form-group w-50 text-center mt-3 fw-bold text row">
                            <label htmlFor="location">Location</label>
                            <input type="text" className="border-0 rounded" name="location" id="location" ref={editSchoolLocRef}/>
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
