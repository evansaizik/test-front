import axios from 'axios';

const axiosClient = axios.create({
  // baseURL: 'http://localhost:8080/api/v1',
  baseURL: 'https://bubblesme.herokuapp.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Origin': 'https://bubble7.netlify.app',
    'Access-Control-Allow-Credentials': 'true',
  },
  withCredentials: true,
});

const onRequest = (request) => {
  const token = localStorage.getItem('accessToken') || '';
  request.headers.authorization = `Bearer ${token}`;
  return request;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

const onResponseError = async (error) => {
  console.log(error.config)
  if (error?.request?.status === 403) {
    try {
      const response = await axiosClient.get('/users/refresh');

      localStorage.setItem('accessToken', response.data.accessToken)

      return axiosClient(error.config)
    } catch (err) {
      console.error(err)
    }
  }

  return Promise.reject(error)
};

axiosClient.interceptors.request.use(onRequest, onRequestError);
axiosClient.interceptors.response.use(onResponse, onResponseError);

export default axiosClient;
