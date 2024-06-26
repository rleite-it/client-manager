import { userInfo } from "@/services/User";
import { UserContexType, UserProps } from "@/types/User.types";
import React, { createContext, useContext, useEffect } from "react";

export const UserContext = createContext<UserContexType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = React.useState<UserProps | null>(null);

	const updateUser = (user: UserProps) => {
		setUser(user);
	};

	useEffect(() => {
		if (!user)
			userInfo().then((resp) =>
				setUser({
					email: resp.userInfo.email,
					firstName: resp.userInfo.firstName,
					lastName: resp.userInfo.lastName,
					questionnaires: resp.questionnaires,
				})
			);
	}, []);

	return (
		<UserContext.Provider value={{ user, updateUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => useContext(UserContext);
