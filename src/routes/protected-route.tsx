import { Navigate } from "react-router-dom";
import { useAuth } from "./../hooks/useAuth";
import { AuthContextType } from "@/types/Auth.types";
import React from "react";

// We are taking in the component that should be rendered if the user is authed
// We are also passing the rest of the props to the <Route /> component such as
// exact & the path
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	// Getting the value from our cool custom hook
	const { authed } = useAuth() as AuthContextType;

	return authed ? (
		<div className="w-full h-screen flex justify-center pt-24 pb-24 p-4 xl:p-24 overflow-x-hidden">
			{children}
		</div>
	) : (
		<Navigate to="/login" />
	);
};

export default ProtectedRoute;
