import Link, {LinkProps} from "next/link";
import {PropsWithChildren} from "react";

export const LinkComponent = (props: PropsWithChildren<LinkProps>) => (
	<Link
		className="text-primary-main text-sm font-semibold hover:text-primary transition-colors duration-200"
		{...props}
	>
		{props.children}
	</Link>
)
