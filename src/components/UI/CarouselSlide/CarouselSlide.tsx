import Image from "next/image";
import {Chats, GeneralInfo} from '@/helpers/images'

export const CarouselSlide = () => (
	<div className="duration-700 ease-in-out w-[70%]">
		<div className="relative bg-white p-4 rounded-3xl left-[100px]">
			<Image src={GeneralInfo} alt="general info"/>
			<div className="absolute -bottom-12 -left-10">
				<div className="relative w-[35%] bg-white p-2 rounded-3xl">
					<Image src={Chats} alt="chats" />
				</div>
			</div>
		</div>
	</div>
)
