import { ClientContextType, ClientProps } from "@/types/Client.types";
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
					type: "Need",
					description: "This is a note about the client's needs.",
				},
				{
					id: 2,
					author: "John Doe",
					type: "Requirement",
					description: "This is a note about the client's requirements.",
				},
			],
			schedule: [
				{
					id: 1,
					day: new Date("2024-04-11"),
					hour: new Date("2024-04-11T09:00:00"),
					subject: "Meeting with client",
				},
				{
					id: 2,
					day: new Date("2024-04-12"),
					hour: new Date("2024-04-12T14:00:00"),
					subject: "Follow-up call",
				},
			],
		},
		{
			id: 2,
			fullName: "Audrey Lancelot",
			email: "john.doe@example.com",
			phone: "+1234567890",
			address: "123 Main Street, City, Country",
			notes: [
				{
					id: 1,
					author: "Jane Smith",
					type: "Need",
					description: "This is a note about the client's needs.",
				},
				{
					id: 2,
					author: "John Doe",
					type: "Requirement",
					description: "This is a note about the client's requirements.",
				},
			],
			schedule: [
				{
					id: 1,
					day: new Date("2024-04-11"),
					hour: new Date("2024-04-11T09:00:00"),
					subject: "Meeting with client",
				},
				{
					id: 2,
					day: new Date("2024-04-12"),
					hour: new Date("2024-04-12T14:00:00"),
					subject: "Follow-up call",
				},
			],
		},
		{
			id: 3,
			fullName: "John Doe",
			email: "john.doe@example.com",
			phone: "+1234567890",
			address: "123 Main Street, City, Country",
			notes: [
				{
					id: 1,
					author: "Jane Smith",
					type: "Need",
					description: "This is a note about the client's needs.",
				},
				{
					id: 2,
					author: "John Doe",
					type: "Requirement",
					description: "This is a note about the client's requirements.",
				},
			],
			schedule: [
				{
					id: 1,
					day: new Date("2024-04-11"),
					hour: new Date("2024-04-11T09:00:00"),
					subject: "Meeting with client",
				},
				{
					id: 2,
					day: new Date("2024-04-12"),
					hour: new Date("2024-04-12T14:00:00"),
					subject: "Follow-up call",
				},
			],
		},
		{
			id: 4,
			fullName: "John Doe",
			email: "john.doe@example.com",
			phone: "+1234567890",
			address: "123 Main Street, City, Country",
			notes: [
				{
					id: 1,
					author: "Jane Smith",
					type: "Need",
					description: "This is a note about the client's needs.",
				},
				{
					id: 2,
					author: "John Doe",
					type: "Requirement",
					description: "This is a note about the client's requirements.",
				},
			],
			schedule: [
				{
					id: 1,
					day: new Date("2024-04-11"),
					hour: new Date("2024-04-11T09:00:00"),
					subject: "Meeting with client",
				},
				{
					id: 2,
					day: new Date("2024-04-12"),
					hour: new Date("2024-04-12T14:00:00"),
					subject: "Follow-up call",
				},
			],
		},
		{
			id: 5,
			fullName: "John Doe",
			email: "john.doe@example.com",
			phone: "+1234567890",
			address: "123 Main Street, City, Country",
			notes: [
				{
					id: 1,
					author: "Jane Smith",
					type: "Need",
					description: "This is a note about the client's needs.",
				},
				{
					id: 2,
					author: "John Doe",
					type: "Requirement",
					description: "This is a note about the client's requirements.",
				},
			],
			schedule: [
				{
					id: 1,
					day: new Date("2024-04-11"),
					hour: new Date("2024-04-11T09:00:00"),
					subject: "Meeting with client",
				},
				{
					id: 2,
					day: new Date("2024-04-12"),
					hour: new Date("2024-04-12T14:00:00"),
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

	return (
		<ClientContext.Provider
			value={{
				clients,
				addClient,
				updateClient,
				removeClient,
				filterClient,
				getClient,
			}}
		>
			{children}
		</ClientContext.Provider>
	);
};

export const useClient = () => useContext(ClientContext);
