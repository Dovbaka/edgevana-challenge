import {Icons} from "@/components";

export const HeaderSearch = () => (
	<div className="relative flex mt-4 md:mt-0 min-w-[240px]">
		<input
			type="text"
			className="bg-inherit font-semibold border border-secondary-light rounded-lg px-[17px] py-[13px] outline-none pl-[35px] text-secondary-dark placeholder:text-secondary-dark/50"
			placeholder="Search"
		/>

		<div className="absolute inset-y-0 left-0 flex items-center pl-3">
			<Icons.search className="min-w-[17px] w-[17px]" />
		</div>
	</div>
)
