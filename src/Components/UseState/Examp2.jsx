import React, { useState } from 'react'

const Examp2 = () => {
    const [text, setText] = useState('');

    const handleInput = (e) => {
        setText(e.target.value);
    }

    const reset = () => {
        setText('')
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', fontSize: '20px', marginTop: '20%' }}>
                <input value={text} onChange={handleInput} style={{ border: '2px solid purple' }} type="text" placeholder='Enter something' />
                <button onClick={reset} style={{ backgroundColor: 'cadetblue', marginTop: '5px', padding: '5px' }}>Reset</button>
                <p>you typed : {text}</p>
            </div>
        </>
    )
}

export default Examp2