import React, { useState } from 'react'
import CardData from './CardData'

const ShowCard = () => {
    const [user, setUser] = useState([
        { id: 1, name: 'Haseeb', age: 23 },
        { id: 2, name: 'Jawad', age: 23 },
        { id: 3, name: 'Ali', age: 23 },
        { id: 4, name: 'Javed', age: 23 }
    ])

    // const user = [
    //     { id: 1, name: 'Haseeb', age: 23 },
    //     { id: 2, name: 'Jawad', age: 23 },
    //     { id: 3, name: 'Ali', age: 23 },
    //     { id: 4, name: 'Javed', age: 23 }
    // ]

    return (
        <>
            <ul>
                {
                    user.map((val) => {
                        return <CardData key={val.id} name={val.name} age={val.age} />
                    })
                }
            </ul>


        </>
    )
}

export default ShowCard