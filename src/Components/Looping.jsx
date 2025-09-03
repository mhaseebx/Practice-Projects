import React from 'react'
import seriesJson from '../API-JSON/seriesJSON.json'
import { SeriesCard } from './SeriesCard'

const Looping = () => {

  return (
    <>
      <ul>
        {
          seriesJson.map((abc) =>
          // return (
          //   // <li key={elem.id}>
          //   <div style={{ marginBottom: '25px' }}>
          //     <img src={elem.img_url} alt="" width='40%' height='40%' />
          //     <h2>Name : {elem.name}</h2>
          //     <h2>Rating : {elem.rating}</h2>
          //     <h2>Description : {elem.description}</h2>
          //     <h2>Cast : {elem.cast}</h2>
          //     <h2>Genre : {elem.genre}</h2>
          //     <a href={elem.watch_url} target='_blank' style={{ backgroundColor: 'gray', padding: '2px' }}>Watch now</a>
          //   </div>
          //   // </li>
          // )

            
              // <div style={{ marginBottom: '25px' }}>
              //   <img src={elem.img_url} alt="" width='40%' height='40%' />
              //   <h2>Name : {elem.name}</h2>
              //   <p>Rating : {elem.rating}</p>
              //   <p>Cast : {elem.cast}</p>
              //   <p>Description : {elem.description}</p>
              //   <p>Genre : {elem.genre}</p>
              //   <a href={elem.watch_url} target='_blank' style={{padding:'2px', backgroundColor:'violet'}}>Watch Now</a>
              // </div>
            
          

          // now we can do above task by using props, we'll make a component for card structure
          (
            <SeriesCard elem={abc} />
          )
          )
        }

      </ul>
    </>
  )
}

export default Looping