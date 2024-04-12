import axiosInstance from "@/interceptors";

async function userInfo() {
	let result = {};

	await axiosInstance
		.get("/user/info")
		.then((response) => {
			result = response.data;
		})
		.catch((err) => console.log(err));

	return result;
}

export { userInfo };
