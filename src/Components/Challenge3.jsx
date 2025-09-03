import React from 'react'
import add from './dataChallenge3'
import { sub, mult, div } from './dataChallenge3'
import * as abcd from './dataChallenge3'

const Challenge3 = () => {
    return (
        <>
            <div className='ml-10 mt-10'>
                    <li>sum of two no. is {add(2,4)}</li>
                    <li>sub of two no. is {sub(2,4)}</li>
                    <li>mult of two no. is {mult(2,4)}</li>
                    <li>div of two no. is {div(5,3).toString().slice(0,4)}</li>
            </div>

            <div className='ml-10 mt-10'>
                    <li>sum of two no. is {abcd.default(2,4)}</li>
                    <li>sub of two no. is {abcd.sub(2,4)}</li>
                    <li>mult of two no. is {abcd.mult(2,4)}</li>
                    <li>div of two no. is {abcd.div(5,3).toString().slice(0,4)}</li>
            </div>


        </>
    )
}

export default Challenge3