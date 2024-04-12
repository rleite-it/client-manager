interface NoteProps {
	id: number;
	author: string;
	type: "Need" | "Requirement" | "Preference";
	description: string;
}

interface ImportantDateProps {
	id: number;
	day: Date;
	hour: Date;
	subject: string;
}

export interface ClientProps {
	id: number;
	fullName: string;
	email: string;
	phone: string;
	address: string;
	notes: NoteProps[] | [];
	schedule: ImportantDateProps[] | [];
}

export type ClientContextType = {
	clients: ClientProps[];
	getClient: (clientID: number) => ClientProps;
	filterClient: (name: string) => ClientProps[] | [];
	addClient: (client: ClientProps) => void;
	updateClient: (client: ClientProps) => void;
	removeClient: (clientID: number) => void;
};
