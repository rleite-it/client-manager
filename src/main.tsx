import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/hooks/useAuth.tsx";
import { UserProvider } from "@/hooks/useUser.tsx";
import { ClientProvider } from "@/hooks/useClient.tsx";
import App from "./App.tsx";

import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<BrowserRouter>
				<AuthProvider>
					<UserProvider>
						<ClientProvider>
							<App />
						</ClientProvider>
					</UserProvider>
				</AuthProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
