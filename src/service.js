import axios from 'axios';

axios.defaults.baseURL = 'https://todolistserver-ykl6.onrender.com';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const response = await axios.get();
    return response.data;
  },

  addTask: async (name) => {
    var data = { name: name, isComplete: false };
    await axios.post('', data);
    return;
  },

  setCompleted: async (id) => {
    await axios.put(`/${id}`);
    return;
  },

  deleteTask: async (id) => {
    await axios.delete(`/${id}`);
    return;
  }
};
