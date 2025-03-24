import React from "react";
import MenuBar from "../reusable-components/MenuBar";
const TeacherComponent = () => {
    return(
        <div>
            <MenuBar/>
            <div className="container w-70 bg-secondary mt-5 gap-3">
                <form action="" className="d-flex flex-column justify-content-center align-items-center ">
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="teacherName">Teacher Name</label>
                        <input type="text" className="form-control" name="teacherName" id="teacherName" placeholder="John Doe"/>
                    </div>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="teacherAddress">Teacher Address</label>
                        <input type="text" className="form-control" name="teacherAddress" id="teacherAddress" placeholder="54th street, Gangtok, Sikkim"/>
                    </div>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="teacherAddress">School</label>
                        <input type="text" className="form-control" name="teacherAddress" id="teacherAddress" placeholder="Gangtok Senior Secondary School"/>
                    </div>
                    <div className="form-group w-50 text-center mt-3 fw-bold text">
                        <label htmlFor="teacherAddress">School ID</label>
                        <input type="text" className="form-control" name="teacherAddress" id="teacherAddress" placeholder="54th street, Gangtok, Sikkim"/>
                    </div>
                    
                    <button className="btn bg-black text-white my-3">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default TeacherComponent