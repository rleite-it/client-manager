/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ClientProps } from "@/types/Client.types";
import ListItem from "./list-item";

const ClientsList: React.FC<{ clients: ClientProps[] }> = ({ clients }) => {
	return (
		<div className="w-full rounded-md border p-4">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="m-w-[200px]">Name</TableHead>
						<TableHead className="m-w-[200px]">Email</TableHead>
						<TableHead className="m-w-[100px]">Phone</TableHead>
						<TableHead className="m-w-[100px] text-right">Address</TableHead>
						<TableHead className="m-w-[200px]"></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{clients.length ? (
						clients.map((client) => (
							<ListItem key={`client-${client.id}`} client={client} />
						))
					) : (
						<></>
					)}
				</TableBody>
			</Table>
		</div>
	);
};

export default ClientsList;
