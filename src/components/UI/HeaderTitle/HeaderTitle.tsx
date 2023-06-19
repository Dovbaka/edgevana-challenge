'use client'
import {Icons} from "@/components";
import {FC} from "react";

type HeaderTitleProps = {
	title: string,
	subtitle: string
}

export const HeaderTitle: FC<HeaderTitleProps> = ({title, subtitle}) => (
	<div className="flex items-center gap-x-5">
		<div className="bg-white rounded-full hidden md:flex items-center justify-center h-[52px] w-[52px]">
			<Icons.discover className="min-w-[24px] w-[24px]" />
		</div>
		<div>
			<p className="text-primary text-xl font-semibold">
				{title}
			</p>
			<p className="text-secondary-dark text-xs font-semibold">
				{subtitle}
			</p>
		</div>
	</div>
)
