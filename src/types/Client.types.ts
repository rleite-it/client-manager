export interface NoteProps {
	id: number;
	author: string;
	type: "need" | "requirement" | "preference";
	description: string;
}

export interface ImportantDateProps {
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
	addNote: (clientID: number, note: NoteProps) => void;
	addMeeting: (clientID: number, meeting: ImportantDateProps) => void;
};
