import axios from "axios";

const URL = "https://kanbas-node-server-app-uq9r.onrender.com/api/courses";

export const findAllCourses = async () => {
  const response = await axios.get(URL);
  return response.data;
};

export const fetchCourse = async (id) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export const addCourse = async (course) => {
  const response = await axios.post(URL, course);
  return response.data;
};

export const deleteCourse = async (courseid) => {
  const response = await axios.delete(`${URL}/${courseid}`);
  return response.data;
};

export const updateCourse = async (course) => {
  const response = await axios.put(`${URL}/${course._id}`, course);
  return response.data;
};
