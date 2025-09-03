
export const SeriesCard = ({ elem }) => {
  return (
    // <li key={elem.id}>
    <div style={{ marginBottom: '25px' }}>
      <img src={elem.img_url} alt="" width='40%' height='40%' />
      <h2>Name : {elem.name}</h2>
      <h2>Rating : {elem.rating}</h2>
      <h2>Description : {elem.description}</h2>
      <h2>Cast : {elem.cast}</h2>
      <h2>Genre : {elem.genre}</h2>
      <a href={elem.watch_url} target='_blank' style={{ backgroundColor: 'gray', padding: '2px' }}>Watch now</a>
    </div>
    // </li>
  )
}