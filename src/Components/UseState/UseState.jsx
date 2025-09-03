import React, {useState} from 'react'

const UseState = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
    <div style={{display:'flex',justifyContent:'center', alignItems:'center' , flexDirection:'column', fontSize:'20px', marginTop:'20%'}}>
      <h1>{count}</h1>

      <button style={{backgroundColor:'aqua', width:'6rem'}} onClick={increment}>Increment</button>
      
      <button style={{backgroundColor:'purple', width:'6rem'}} onClick={decrement}>Decrement</button>
    </div>
    </>
  )
}

export default UseState