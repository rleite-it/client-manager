import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import ClientForm from "./client-form";

import { ClientProps } from "@/types/Client.types";
import { DialogClose } from "@radix-ui/react-dialog";

const AddClient = () => {
	const newClient: ClientProps = {
		id: Math.random(),
		fullName: "",
		email: "",
		phone: "",
		address: "",
		notes: [],
		schedule: [],
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="icon">
					<Plus />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader className="mb-6">
					<DialogTitle>Create Client</DialogTitle>
				</DialogHeader>
				<ClientForm client={newClient} type="new" />
			</DialogContent>
		</Dialog>
	);
};

export default AddClient;
