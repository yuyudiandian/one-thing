import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

interface  prop {
	thing: string
	handleSubmit: any
	handleInput: any
}

const Form: React.FC<prop> = ({ thing, handleSubmit, handleInput }: prop) => {
	return (
		<>
			<h1 className="text-3xl sm:text-6xl font-bold text-center">What is your "One Thing"?</h1>
			<form className="flex ring-4 rounded-md ring-slate-200 dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800" onSubmit={handleSubmit}>
				<input type="text" className="bg-inherit rounded-md font-sans text-slate-800 py-2 pr-6 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 apperance-none w-full" placeholder="Enter one thing" autoFocus maxLength={64} value={thing} onInput={handleInput} />
				<button className="bg-inherit rounded-md font-sans text-slate-800 py-2 pr-6 focus:outline-none focus:text-text-600 hover:text-teal-600">
					<ArrowRightCircleIcon className="h-12 w-12 text-blue-500" />
				</button>
			</form>
		</>
	)
}

export default Form
