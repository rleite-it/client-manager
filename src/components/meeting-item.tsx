import React from "react";
import { ImportantDateProps } from "@/types/Client.types";
import { formatDate, isPastDue } from "@/lib/dateUtils";

const MeetingItem: React.FC<{ meeting: ImportantDateProps }> = ({
	meeting,
}) => {
	const due = isPastDue(meeting.date);

	const styles = due
		? "border rounded-lg w-full h-[100px] p-2 flex flex-col gap-2 bg-stone-900 text-zinc-500 blur-sm transition hover:blur-none"
		: "border rounded-lg w-full h-[100px] p-2 flex flex-col gap-2";

	return (
		<div className={styles}>
			<span className="w-full text-right font-bold">
				{formatDate(meeting.date)}
			</span>
			<span className="pl-3">{meeting.subject}</span>
		</div>
	);
};

export default MeetingItem;
