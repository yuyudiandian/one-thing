import CustomButton from './customButton'

interface prop {
	thing: string
	handleCompletedThing: (e: any) => void
}

const OneThing: React.FC<prop> = ({ thing, handleCompletedThing }: prop) => {
	return (
		<>
			<p className="text-3xl sm:text-6xl font-bold text-center">{thing}</p>
			<CustomButton text="Mark Done" handleCompletedThing={ handleCompletedThing } />
		</>
	)
}

export default OneThing
