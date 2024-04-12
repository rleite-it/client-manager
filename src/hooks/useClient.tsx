import {
	ClientContextType,
	ClientProps,
	ImportantDateProps,
	NoteProps,
} from "@/types/Client.types";
import React, { createContext, useContext, useState } from "react";

export const ClientContext = createContext<ClientContextType | null>(null);

export const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [clients, setClients] = useState<ClientProps[]>([
		{
			id: 1,
			fullName: "John Doe",
			email: "john.doe@example.com",
			phone: "+1234567890",
			address: "123 Main Street, City, Country",
			notes: [
				{
					id: 1,
					author: "Jane Smith",
					type: "need",
					description: "This is a note about the client's needs.",
				},
				{
					id: 2,
					author: "John Doe",
					type: "requirement",
					description: "This is a note about the client's requirements.",
				},
				{
					id: 3,
					author: "Jane Smith",
					type: "preference",
					description: "This is a note about the client's preferences.",
				},
				{
					id: 4,
					author: "John Doe",
					type: "requirement",
					description: "This is a note about the client's requirements.",
				},
				{
					id: 5,
					author: "Jane Smith",
					type: "need",
					description: "This is a note about the client's needs.",
				},
				{
					id: 6,
					author: "John Doe",
					type: "requirement",
					description: "This is a note about the client's requirements.",
				},
			],
			schedule: [
				{
					id: 1,
					date: new Date("2024-04-11T09:00:00"),
					subject: "Meeting with client",
				},
				{
					id: 2,
					date: new Date("2024-04-12T14:00:00"),
					subject: "Follow-up call",
				},
				{
					id: 3,
					date: new Date("2024-04-14T14:00:00"),
					subject: "Follow-up call",
				},
			],
		},
	]);

	const getClient = (clientID: number): ClientProps => {
		return clients.filter((client) => client.id === clientID)[0];
	};

	const filterClient = (name: string) => {
		return clients.filter((client) =>
			client.fullName.toLowerCase().includes(name.toLowerCase())
		);
	};

	const addClient = (client: ClientProps) => {
		setClients([...clients, client]);
	};

	const updateClient = (client: ClientProps) => {
		const idx = clients.findIndex((clt) => clt.id === client.id);

		const finalArr = clients;
		finalArr.splice(idx, 1, client);

		setClients(finalArr);
	};

	const removeClient = (clientID: number) => {
		const idx = clients.findIndex((client) => client.id === clientID);

		const finalArr = clients;
		finalArr.splice(idx, 1);

		setClients(finalArr);
	};

	const addNote = (clientID: number, note: NoteProps): ClientProps => {
		const finalArr = clients.reduce((acc, curr) => {
			if (curr.id === clientID) {
				let aux = curr;
				aux.notes.push(note);

				acc.push(aux);
				return acc;
			}

			acc.push(curr);
			return acc;
		}, []);
		setClients(finalArr);

		const client = getClient(clientID);

		return client;
	};

	const addMeeting = (clientID: number, meeting: ImportantDateProps) => {};

	return (
		<ClientContext.Provider
			value={{
				clients,
				addClient,
				updateClient,
				removeClient,
				filterClient,
				getClient,
				addNote,
				addMeeting,
			}}
		>
			{children}
		</ClientContext.Provider>
	);
};

export const useClient = () => useContext(ClientContext);
