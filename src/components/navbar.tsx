import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { CircleUserRound, Home, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router";

const Navbar = () => {
	const navigate = useNavigate();
	const { authed, logout } = useAuth();

	return (
		<div className="w-screen h-4 p-3 absolute top-0 flex gap-1 justify-between">
			<Button size="icon" variant="ghost" onClick={() => navigate("/")}>
				<Home className="h-[1.2rem] w-[1.2rem]" />
			</Button>
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
					""
				)}
			</div>
		</div>
	);
};

export default Navbar;
