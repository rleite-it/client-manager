import { useNavigate } from "react-router";
import { CircleUserRound, Home, LogOut } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";

import { AuthContextType } from "@/types/Auth.types";

const Navbar = () => {
	const navigate = useNavigate();
	const { authed, logout } = useAuth() as AuthContextType;

	return (
		<div
			className={`w-screen h-4 p-3 absolute top-0 flex gap-1 ${
				authed ? "justify-between" : "justify-end"
			}`}
		>
			{authed ? (
				<Button size="icon" variant="ghost" onClick={() => navigate("/")}>
					<Home className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			) : (
				<></>
			)}
			<div>
				<ModeToggle />
				{authed ? (
					<>
						<Button
							size="icon"
							variant="ghost"
							onClick={() => navigate("/profile")}
						>
							<CircleUserRound className="h-[1.2rem] w-[1.2rem]" />
						</Button>
						<Button size="icon" variant="ghost" onClick={() => logout()}>
							<LogOut className="h-[1.2rem] w-[1.2rem]" />
						</Button>
					</>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default Navbar;
