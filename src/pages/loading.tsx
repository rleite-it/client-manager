import { Loader } from "lucide-react";

const Loading = () => {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<Loader className="animate-spin w-[4rem] h-[4rem]" />
		</div>
	);
};

export default Loading;
