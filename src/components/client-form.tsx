import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useClient } from "@/hooks/useClient";

import { ClientContextType, ClientProps } from "@/types/Client.types";

const ClientForm: React.FC<{ client: ClientProps }> = ({ client }) => {
	const { updateClient } = useClient() as ClientContextType;

	const [formData, setFormData] = useState<ClientProps>(client);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const obj = {
			...formData,
			notes: client.notes,
			schedule: client.schedule,
		};

		updateClient(obj);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="grid gap-4">
				<div className="grid grid-cols-5 gap-4">
					<div className="grid col-span-3 gap-2">
						<Label htmlFor="full-name">Full name</Label>
						<Input
							id="full-name"
							name="fullName"
							value={formData.fullName}
							placeholder="Max"
							onChange={(e) => handleChange(e)}
							required
						/>
					</div>
					<div className="grid col-span-2 gap-2">
						<Label htmlFor="phone">Phone</Label>
						<Input
							id="phone"
							name="phone"
							value={formData.phone}
							placeholder="+351967452546"
							onChange={(e) => handleChange(e)}
							required
						/>
					</div>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						name="email"
						value={formData.email}
						placeholder="m@example.com"
						onChange={(e) => handleChange(e)}
						required
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="address">Address</Label>
					<Input
						id="address"
						name="address"
						value={formData.address}
						placeholder="m@example.com"
						onChange={(e) => handleChange(e)}
						required
					/>
				</div>
				<Button type="submit" className="w-full">
					Save Changes
				</Button>
			</div>
		</form>
	);
};

export default ClientForm;
