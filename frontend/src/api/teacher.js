import axios from "axios";

export const createTeacher = async (formData) => {
    try{
        const response = await axios.post('http://localhost:3000/api/teacher/create/', formData);
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}
export const getAllTeachers = async ()=>{
    try{
        const response = await axios.get("http://localhost:3000/api/teacher")
        return response.data
    }catch(error){
        console.error(error)
    }
}