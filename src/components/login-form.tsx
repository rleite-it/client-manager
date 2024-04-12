import React from "react";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "@/hooks/useAuth";
import { Label } from "./ui/label";
import { useState } from "react";
import { CredentialsProps } from "@/services/Auth";
import { Loader } from "lucide-react";

const LoginForm = () => {
	const { loading, login } = useAuth();

	const [formData, setFormData] = useState<CredentialsProps>({
		email: "",
		password: "",
	});
	const [error, setError] = useState<boolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setError(false);

		const result = await login(formData);

		if (!result) setError(true);
		else setError(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			{error ? (
				<p className="w-full text-center mb-5 text-red-700 font-bold">
					Ocorreu um erro. Tente mais tarde!
				</p>
			) : (
				""
			)}
			<div className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						name="email"
						placeholder="m@example.com"
						required
						onChange={(e) => handleChange(e)}
						disabled={loading}
					/>
				</div>
				<div className="grid gap-2">
					<div className="flex items-center">
						<Label htmlFor="password">Password</Label>
						<Link to="#" className="ml-auto inline-block text-sm underline">
							Forgot your password?
						</Link>
					</div>
					<Input
						id="password"
						type="password"
						name="password"
						required
						onChange={(e) => handleChange(e)}
						disabled={loading}
					/>
				</div>
				<Button type="submit" className="w-full">
					{loading ? <Loader className="animate-spin" /> : "Login"}
				</Button>
			</div>
		</form>
	);
};

export default LoginForm;
