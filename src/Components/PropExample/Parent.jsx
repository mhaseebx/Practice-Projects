import React from 'react'
import { users } from './UserList'
import DataCard from './DataCard'

const Parent = () => {
    return (
        <>
            {
                // users.map((elem) => <DataCard abc={elem} />
                // )

                users.map((elem) => {

                    return <DataCard key={elem.id} abc={elem} />

                })
            }

        </>
    )
}

export default Parent