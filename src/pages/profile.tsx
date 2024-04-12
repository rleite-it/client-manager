import React, { useEffect, useState } from "react";
import { CircleUserRound } from "lucide-react";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/hooks/useUser";

import { UserContexType, UserProps } from "@/types/User.types";

const Profile = () => {
	const { user, updateUser } = useUser() as UserContexType;
	const [userData, setUserData] = useState<UserProps>({
		email: "",
		firstName: "",
		lastName: "",
		questionnaires: "",
	});

	useEffect(() => {
		if (user) setUserData(user);
	}, [user]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const saveChanges = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		updateUser(userData);
	};

	return (
		<div className="flex flex-col gap-6 items-center">
			<Title title="Profile" />
			{!user ? (
				<>
					<Skeleton className="w-[6rem] h-[6rem] rounded-full" />
					<div className="grid gap-4">
						<div className="grid grid-cols-2 gap-4">
							<div className="grid gap-2">
								<Skeleton className="w-[200px] h-4" />
								<Skeleton className="w-[200px] h-9" />
							</div>
							<div className="grid gap-2">
								<Skeleton className="w-[200px] h-4" />
								<Skeleton className="w-[200px] h-9" />
							</div>
						</div>
						<div className="grid gap-2">
							<Skeleton className="w-[420px] h-4" />
							<Skeleton className="w-[420px] h-9" />
						</div>
						<div className="grid gap-2">
							<Skeleton className="w-[420px] h-4" />
							<Skeleton className="w-[420px] h-16" />
						</div>
						<Skeleton className="w-[420px] h-9" />
					</div>
				</>
			) : (
				<>
					<CircleUserRound className="w-[6rem] h-[6rem] mb-5" />
					<form onSubmit={(e) => saveChanges(e)}>
						<div className="grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="first-name">First name</Label>
									<Input
										id="first-name"
										name="firstName"
										value={userData.firstName}
										placeholder="Max"
										required
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="last-name">Last name</Label>
									<Input
										id="last-name"
										name="lastName"
										value={userData.lastName}
										placeholder="Robinson"
										required
										onChange={(e) => handleChange(e)}
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									name="email"
									value={userData.email}
									placeholder="m@example.com"
									required
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="message">Description:</Label>
								<Textarea
									id="message"
									name="questionnaires"
									value={userData.questionnaires}
									placeholder="Type your message here"
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<Button type="submit" className="w-full">
								Save
							</Button>
						</div>
					</form>
				</>
			)}
		</div>
	);
};

export default Profile;
