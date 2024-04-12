import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import React from "react";

const Dashboard = () => {
	const { logout } = useAuth();

	return (
		<div>
			Dashboard (PROTECTED)
			<Button variant="destructive" onClick={() => logout()}>
				Logout
			</Button>
		</div>
	);
};

export default Dashboard;
