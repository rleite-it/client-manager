import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

const Navbar = () => {
	const { authed, logout } = useAuth();

	return (
		<div className="w-screen h-4 p-3 absolute top-0 flex gap-1 justify-end">
			<ModeToggle />
			{authed ? (
				<Button size="icon" variant="ghost" onClick={() => logout()}>
					<LogOut className="h-[1rem] w-[1rem]" />
				</Button>
			) : (
				""
			)}
		</div>
	);
};

export default Navbar;
