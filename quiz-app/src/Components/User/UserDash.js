import {useState} from "react";
import {Link, useLocation} from 'react-router-dom'
import { db } from '../../firebase'
import { getDoc, query, collection, where, doc } from 'firebase/firestore'

function UserDash({ user }) {
	const [code, setCode] = useState('')
	const [quiz, setQuiz] = useState('')
	const [error, setError] = useState('')
	
	const quizCodeHandler = async () => {
		setError('');
		if(code === ''){
			setError('Enter a valid code')
			return;
		}
		const [adminID, quizID] = code.split('$');
		console.log(adminID, quizID)
		const quizRef = doc(db, `Admins/${adminID}/Quizes/${quizID}`);
		const quizSnapshot = await getDoc(quizRef);
		if(!quizSnapshot.exists()){
			setError('Enter correct quiz code');
			return;
		}
		setQuiz(quizSnapshot.data())
		console.log(quizSnapshot.data())
	}
	
	return (
		<>
			<div className={'flex flex-col h-screen justify-center items-center'}>
				{error && <div class="alert alert-primary" role="alert">
					{error}
			</div>}
				<input className={'w-21rem text-center form-control'} onChange={(e) => setCode(e.target.value.trim())} placeholder={'Enter quiz code'}></input>
				<button className={'btn btn-primary'} onClick={quizCodeHandler}><Link to={{pathname: '/user/quiz', state: {quiz}}}>Give Quiz</Link></button>
			</div>
		</>
	)
}

export default UserDash;
