import React from 'react'
import GenreCard from './genre-card'

export default function Genre({ details }) {
  return (
    <div className='genre_wrapper'>
      {
      details.map((item, i) => {
        return (
          <GenreCard
            key={i}
            title={details[i].title}
            img={details[i].img}
            />
          )
        })
      }
    </div>
  )
}
