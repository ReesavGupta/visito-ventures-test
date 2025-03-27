import axios from 'axios';

export const createSchool = async (school) => {
    try {
        const response = await axios.post('http://localhost:3000/api/school/create/', school);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getAllSchools = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/school/');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateSchool = async (schoolId, data) =>{
    try {
        const response = await axios.put(`http://localhost:3000/api/school/update/${schoolId}`, data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteSchool = async (schoolId) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/school/delete/${schoolId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}