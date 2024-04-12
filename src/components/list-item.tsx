import React from "react";
import { useNavigate } from "react-router-dom";
import { TableCell, TableRow } from "./ui/table";
import { Button } from "./ui/button";

import { ClientProps } from "@/types/Client.types";

const ListItem: React.FC<{ client: ClientProps }> = ({ client }) => {
	const navigate = useNavigate();

	return (
		<TableRow key={`client-${client.id}`}>
			<TableCell className="font-medium">{client.fullName}</TableCell>
			<TableCell>{client.email}</TableCell>
			<TableCell>{client.phone}</TableCell>
			<TableCell className="text-right text-ellipsis">
				{client.address}
			</TableCell>
			<TableCell className="text-center">
				<Button
					variant="outline"
					onClick={() => navigate(`/client/${client.id}`)}
				>
					View Details
				</Button>
			</TableCell>
		</TableRow>
	);
};

export default ListItem;
