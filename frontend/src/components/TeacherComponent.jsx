import React, { useRef, useState, useEffect } from 'react'
import MenuBar from '../reusable-components/MenuBar'
import { createTeacher, getAllTeachers } from '../api/teacher'
import FileDropZone from './FileDropZone'

const TeacherComponent = () => {
    const teacherNameRef = useRef()
    const ageRef = useRef()
    const idRef = useRef()
    const [selectedImage, setSelectedImage] = useState(null)
    const [teacherData, setTeacherData] = useState([])
    const [addteacher, setAddTeacher] = useState(false)

    useEffect(() => {
        getAllTeachers().then((res) => {
            console.log(res);
            setTeacherData(res);
        })
    }, [])


    const handleSubmit = async (e) => {

        e.preventDefault()
        const formData = new FormData()
        formData.append('name', teacherNameRef.current.value)
        formData.append('age', ageRef.current.value)
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
        <div className='bg-black text-white' style={{height:'100vh'} }>
            <MenuBar />
            <div className='flex flex-col justify-content-center align-items-center mt-2 text-center container mx-auto' style={{opacity: addteacher?'0':'100'}}>
                <h2>Teacher Details</h2>
                {teacherData.length > 0 ?
                    <div className='flex flex-col justify-content-center align-items-center pb-2 mt-3'>
                        <div className="row text-center border border-black mx-auto w-75 fw-bold fs-6">
                            <div className="col border-end border-black">Index</div>
                            <div className="col border-end border-black">Name</div>
                            <div className="col border-end border-black">Teacher Code</div>
                            <div className="col border-end border-black">age</div>
                            <div className="col border-end border-black">School</div>
                            <div className="col border-end border-black">Active</div>
                        </div>
                        {
                            teacherData.map((teacher, index) => {

                                return (<div className="row justify-content-center text-center border border-top-0 border-black mx-auto w-75  ">
                                    <div className="col border-end border-black">{index + 1}</div>
                                    <div className="col border-end border-black">{teacher.name}</div>
                                    <div className="col border-end border-black">{teacher.teacherCode}</div>
                                    <div className="col border-end border-black">{teacher.age}</div>
                                    <div className="col border-end border-black">{teacher.schoolId}</div>
                                    <div className="col border-end border-black" >
                                        {!teacher.active ?
                                            <p>active</p>
                                            :
                                            <p>inactive</p>
                                        }
                                    </div>

                                </div>)
                            })
                        }

                    </div>
                    :
                    <p>No data</p>

                }

            </div>

            <div className='d-flex w-100 justify-content-center align-items-center' >

                <button className=' bg-secondary border rounded' onClick={() => {
                    setAddTeacher(true)
                }}>Add teacher</button>

            </div>


            {addteacher &&
                <div className="container bg-secondary w-70 text-center mt-3 gap-3" style={{position:"absolute", top:'25vh', right:"3vw", zIndex:"1000"}}
                >
                    <h2>Add Teacher</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="d-flex flex-column justify-content-center align-items-center"
                    >
                        {/* Teacher Name */}
                        <div className="form-group w-50 text-center mt-3 fw-bold text">
                            <label htmlFor="teacherName">Teacher Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="teacherName"
                                placeholder="John Doe"
                                ref={teacherNameRef}
                                required
                            />
                        </div>

                        {/* Age */}
                        <div className="form-group w-50 text-center mt-3 fw-bold text">
                            <label htmlFor="age">Age</label>
                            <input
                                type="number"
                                className="form-control"
                                id="age"
                                placeholder="Enter age"
                                ref={ageRef}
                                required
                            />
                        </div>

                        {/* School ID */}
                        <div className="form-group w-50 text-center mt-3 fw-bold text">
                            <label htmlFor="schoolId">School ID</label>
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
                        <div className="form-group w-50 text-center mt-3 fw-bold text">
                            <label htmlFor="image">Upload Image</label>
                            <FileDropZone
                                onChange={(file) => {
                                    console.log('Selected File:', file)
                                    setSelectedImage(file)
                                }}
                                color={"grey"}
                            />
                        </div>
                        <div >

                        <button
                            className="btn bg-black text-white m-3"
                            type="submit"
                        >
                            Submit
                        </button>
                        <button
                            className="btn bg-black text-white m-3"
                            type="reset"
                            onClick={()=>{
                                setAddTeacher(false)
                            }}
                        >
                            cancel
                        </button>
                        </div>
                    </form>
                </div>
}
        </div>
    )
}

export default TeacherComponent
