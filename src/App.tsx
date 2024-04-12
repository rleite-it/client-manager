import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "@/pages/loading";
import Navbar from "@/components/navbar";
import { ROUTES } from "@/routes/routes";

function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Navbar />
			<Routes>
				{ROUTES.map((route) => (
					<Route
						key={route.name}
						path={route.path}
						element={route.element}
						errorElement={route.errorElement}
					/>
				))}
			</Routes>
		</Suspense>
	);
}

export default App;
