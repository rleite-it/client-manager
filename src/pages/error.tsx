import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";
import { useNavigate } from "react-router";

const Error = () => {
	const navigate = useNavigate();

	return (
		<div className="w-screen h-screen absolute z-10 bg-background flex flex-col items-center justify-center gap-7">
			<div className="flex items-center gap-4">
				<span className="font-bold text-3xl">404</span>
				<div className="min-h-[4rem] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
				<span className="font-bold text-3xl">Something went wrong...</span>
			</div>
			<Button onClick={() => navigate("/")} className="flex gap-3 font-bold">
				<ArrowLeftFromLine />
				Voltar Atrás
			</Button>
		</div>
	);
};

export default Error;
