export interface CredentialsProps {
	firstName?: string;
	lastName?: string;
	email: string;
	password: string;
	securePasswordFlag?: boolean;
}

export type AuthContextType = {
	authed: boolean;
	loading: boolean;
	login: (credentials: CredentialsProps) => void;
	logout: () => void;
	register: (data: CredentialsProps) => void;
};
