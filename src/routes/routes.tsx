import { lazy } from "react";
import ProtectedRoute from "./protected-route";

const Dashboard = lazy(() => import("@/pages/dashboard"));
const ClientDetails = lazy(() => import("@/pages/client-details"));
const Profile = lazy(() => import("@/pages/profile"));
const Login = lazy(() => import("@/pages/login"));
const Error = lazy(() => import("@/pages/error"));

export const ROUTES = [
	{
		name: "dashboard",
		path: "/",
		element: (
			<ProtectedRoute>
				<Dashboard />
			</ProtectedRoute>
		),
		errorElement: <Error />,
	},
	{
		name: "client-details",
		path: "/client/:id",
		element: (
			<ProtectedRoute>
				<ClientDetails />
			</ProtectedRoute>
		),
	},
	{
		name: "profile",
		path: "/profile",
		element: (
			<ProtectedRoute>
				<Profile />
			</ProtectedRoute>
		),
	},
	{
		name: "login",
		path: "/login",
		element: <Login />,
	},
	{
		name: "notFound",
		path: "*",
		element: <Error />,
	},
];
