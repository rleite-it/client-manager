import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_API_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
	(config) => {
		const token = sessionStorage.getItem("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default axiosInstance;
