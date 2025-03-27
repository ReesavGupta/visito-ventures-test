import axios from "axios";

export const createTeacher = async (teacher) => {
    try{
        const response = await axios.post('http://localhost:3000/api/teacher/create/', teacher);
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}