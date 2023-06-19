import {FC, ReactNode} from "react";

type SignUpLayoutProps = {
	leftContent: ReactNode,
	rightContent: ReactNode
}

export const SignUpLayout: FC<SignUpLayoutProps> = ({ leftContent, rightContent}) => (
	<div className="flex flex-col min-h-screen h-auto md:h-auto md:flex-row">
		<div className="p-4 flex md:flex-1 justify-center items-center pt-20 pb-10 md:pb-4 drop-shadow-lg">
			{leftContent}
			<footer className="bottom-0 absolute">
				<p className="text-center text-xs py-4">© Edgevana 2022</p>
			</footer>
		</div>
		<div className="bg-gradient-to-r from-[#F2F4FC] to-white h-screen flex flex-1 pb-10">
			{rightContent}
		</div>
	</div>
)
