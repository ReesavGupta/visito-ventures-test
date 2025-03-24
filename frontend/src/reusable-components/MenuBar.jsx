import React from "react";
import { useState } from "react";

const MenuBar = () => {
    return (
        <div className=" nav bg-black flex justify-content-around align-items-center p-4 text-white" style={{height:"13vh"}}>
            <h1>School Management</h1>
            <a href="/" className="text-decoration-none text-white">Home</a>
            <a href="/school" className="text-decoration-none text-white">School</a>
            <a href="/teacher" className="text-decoration-none text-white">Teacher</a>
        </div>
    )
}
export default MenuBar