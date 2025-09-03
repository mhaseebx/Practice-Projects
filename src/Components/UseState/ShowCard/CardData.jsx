import React from 'react'

const CardData = ({name, age}) => {
    return (
        <>
            <div className="user-card" >
                <h2 className="user-name">{name}</h2>
                <p className="user-age">{age} years old</p>
            </div>
        </>
    )
}

export default CardData