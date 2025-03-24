import React from "react";
import MenuBar from "../reusable-components/MenuBar";
const SchoolList = () => {
    return (
        <>
            <MenuBar />
            <div className="container d-flex flex-column justify-content-center align-items-center mt-5">
                <h1>list of schools</h1>
                <div className="container d-flex justify-content-around ">
                    <div className="school w-50 border border-black text-center border-grey">
                        <h2>School Name</h2>
                        <ul className="list-group list-group-flush list-unstyled">
                            <li className="list-item border border-grey">Example School</li>
                            <li className="list-item border border-grey">Example School</li>
                            <li className="list-item border border-grey">Example School</li>
                        </ul>
                    </div>
                    <div className="school_id w-50 border border-black text-center">
                        <h2>School Id</h2>
                        <ul className="list-group list-group-flush list-unstyled">
                            <li className="list-item border border-grey">A123456</li>
                            <li className="list-item border border-grey">A123456</li>
                            <li className="list-item border border-grey">A123456</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )

}
export default SchoolList