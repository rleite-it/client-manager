import React, { useEffect, useState } from "react";
import ClientsList from "@/components/clients-list";
import Title from "@/components/title";
import { Input } from "@/components/ui/input";
import { useClient } from "@/hooks/useClient";

import { ClientContextType, ClientProps } from "@/types/Client.types";
import AddClient from "@/components/add-client";

const Dashboard = () => {
	const { clients, filterClient } = useClient() as ClientContextType;

	const [list, setList] = useState<ClientProps[] | []>(clients ?? []);
	const [search, setSearch] = useState<string>("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		setList(filterClient(search));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [search, clients]);

	return (
		<div className="w-full md:w-[90%] lg:w-[80%] h-full flex flex-col gap-4">
			<Title title="Clients" />
			<div className="flex gap-6 mt-8 mb-4 justify-end">
				<Input
					className="max-w-[300px]"
					placeholder="Search client by name..."
					onChange={(e) => handleSearch(e)}
				/>
				<AddClient />
			</div>
			<ClientsList clients={list} />
		</div>
	);
};

export default Dashboard;
