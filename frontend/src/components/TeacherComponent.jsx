import React, { useRef, useState, useEffect } from 'react'
import MenuBar from '../reusable-components/MenuBar'
import { createTeacher, getAllTeachers, deleteTeacher, updateTeacher } from '../api/teacher'
import FileDropZone from './FileDropZone'
import { FiTrash2, FiEdit } from 'react-icons/fi'
const TeacherComponent = () => {
    const teacherFirstNameRef = useRef()
    const teacherLastNameRef = useRef()
    const ageRef = useRef()
    const idRef = useRef()



    const [selectedImage, setSelectedImage] = useState(null)
    const [teacherData, setTeacherData] = useState([])
    const [addteacher, setAddTeacher] = useState(false)
    const [editTeacher, setEditTeacher] = useState(false)
    const [editTeacherId, setEditTeacherId] = useState('')
    const [editActive, setEditActive] = useState(true)
    const editTeacherNameRef = useRef()
    const editTeacherageRef = useRef()
    const editTeacherSchoolIdRef = useRef()
    // const edit   
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const data = {
            "name": editTeacherNameRef.current.value,
            "age": editTeacherageRef.current.value,
            "schoolId": editTeacherSchoolIdRef.current.value,
            "active": editActive
        }
        // console.log(editTeacherId, data)
        try {

            updateTeacher(editTeacherId, data).then((res) => {
                console.log(res)
            })

        } catch (error) {

            console.error(error);

        }
    }


    useEffect(() => {
        getAllTeachers().then((res) => {
            console.log(res);
            setTeacherData(res);
        })
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        let date = new Date()
        const age = date.getFullYear() - Number(ageRef.current.value.slice(0, 4))
        console.log(age)
        const formData = new FormData()
        formData.append('name', teacherFirstNameRef.current.value + " " + teacherLastNameRef.current.value)
        formData.append('age', age)
        formData.append('schoolId', idRef.current.value)

        if (selectedImage) {
            formData.append('image', selectedImage, selectedImage.name) // Ensure proper file name
        }

        // let obj = {}
        // console.log('FormData ho hai yo chaiiiiiii:')

        // for (const pair of formData.entries()) {
        //   console.log(pair[0], pair[1])
        //   obj[pair[0]] = pair[1]
        // }

        // console.log(`this is obj: `)

        try {
            const response = await createTeacher(formData)
            console.log('Success:', response)
            window.location.reload();
        } catch (error) {
            console.error('Error creating teacher:', error)
        }
    }

    return (
        <div className='bg-black text-white' style={{ height: '100vh' }}>
            <MenuBar >
                <button className=' bg-black text-white border-0 rounded p-2' onClick={() => {
                    setAddTeacher(prev=>!prev)
                }}>+ Add Teacher  </button>
            </MenuBar>

            <div className='d-flex w-100 ms-0 m m-5 pe-5 justify-content-end align-items-center' >



            </div>

            <div className='flex-column justify-content-center align-items-center mt-2 text-center container mx-auto' style={{ display: !(addteacher || editTeacher) ? 'flex' : 'none', width: '100%' }}>
                <h2>Teacher Details</h2>
                {teacherData.length > 0 ?
                    <div className='flex flex-col justify-content-center align-items-center pb-2 mt-3 w-75'>
                        <div className="row text-center border border-grey mx-auto w-75 fw-bold fs-6">
                            <div className="col border-end border-grey">Index</div>
                            <div className="col border-end border-grey">Name</div>
                            <div className="col border-end border-grey">Teacher Code</div>
                            <div className="col border-end border-grey">age</div>
                            <div className="col border-end border-grey">School</div>
                            <div className="col border-end border-grey">Active</div>
                            <div className="col border-end border-grey">Edit</div>
                            <div className="col border-end border-grey">Delete</div>
                        </div>
                        {
                            teacherData.map((teacher, index) => {

                                return (<div className="row justify-content-center text-center border border-top-0 border-grey mx-auto w-75  ">
                                    <div className="col border-end border-grey">{index + 1}</div>
                                    <div className="col border-end border-grey">{teacher.name}</div>
                                    <div className="col border-end border-grey">{teacher.teacherCode}</div>
                                    <div className="col border-end border-grey">{teacher.age}</div>
                                    <div className="col border-end border-grey">{teacher.schoolId}</div>
                                    <div className="col border-end border-grey" >
                                        {!teacher.active ?
                                            <p>active</p>
                                            :
                                            <p>inactive</p>
                                        }
                                    </div>
                                    <div className="col border-end border-grey" style={{ cursor: "pointer" }} onClick={() => {
                                        setEditTeacher(true);
                                        setEditTeacherId(teacher.teacherId)
                                        console.log(teacher.teacherId)
                                    }}>Edit</div>
                                    <div className="col border-end border-grey" style={{ cursor: "pointer" }} onClick={() => {
                                        deleteTeacher(teacher.teacherId)
                                        window.location.reload()
                                    }}>Delete</div>

                                </div>)
                            })
                        }

                    </div>
                    :
                    <p>No data</p>

                }


            </div>



            {addteacher &&
                <div className="container d-flex flex-column justify-content-center bg-secondary text-center py-2  mx-auto" style={{ position: "absolute", top: '20vh', right: "30vw", zIndex: "1000", height: '69vh', width: '40vw' }}
                >
                    <h2 className='h-25 pt-5'>Add Teacher</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="d-flex flex-column align-items-center"
                    >
                        <div className="name d-flex gap-3 justify-content-center w-50 ">
                            {/* Teacher Name */}
                            <div className="form-group h-25 w-30 text-start fw-bold text">
                                <label htmlFor="teacherName">First Name<span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="text"
                                    className="form-control "
                                    id="firstName"
                                    placeholder="John"
                                    ref={teacherFirstNameRef}
                                    required
                                />
                            </div>
                            <div className="form-group w-30 h-25 text-start fw-bold text">
                                <label htmlFor="teacherName">Last Name<span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Doe"
                                    ref={teacherLastNameRef}
                                    required
                                />
                            </div>
                        </div>
                        {/* Age */}
                        <div className="form-group w-50 h-25 text-start  fw-bold text">
                            <label htmlFor="age">Age<span style={{ color: 'red' }}>*</span></label>
                            <input
                                type="date"
                                className="form-control"
                                id="age"
                                placeholder="Enter age"
                                ref={ageRef}
                                required
                                style={{ color: 'grey' }}
                            />
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3 h-25 w-50'>
                            {/* School ID */}
                            <div className="form-group w-50 text-start  fw-bold text">
                                <label htmlFor="schoolId">School ID<span style={{ color: 'red' }}>*</span></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="schoolId"
                                    placeholder="1"
                                    ref={idRef}
                                    required
                                />
                            </div>

                            {/* File Upload */}
                            <div className="form-group w-50 text-start  fw-bold text">
                                <label htmlFor="image">Upload Image<span style={{ color: 'red' }}>*</span></label>
                                <FileDropZone
                                    onChange={(file) => {
                                        console.log('Selected File:', file)
                                        setSelectedImage(file)
                                    }}
                                    color={"grey"}
                                />
                            </div>
                        </div>
                        <div className='h-25 mt-5'>

                            <button
                                className="btn bg-black text-white mx-3"
                                type="submit"
                            >
                                Submit
                            </button>
                            <button
                                className="btn bg-black text-white mx-3"
                                type="reset"
                                onClick={() => {
                                    setAddTeacher(false)
                                }}
                            >
                                cancel
                            </button>
                        </div>
                    </form>
                </div>
            }

            {
                editTeacher && <div className='container w-50 bg-secondary d-flex justify-content-center align-items-center h-50 bottom position-absolute ' style={{ top: '25%', left: "25%" }}>
                    <form onSubmit={handleFormSubmit} className='d-flex flex-column'>
                        <div className="form-group row">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" ref={editTeacherNameRef} />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="age">age</label>
                            <input type="date" name="age" id="age" ref={editTeacherageRef} />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="schoolId">School Id</label>
                            <input type="number" name="schoolId" id="schoolId" ref={editTeacherSchoolIdRef} />
                        </div>
                        <div className="form-group row">
                            <label htmlFor="active">Active</label>
                            <input type="checkbox" name="active" id="active" onChange={() => {
                                setEditActive(prev => !prev)
                            }} />
                        </div>
                        <div className='d-flex gap-3 justify-content-end'>
                            <button type="submit" className='border-0 rounded bg-black text-white fw-bold'>Submit</button>
                            <button type="submit" className='border-0 rounded bg-black text-white fw-bold' onClick={() => {
                                setEditTeacher(false)
                            }}>Cancel</button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}

export default TeacherComponent
