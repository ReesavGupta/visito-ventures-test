import React, { useRef, useState } from "react";
import MenuBar from "../reusable-components/MenuBar";
import { createTeacher } from "../api/teacher";
import FileDropZone from "./FileDropZone";

const TeacherComponent = () => {
    const teacherNameRef = useRef();
    const ageRef = useRef();
    const idRef = useRef();
    const codeRef = useRef();
    const image = null;
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", teacherNameRef.current.value);
        formData.append("age", ageRef.current.value);
        formData.append("schoolId", idRef.current.value);
        formData.append("teacherCode", codeRef.current.value);
        
        if (selectedImage) {
            formData.append("image", selectedImage);
        }

        try {
            const response = await createTeacher(formData);
            console.log(response);
        } catch (error) {
            console.error("Error creating teacher:", error);
        }
    };

    return (
        <div>
            <MenuBar />
            <div className="container w-70 bg-secondary mt-5 gap-3">
                <form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="teacherName">Teacher Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="teacherName"
                            id="teacherName"
                            placeholder="John Doe"
                            ref={teacherNameRef}
                        />
                    </div>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="age">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            name="age"
                            id="age"
                            placeholder="Enter age"
                            ref={ageRef}
                        />
                    </div>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="SchoolId">School ID</label>
                        <input
                            type="text"
                            className="form-control"
                            name="SchoolId"
                            id="SchoolId"
                            placeholder="S312412"
                            ref={idRef}
                        />
                    </div>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="teacherCode">Teacher Code</label>
                        <input
                            type="text"
                            className="form-control"
                            name="teacherCode"
                            id="teacherCode"
                            placeholder="T12345"
                            ref={codeRef}
                        />
                    </div>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="image">Image</label>
                        <FileDropZone onChange={(file) => setSelectedImage(file)} />
                    </div>

                    <button className="btn bg-black text-white my-3" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TeacherComponent;
