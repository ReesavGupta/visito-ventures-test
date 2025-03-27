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
