import React, { useRef, useState } from 'react'
import MenuBar from '../reusable-components/MenuBar'
import { createTeacher } from '../api/teacher'
import FileDropZone from './FileDropZone'

const TeacherComponent = () => {
  const teacherNameRef = useRef()
  const ageRef = useRef()
  const idRef = useRef()
  const [selectedImage, setSelectedImage] = useState(null)

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
    } catch (error) {
      console.error('Error creating teacher:', error)
    }
  }

  return (
    <div>
      <MenuBar />
      <div className="container w-70 bg-secondary mt-5 gap-3">
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
            />
          </div>

          <button
            className="btn bg-black text-white my-3"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default TeacherComponent
