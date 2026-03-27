import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 1. Request Interceptor: Attach the JWT token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Or use a cookie/state manager
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 2. Response Interceptor: Handle global errors (like 401 Unauthorized)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // If the backend returns 401, the token is likely expired or invalid
    if (error.response?.status === 401) {
      console.warn('Unauthorized! Logging out...');
      localStorage.removeItem('token');
      // Optional: window.location.href = '/login';
    }

    // Standardize the error object so it's easier to read in your components
    const message = error.response?.data?.message || 'Something went wrong';
    return Promise.reject(message);
  }
);

export default axiosInstance;