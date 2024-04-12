import { lazy } from "react";
import ProtectedRoute from "./protected-route";

const Dashboard = lazy(() => import("@/pages/dashboard"));
const Login = lazy(() => import("@/pages/login"));
const Error = lazy(() => import("@/pages/error"));

export const ROUTES = [
	{
		path: "/",
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		),
		errorElement: <Error />,
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />,
	},
];
