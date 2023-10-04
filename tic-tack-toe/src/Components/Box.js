export default function Box({handleClick, classs}){
	return(
		<div onClick={handleClick} className={classs}></div>
	)
}