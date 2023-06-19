import {PollStepper} from "@/components/UI/PollStepper/PollStepper";
import {DASHBOARD_TABS} from '@/helpers'
import {FC} from "react";

type DashboardTabContentProps = {
	selectedTab: string
}
export const DiscoverTabContent: FC<DashboardTabContentProps> = ({ selectedTab })  => {
	switch (selectedTab) {
		case DASHBOARD_TABS[5]:
			return (
				<div className="flex justify-center items-center mt-8 md:mt-16">
					<PollStepper/>
				</div>
			)
		default:
			return <></>
	}
}
