import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeftFromLine, Download, Loader } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import ClientForm from "@/components/client-form";
import { Button } from "@/components/ui/button";
import NoteItem from "@/components/note-item";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { useClient } from "@/hooks/useClient";

import { ClientContextType, ClientProps } from "@/types/Client.types";
import MeetingItem from "@/components/meeting-item";

const ClientDetails = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const user = JSON.parse(sessionStorage.getItem("user") ?? "");
	const { getClient, removeClient, addNote } = useClient() as ClientContextType;

	const [client, setClient] = useState<ClientProps | null>(null);
	const [note, setNote] = useState({
		id: Math.random(),
		author: `${user.firstName} ${user.lastName}`,
		type: "need",
		description: "",
	});

	useEffect(() => {
		const clientResult = getClient(Number(id));

		setClient(clientResult);
	}, []);

	const handleNoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};

	const handleNoteType = (noteType: string) => {
		setNote({ ...note, type: noteType });
	};

	const submitNote = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		addNote(Number(id), note);

		setNote({
			id: Math.random(),
			author: `${user.firstName} ${user.lastName}`,
			type: "",
			description: "",
		});
	};

	const handleDelete = () => {
		removeClient(Number(id));

		navigate("/");
	};

	const downloadFile = ({
		data,
		fileName,
		fileType,
	}: {
		data: string;
		fileName: string;
		fileType: string;
	}) => {
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
					<TabsContent value="notes" className="flex flex-col">
						<ScrollArea className="h-[450px] p-4">
							<div className="flex flex-col gap-y-3">
								{client.notes.map((note) => (
									<NoteItem key={`note-${note.id}`} note={note} />
								))}
							</div>
						</ScrollArea>
						<form className="w-full p-4" onSubmit={(e) => submitNote(e)}>
							<div className="grid gap-4">
								<div className="grid gap-2">
									<Textarea
										id="note"
										className="resize-none"
										name="description"
										placeholder="What's the note?"
										rows={4}
										required
										value={note.description}
										onChange={(e) => handleNoteChange(e)}
									/>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div className="grid">
										<Select
											required
											value={note.type}
											onValueChange={(e) => handleNoteType(e)}
										>
											<SelectTrigger>
												<SelectValue placeholder="Type" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="need">Need</SelectItem>
												<SelectItem value="requirement">Requirement</SelectItem>
												<SelectItem value="preference">Preference</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div className="grid">
										<Button>Add Note</Button>
									</div>
								</div>
							</div>
						</form>
					</TabsContent>
					<TabsContent value="meetings" className="h-full">
						<ScrollArea className="h-[600px] p-4">
							<div className="flex flex-col gap-y-3">
								{client.schedule.map((meeting) => (
									<MeetingItem
										key={`meeting-${meeting.id}`}
										meeting={meeting}
									/>
								))}
							</div>
						</ScrollArea>
					</TabsContent>
				</Tabs>
			</div>
		);
	}
};

export default ClientDetails;
