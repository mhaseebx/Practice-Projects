import React from 'react'

const Challenge1 = () => {
  const name = 'Haseeb'
  const date = new Date().toLocaleDateString()

  const time = new Date().toLocaleTimeString()

  return (
    <>
      <div className='w-[100%] h-full flex flex-col justify-center items-center'>
        <h1 className='text-xl bg-amber-400'>My name is {name}</h1>

        <p>today date is {date}</p>

        <p>Current time is {time}</p>
      </div>
    </>
  )
}

export default Challenge1