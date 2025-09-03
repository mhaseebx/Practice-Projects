import React from 'react'

const ProfileCard = ({name, greeting}) => {
  return (
    <>
    <h1>My name is {name} </h1>
    <h1>{greeting}</h1>
    </>
  )
}

export default ProfileCard