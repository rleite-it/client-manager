import { useState } from "react";
import LoginForm from "@/components/login-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { Link, Navigate } from "react-router-dom";
import RegisterForm from "@/components/register-form";

interface CardHeaderProps {
	title: string;
	description: string;
}

const formInfo: { login: CardHeaderProps; register: CardHeaderProps } = {
	login: {
		title: "Login",
		description: "Enter your email below to login to your account",
	},
	register: {
		title: "Sign Up",
		description: "Enter your information to create an account",
	},
};

const CustomCardHeader = ({ title, description }: CardHeaderProps) => (
	<CardHeader>
		<CardTitle className="text-2xl">{title}</CardTitle>
		<CardDescription>{description}</CardDescription>
	</CardHeader>
);

export default function Login() {
	const { login, authed } = useAuth();

	const [signIn, setSignIn] = useState<boolean>(true);

	if (authed) return <Navigate to="/" />;
	else
		return (
			<div className="h-screen flex items-center">
				<Card className="mx-auto max-w-sm">
					<CustomCardHeader
						{...(signIn ? formInfo.login : formInfo.register)}
					/>
					<CardContent>
						{signIn ? (
							<>
								<LoginForm />
								<div className="mt-4 text-center text-sm">
									Don&apos;t have an account?{" "}
									<Link
										to="#"
										className="underline"
										onClick={() => setSignIn(false)}
									>
										Sign up
									</Link>
								</div>
							</>
						) : (
							<>
								<RegisterForm />
								<div className="mt-4 text-center text-sm">
									Already have an account?{" "}
									<Link
										to="#"
										className="underline"
										onClick={() => setSignIn(true)}
									>
										Sign in
									</Link>
								</div>
							</>
						)}
					</CardContent>
				</Card>
			</div>
		);
}
