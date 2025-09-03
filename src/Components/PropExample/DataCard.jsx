import React from 'react'

const DataCard = ({ abc }) => {
    return (
        <>
            <div className='font-medium mx-[2rem] my-[2rem] border-2 w-[25%] '>
                

                <h2>Name : {abc.name}, ({abc.email})</h2>
                
            </div>

        </>
    )
}

export default DataCard