import {PollAnswer, RegisterFormProps, User} from "@/types";


export const RegisterUser = async (
	data: RegisterFormProps
): Promise<User> => {
	const response = await fetch('/api/auth',{
		method: 'POST',
		body: JSON.stringify(data)
	})

	return response.json()
};

export const SubmitPoll = async (data: PollAnswer[]): Promise<{ message: string }> => {
	const response = await fetch('/api/poll',{
		method: 'POST',
		body: JSON.stringify(data)
	})

	return response.json()
};
