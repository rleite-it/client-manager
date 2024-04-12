import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CredentialsProps } from "@/services/Auth";
import { useAuth } from "@/hooks/useAuth";
import { Loader } from "lucide-react";

const RegisterForm = () => {
	const { loading, register } = useAuth();

	const [formData, setFormData] = useState<CredentialsProps>({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		securePasswordFlag: true,
	});
	const [error, setError] = useState<boolean>(false);
	const [errorMsg, setErrorMsg] = useState<string>(
		"Ocorreu um erro. Tente mais tarde!"
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setError(false);
		e.preventDefault();

		const result = await register(formData);
		if (!result) {
			setError(true);
			setErrorMsg(result.message);
		} else setError(false);
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			{error ? (
				<p className="w-full text-center mb-5 text-red-700 font-bold">
					{errorMsg}
				</p>
			) : (
				""
			)}
			<div className="grid gap-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="grid gap-2">
						<Label htmlFor="first-name">First name</Label>
						<Input
							id="first-name"
							placeholder="Max"
							required
							onChange={(e) => handleChange(e)}
							disabled={loading}
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="last-name">Last name</Label>
						<Input
							id="last-name"
							placeholder="Robinson"
							required
							onChange={(e) => handleChange(e)}
							disabled={loading}
						/>
					</div>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="m@example.com"
						required
						onChange={(e) => handleChange(e)}
						disabled={loading}
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						onChange={(e) => handleChange(e)}
						disabled={loading}
					/>
				</div>
				<Button type="submit" className="w-full">
					{loading ? <Loader className="animate-spin" /> : "Create an account"}
				</Button>
			</div>
		</form>
	);
};

export default RegisterForm;
