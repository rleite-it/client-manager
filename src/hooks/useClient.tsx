import React, { createContext, useContext } from "react";

export const ClientContext = createContext(null);

export const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <ClientContext.Provider value={{}}>{children}</ClientContext.Provider>;
};

export const useClient = () => useContext(ClientContext);
