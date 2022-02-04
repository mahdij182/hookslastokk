import React from 'react';
import MovieCard from './MovieCard';

export default function MoviesList({moviListe , search}) {
  return (
  <div className='movielistContainer' >
{moviListe.map((el,key)=> (
<MovieCard movie={el} key={el.id}    /> 
))}
  </div>
  )
}
