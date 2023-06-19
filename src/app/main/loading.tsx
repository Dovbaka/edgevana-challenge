"use client"
import {Icons} from "@/components";

const Loading = () => {
	return (
		<div className="w-full h-screen flex flex-1 justify-center items-center">
			<Icons.loader className={`w-28 h-28`} />
		</div>
	)
};

export default Loading;
