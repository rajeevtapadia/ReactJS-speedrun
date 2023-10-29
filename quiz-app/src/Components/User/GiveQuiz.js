import {Link, useLocation} from 'react-router-dom'

export default function GiveQuiz() {
	const location = useLocation()
	const quizData = location.state.quiz
	console.log(quizData)
	return (
		<p>GIve Quizz</p>
	)
}