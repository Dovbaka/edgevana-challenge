import {useForm} from "react-hook-form";
import {RegisterFormProps} from "@/types";
import {Button, FormInput, LinkComponent} from "@/components";
import {yupResolver} from '@hookform/resolvers/yup';
import {RegisterValidator} from "@/validators";
import {useAuth} from "@/context";
import {RegisterUser} from "@/helpers/api";
import {useState} from "react";

export const RegisterForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormProps>({
		mode: 'onSubmit',
		resolver: yupResolver(RegisterValidator),
	});
	const { login } = useAuth()
	const onSubmit = async (data: RegisterFormProps) => {
		setIsLoading(true)
		try {
			const result = await RegisterUser(data)

			if (result) {
				login({
					email: data.email,
					id: 'asd',
					firstName: data.firstName,
					lastName: data.lastName,
					username: data.username,
				})
			}
		} catch (e) {
			console.warn(e)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col md:w-[410px] max-w-[410px]"
		>
			<div className="flex gap-x-3">
				<FormInput
					name="firstName"
					type="text"
					label="First Name"
					register={register}
					errors={errors}
					required
				/>
				<FormInput
					name="lastName"
					type="text"
					label="Last Name"
					register={register}
					errors={errors}
					required
				/>
			</div>

			<FormInput
				name="username"
				type="text"
				label="Username"
				register={register}
				errors={errors}
				required
			/>

			<FormInput
				name="email"
				type="email"
				label="E-mail"
				placeholder="E-mail"
				register={register}
				errors={errors}
				required
			/>

			<FormInput
				name="password"
				type="password"
				label="Password"
				placeholder="Password"
				register={register}
				errors={errors}
				required
			/>
			<div className="flex flex-row space-x-4">
				<div className="flex flex-1 h-2 bg-gradient-to-r from-[#5268D3] to-[#435ACB] rounded-md" />
				<div className="flex flex-1 h-2 bg-gradient-to-r from-[#5268D3] to-[#435ACB] rounded-md" />
				<div className="flex flex-1 h-2 bg-light rounded-md" />
			</div>
			<div className="mt-6">
				<FormInput
					name="terms"
					type="checkbox"
					register={register}
					errors={errors}
					required
					label={(
						<p className="font-medium text-md">
							{`I certify that i am 18 years of age or older, i agree to the to Edgevana\`s `}
							<LinkComponent href="#">Terms of Use</LinkComponent>
							{`, and i have read the `}
							<LinkComponent href="#">Privacy Policy.</LinkComponent>
						</p>
					)}
				/>
			</div>
			<Button type="submit" className="pt-4 pb-4" disabled={isLoading}>Sign Up</Button>
		</form>
	)
}
