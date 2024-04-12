import axiosInstance from "@/interceptors";
import { CredentialsProps } from "@/types/Auth.types";

async function loginUser(credentials: CredentialsProps) {
	let result = {};

	await axiosInstance
		.post("/auth/login", credentials)
		.then((response) => {
			result = response.data;
		})
		.catch((err) => {
			result = err.response.data;
		});

	return result;
}

async function logoutUser() {
	const result = await axiosInstance
		.get("/auth/logout")
		.catch((err) => console.log(err));

	return result;
}

async function registerUser(data: CredentialsProps) {
	let result = {};

	await axiosInstance
		.post("/auth/create-user", data)
		.then((response) => {
			result = response.data;
		})
		.catch((err) => {
			result = err.response.data;
			return;
		});

	return result;
}

async function checkToken() {}

export { loginUser, logoutUser, registerUser, checkToken };
