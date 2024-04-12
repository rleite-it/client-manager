import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftFromLine, Download, Loader } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientForm from "@/components/client-form";
import { Button } from "@/components/ui/button";
import { useClient } from "@/hooks/useClient";

import { ClientContextType, ClientProps } from "@/types/Client.types";

const ClientDetails = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { getClient, removeClient } = useClient() as ClientContextType;

	const [client, setClient] = useState<ClientProps | null>(null);

	useEffect(() => {
		const clientResult = getClient(Number(id));

		setClient(clientResult);
	}, []);

	const handleDelete = () => {
		removeClient(Number(id));

		navigate("/");
	};

	const downloadFile = ({ data, fileName, fileType }) => {
		// Create a blob with the data we want to download as a file
		const blob = new Blob([data], { type: fileType });
		// Create an anchor element and dispatch a click event on it
		// to trigger a download
		const a = document.createElement("a");
		a.download = fileName;
		a.href = window.URL.createObjectURL(blob);
		const clickEvt = new MouseEvent("click", {
			view: window,
			bubbles: true,
			cancelable: true,
		});
		a.dispatchEvent(clickEvt);
		a.remove();
	};

	const exportToJson = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		downloadFile({
			data: JSON.stringify(client),
			fileName: `${client?.fullName}.json`,
			fileType: "text/json",
		});
	};

	if (!client) {
		return (
			<div className="w-full md:w-[90%] lg:w-[80%] max-w-[1000px] h-full flex gap-8 border rounded-md p-5 justify-center items-center">
				<Loader className="animate-spin w-[4rem] h-[4rem]" />
			</div>
		);
	} else {
		return (
			<div className="w-full md:w-[90%] lg:w-[80%] max-w-[1000px] h-full flex gap-8 border rounded-md p-5 justify-between items-center relative">
				<Button
					variant="ghost"
					size="icon"
					className="absolute top-3 left-3"
					onClick={() => navigate(-1)}
				>
					<ArrowLeftFromLine />
				</Button>
				<div className="w-full flex flex-col gap-4 pl-7 pr-7">
					<ClientForm client={client} />
					<div className="flex gap-4">
						<Button
							className="w-full flex items-center gap-3"
							onClick={exportToJson}
						>
							<Download className="w-[1rem] h-[1rem]" />
							Export JSON
						</Button>
						<Button
							className="w-full"
							variant="destructive"
							onClick={() => handleDelete()}
						>
							Delete Client
						</Button>
					</div>
				</div>
				<Tabs defaultValue="notes" className="w-full max-w-[400px] h-full">
					<TabsList className="w-full">
						<TabsTrigger className="w-full" value="notes">
							Notes
						</TabsTrigger>
						<TabsTrigger className="w-full" value="meetings">
							Meetings
						</TabsTrigger>
					</TabsList>
					<TabsContent value="notes" className="flex-1 flex flex-col">
						<div className="">LIST OF NOTES</div>
						<div>ADD NOTE</div>
					</TabsContent>
					<TabsContent value="meetings" className="h-full">
						Change your password here.
					</TabsContent>
				</Tabs>
			</div>
		);
	}
};

export default ClientDetails;
