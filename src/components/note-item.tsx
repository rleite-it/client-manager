import React from "react";

import { NoteProps } from "@/types/Client.types";

const NoteItem: React.FC<{ note: NoteProps }> = ({ note }) => {
	const getColor = () =>
		({
			need: "bg-green-700",
			requirement: "bg-orange-700",
			preference: "bg-blue-700",
		}[note.type]);

	return (
		<div
			className={`rounded-lg w-full h-[100px] ${getColor()} p-2 flex flex-col gap-2`}
		>
			<span className="w-full text-right font-bold">{note.author}</span>
			<span>{note.description}</span>
		</div>
	);
};

export default NoteItem;
