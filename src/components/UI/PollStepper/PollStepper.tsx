import {ChangeEvent, useState} from 'react';
import {PollAnswer} from "@/types";
import {QUESTIONS} from "@/helpers";
import {Button} from "@/components";
import {SubmitPoll} from "@/helpers/api";

export const PollStepper = () => {
	const [step, setStep] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState('');
	const [answers, setAnswers] = useState<PollAnswer[]>([]);

	const isLastAnswer = step === QUESTIONS.length - 1;
	const answerSubmitted = step >= QUESTIONS.length;

	const onSubmit = async () => {
		const res = await SubmitPoll(answers);

		if (res?.message) {
			alert(res.message)
		}
	};

	const onNext = async () => {
		if (selectedAnswer) {
			if (isLastAnswer) await onSubmit();

			const answer = {
				answer: selectedAnswer,
				question: QUESTIONS[step].question,
			};
			setAnswers((prevAnswers) => [...prevAnswers, answer]);
			setStep(prevStep => prevStep + 1);
			setSelectedAnswer('');

		}
	};

	const onSelectAnswer = (event: ChangeEvent<HTMLInputElement>) => {
		setSelectedAnswer(event.target.value);
	};

	const onReturn = () => {
		setSelectedAnswer('');
		setStep(0)
	}

	const stepWidth = (step / QUESTIONS.length) * 100

	return (
		<div className="bg-white rounded-xl shadow-xl sm:w-[680px] max-w-[680px]">
			<div className="p-3 sm:px-14 sm:py-8">
				<h4 className="text-lg sm:text-xl text-primary font-semibold">
					Setup Guide
				</h4>
				<p className="font-medium text-sm sm:text-base text-secondary-dark/70 mt-4">
					Unlock your highest potential with our personalized guide!
				</p>
				<p className="font-medium text-sm sm:text-base text-secondary-dark/70 mt-4">
					{step}/{QUESTIONS.length} Questions answered
				</p>
			</div>

			<div className="relative h-[3px] w-full bg-light">
				<div
					className="absolute top-0 left-0 h-full bg-primary-main"
					style={{width: `${stepWidth}%`}}
				/>
			</div>

			<div className="p-3 sm:px-14 sm:py-10">
				{answerSubmitted ? (
					<h3 className="text-primary text-lg font-semibold">
						Submitted successfully
					</h3>
				) : (
					<>
						<div className="flex gap-x-3 sm:gap-x-5 items-center">
							<div className="flex justify-center items-center bg-primary-main h-8 w-8 min-w-[32px] rounded-full text-white font-semibold cursor-default">
								{step + 1}
							</div>

							<p className="text-primary text-base sm:text-lg font-semibold">
								{QUESTIONS[step].question}
							</p>
						</div>

						<div className="flex flex-col gap-y-6 mt-6 sm:mt-10">
							{QUESTIONS[step].answers.map((answer) => (
								<label
									key={answer}
									htmlFor={answer}
									className="flex items-center text-sm sm:text-base cursor-pointer"
								>
									<input
										type="radio"
										id={answer}
										checked={selectedAnswer === answer}
										value={answer}
										onChange={onSelectAnswer}
										className="w-5 h-5 border border-secondary-dark rounded-full bg-white focus:outline-none focus:border-primary"
									/>
									<div className="ml-3">
                    <span
											className={`${
												selectedAnswer === answer
													? 'text-primary'
													: 'text-secondary-dark'
											} font-medium`}
										>
                      {answer}
                    </span>
									</div>
								</label>
							))}
						</div>
					</>
				)}

				{answerSubmitted ? (
					<Button className="mt-12" onClick={onReturn}>Return</Button>
				) : (
					<div className="flex sm:gap-6 flex-col sm:flex-row mt-12">
						<Button disabled>Cancel</Button>
						<Button onClick={onNext} disabled={!selectedAnswer}>
							{isLastAnswer ? 'Submit' : 'Next'}
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};
