//                                     Child component

import React from 'react'

const TodoItems = ({ text, completed, onToggle }) => {
  return (
    <>
      <div className='ml-[2.3rem] mt-[1rem] font-medium text-white capitalize text-2xl'>

        <li className='hover:cursor-pointer' onClick={onToggle} style={{ textDecoration: completed ? 'line-through' : 'none' }}>

          {text}
        </li>
      </div>
    </>
  )
}

export default TodoItems