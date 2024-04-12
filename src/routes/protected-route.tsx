import { Navigate } from "react-router-dom";
import { useAuth } from "./../hooks/useAuth";

// We are taking in the component that should be rendered if the user is authed
// We are also passing the rest of the props to the <Route /> component such as
// exact & the path
const ProtectedRoute = ({ children }) => {
	// Getting the value from our cool custom hook
	const { authed } = useAuth();

	return authed ? (
		<div className="w-full h-screen flex justify-center p-24">{children}</div>
	) : (
		<Navigate to="/login" />
	);
};

export default ProtectedRoute;
