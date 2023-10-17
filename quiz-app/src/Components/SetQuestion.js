import React from 'react'

const SetQuestion = () => {
  return (
    <div className='flex flex-col space-y-4'>
        <textarea placeholder='question'></textarea>
        <input name='1' placeholder='option 1'></input>
        <input name='2' placeholder='option 2'></input>
        <input name='3' placeholder='option 3'></input>
        <input name='4' placeholder='option 4'></input>
    </div>
  )
}

export default SetQuestion