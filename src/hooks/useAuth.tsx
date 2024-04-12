import {
	CredentialsProps,
	loginUser,
	logoutUser,
	registerUser,
} from "@/services/Auth";
import { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	// Get the value from session sotrage.
	const sessionStorageValue = sessionStorage.getItem("token");

	// Using the useState hook to keep track of the value authed (if a
	// user is logged in)
	const [authed, setAuthed] = useState<boolean>(!!sessionStorageValue);
	const [loading, setLoading] = useState<boolean>(false);

	const login = async (credentials: CredentialsProps) => {
		setLoading(true);
		const result = await loginUser(credentials);

		if (result) {
			const { token, userId, returnName, returnFirstName, returnLastName } =
				result.data;

			const user = {
				userId,
				name: returnName,
				firstName: returnFirstName,
				lastName: returnLastName,
			};

			sessionStorage.setItem("token", token);
			sessionStorage.setItem("user", JSON.stringify(user));

			setAuthed(true);
			setLoading(false);

			return navigate("/");
		}

		setLoading(false);

		return result;
	};

	const logout = async (): Promise<void> => {
		const result = await logoutUser();

		if (result) {
			sessionStorage.removeItem("user");
			sessionStorage.removeItem("token");
			setAuthed(false);
		}
	};

	const register = async (data: CredentialsProps) => {
		setLoading(true);
		const result = await registerUser(data);

		if (result.token) {
			const { token, userId, returnName, returnFirstName, returnLastName } =
				result;

			const user = {
				userId,
				name: returnName,
				firstName: returnFirstName,
				lastName: returnLastName,
			};

			sessionStorage.setItem("token", token);
			sessionStorage.setItem("user", JSON.stringify(user));

			setAuthed(true);
			setLoading(false);

			return navigate("/");
		}

		setLoading(false);

		return result;
	};

	return (
		// Using the provider so that ANY component in our application can
		// use the values that we are sending.
		<AuthContext.Provider
			value={{ authed, loading, setAuthed, login, logout, register }}
		>
			{children}
		</AuthContext.Provider>
	);
};

// Finally creating the custom hook
export const useAuth = () => useContext(AuthContext);
