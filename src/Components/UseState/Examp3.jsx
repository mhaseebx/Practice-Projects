import React, { useState } from 'react'

const Examp3 = () => {
    const [color, setColor] = useState('red');

    var flag = 0;

    const toggle = () => {
        if (flag = 0) {
            setColor('yellow');
            flag = 1;
        }

        else if (flag = 1) {
            setColor('purple');
            flag = 0
        }
    }

    return (
        <>
        <div style={{backgroundColor:{color}, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', fontSize: '20px', marginTop: '20%' }}>

<button onClick={toggle}>Toggle</button>
        </div>
        </>
    )
}

export default Examp3