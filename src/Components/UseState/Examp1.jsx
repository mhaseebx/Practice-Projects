import React, { useState } from 'react'

const Examp1 = () => {
    const [color, setColor] = useState('red')

    const dark = () => {
        setColor('green')
    }

    const light = () => {
        setColor('yellow')
    }

    return (
        <>
            <div style={{ backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', fontSize: '20px', marginTop: '20%' }}>

                <button style={{ backgroundColor: 'aqua', width: '6rem' }} onClick={light}>Light</button>
                <button style={{ backgroundColor: 'blue', width: '6rem' }} onClick={dark}>Dark</button>

            </div>
        </>
    )
}

export default Examp1