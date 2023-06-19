import Image from "next/image";
import {CaretRight} from '@/helpers/images'
import {Carousel} from "flowbite-react";
import {CarouselSlide} from "@/components";

export const CarouselContainer = () => {
	return (
		<div className="relative h-full flex flex-col justify-center">
			<div className="relative md:pt-24 flex flex-col items-end justify-center h-auto">
				<Carousel
					leftControl={(
						<div className="relative flex justify-center items-center w-10 h-10 rounded-full border border-primary-main">
							<Image
								src={CaretRight} alt="caret"
								className="rotate-180"
							/>
						</div>
					)}
					rightControl={(
						<div className="relative flex justify-center items-center w-10 h-10 rounded-full border border-primary-main">
							<Image src={CaretRight} alt="caret" />
						</div>
					)}
					indicators={false}
					slide={false}
					suppressHydrationWarning
					className="carousel"
				>
					<CarouselSlide/>
					<CarouselSlide/>
					<CarouselSlide/>
				</Carousel>
			</div>

			<div className="relative flex flex-col mt-14 mr-2 gap-x-4 pl-4 max-w-[80%] md:pl-8">
				<p className="text-primary font-semibold text-[22px]">
					Accelerating the next generation of the internet
				</p>
				<p className="text-secondary-dark text-sm mt-3 w-[90%]">
					Participate in over 100+ protocols with one click | Zero to
					operator in 60 seconds
				</p>
			</div>
		</div>
	)
}
