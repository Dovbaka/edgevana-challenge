import {useRouter} from "next/navigation";
import {Icons} from "@/components";

export const useSidebar = () => {
	const router = useRouter();
	return [
		{
			title: 'Nodes',
			icon: Icons.server,
			action: () => router.push('/main/server'),
		},
		{
			title: 'Dashboard',
			icon: Icons.dashboard,
			action: () => router.push('/main/dashboard'),
		},
		{
			title: 'Ecosystem',
			icon: Icons.ecosystem,
			action: () => router.push('/main/ecosystem'),
		},
		{
			title: 'Analytics',
			icon: Icons.analytics,
			action: () => router.push('/main/analytics'),
		},
		{
			title: 'Teams',
			icon: Icons.teams,
			action: () => router.push('/main/teams'),
		},
		{
			title: 'Discover Web3',
			icon: Icons.discover,
			action: () => router.push('/main/discover'),
		},
	];
}
