import React, { Children } from "react";
import { useState } from "react";

const MenuBar = ({children}) => {
    return (
        <div className=" nav bg-secondary d-flex  justify-content-between align-items-center p-2 text-white" style={{height:"10vh", position:"sticky", top:"0px"}}>
            <div className="w-50">
            <h3 className="ms-5">School Management</h3>
            </div>
            <div className="d-flex  justify-content-around align-items-center w-50">
            <a href="/" className="text-decoration-none text-white">Home</a>
            <a href="/teacher" className="text-decoration-none text-white">Teacher</a>
            {children}
            </div >
            
        </div>
    )
}
export default MenuBar