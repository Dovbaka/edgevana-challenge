import Image from "next/image";
import {FC, useMemo} from "react";
import {AccountType} from "@/types";

type AccountTypeSelectorProps = {
	icon: typeof import("*.svg");
	title: AccountType;
	activeType?: AccountType;
	description: string;
	onClick: (value: AccountType) => void
}
export const AccountTypeSelector: FC<AccountTypeSelectorProps> = ({
	icon,
	title,
	description,
	onClick,
	activeType
}) => {
	const isActive = useMemo(() => activeType == title, [activeType, title]);
	const hoverState = 'hover:border-primary-light hover:bg-light';
	const activeState = isActive ? 'border-primary-main bg-light' : ''

	return(
		<div
			className={`px-8 py-5 max-w-[400px] flex gap-x-6 border-[1.5px] border-secondary/50 rounded-lg cursor-pointer duration-300 ${hoverState} ${activeState}`}
			onClick={() => onClick(title)}
		>
			<div className="w-7 h-6 relative mt-2 mr-4">
				<Image src={icon} alt={title} fill className="min-w-[28px] h-full"/>
			</div>
			<div>
				<p className="text-base text-primary font-semibold mb-[10px]">{title}</p>
				<p className="text-sm">{description}</p>
			</div>
		</div>
	)
}

