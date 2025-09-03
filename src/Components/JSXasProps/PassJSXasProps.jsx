import React from 'react'
import ProfileCard from './ProfileCard'
import { div } from '../dataChallenge3'

export const PassJSXasProps = () => {
  return (
    <>
      <div>
        <h1>Profile Card Challenge</h1>

        <ProfileCard
          name='Alice'
          age={34}
          greeting={
            <div>
              <strong>Hey Alice, have a wonderful day!</strong>
            </div>
          }
        >
          <p>Hobbies : Reading, Running</p>
          <button>Contact</button>

        </ProfileCard>
      </div>
    </>
  )
}
