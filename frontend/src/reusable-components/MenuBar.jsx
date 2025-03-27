import React from "react";
import { useState } from "react";

const MenuBar = () => {
    return (
        <div className=" nav bg-secondary flex justify-content-around align-items-center p-4 text-white" style={{height:"13vh", position:"sticky", top:"0px"}}>
            <h1>School Management</h1>
            <a href="/" className="text-decoration-none text-white">Home</a>
            <a href="/teacher" className="text-decoration-none text-white">Teacher</a>
        </div>
    )
}
export default MenuBar