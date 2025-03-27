import axios from 'axios'

export const createTeacher = async (teacher) => {
    try {
        console.log(`this is teacher: `, teacher)

        const response = await axios.post(
            'http://localhost:3000/api/teacher/create',
            teacher,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        )
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const getAllTeachers = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/teacher/")
        return response.data
    } catch (error) {
        console.error(error)
    }
}

export const deleteTeacher = async (teacherId) => {
    try {
        const response = await axios.delete(`http://localhost:3000/api/teacher/delete/${teacherId}`)
        return response.data
    } catch (error) {
        console.error(error);

    }
}
export const updateTeacher = async (teacherId, data) => {
    try {
            const response = await axios.put(
            `http://localhost:3000/api/teacher/update/${teacherId}`,
            data,
            { headers: { "Content-Type": "multipart/form-data" } } // Ensure correct headers
        );

        return response.data;
    } catch (error) {
        console.error("Update failed:", error.response ? error.response.data : error.message);
    }
};