export interface UserProps {
	email: string;
	firstName: string;
	lastName: string;
	questionnaires: string;
}

export type UserContexType = {
	user: UserProps | null;
	updateUser: (user: UserProps) => void;
};
