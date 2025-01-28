import axios from "axios";

const API_URL = "http://localhost:5000/api/users"; // Backend URL
export const createUser = async (username) => {
    const response = await axios.post(API_URL, { username });
    return response.data;
};

export const getUser = async (userId) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
};

export const incrementScore = async (userId) => {
    const response = await axios.put(`${API_URL}/${userId}/score`);
    return response.data;
};
