import React from "react";

const Title: React.FC<{ title: string }> = ({ title }) => {
	return <p className="w-full text-center font-bold text-3xl">{title}</p>;
};

export default Title;
