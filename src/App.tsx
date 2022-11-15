import { useState, useEffect } from 'react'

import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

import CustomForm from './components/customForm'
import OneThing from './components/oneThing'
import './App.css'

function getSuccessMessage() { 
    const messages = ['Congratulation!', "UP!UP!", "Great Job!"]
    return messages[Math.floor(Math.random()*messages.length)]
}

function App() {
	const [thing, setThing] = useState('')
	const [isComplated, setIsComplated] = useState(false)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		setIsComplated(true)
	}

	const handleInput = (e: any) => {
		console.log(e)
		setThing(e.target.value)
	}

	const handleCompletedThing = async (e: any) => {
		e.target.setAttribute('disabled', true)
        setThing(getSuccessMessage())
        await jsConfetti.addConfetti({
			emojis: ['⚡️', '💥', '✨', '💫', '🌸']
		})
        e.target.removeAttribute('disabled')
        setThing('')
        setIsComplated(false)
	}

	return (
		<main
			className="grid place-items-center min-h-screen bg-gradient-t-b from-slate-100 to-slate-200 dark:from-slate-800 
            dark:to-slate-900 text-slate-900 dark:text-slate-200 "
		>
			<div className="grid place-items-center gap-8 m-8">
				{!isComplated && <CustomForm thing={thing} handleSubmit={handleSubmit} handleInput={handleInput} />}
				{isComplated && <OneThing thing={thing} handleCompletedThing={handleCompletedThing} />}
				<canvas id="my-canvas"></canvas>
			</div>
		</main>
	)
}

export default App
