'use client'
import {useState} from 'react';
import {DiscoverTabContent} from "@/components";
import {DASHBOARD_TABS} from "@/helpers";

const Discover = () => {
	const [selectedTab, setSelectedTab] = useState<string>(DASHBOARD_TABS[DASHBOARD_TABS.length - 1]);
	return (
		<>
			<div className="bg-white overflow-y-auto rounded-lg shadow-xl px-4 flex items-center gap-x-10 mt-6">
				{DASHBOARD_TABS.map((tab) => {
					const isActive = selectedTab === tab;
					return (
					<div key={tab} className="flex flex-col">
						<button
							key={tab}
							onClick={() => setSelectedTab(tab)}
							className={`py-5 text-sm font-semibold whitespace-nowrap ${isActive && 'text-primary-main mb-[-1px]'}`}
						>
							{tab}
						</button>

						{isActive && (
							<div className="bg-gradient-to-r from-blue-900 to-transparent h-[1px] w-full" />
						)}
					</div>
				)})}
			</div>
			<DiscoverTabContent selectedTab={selectedTab} />
		</>
	);
};

export default Discover;
