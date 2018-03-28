import React from 'react'
import GenreCard from './genre-card'

export default function Genre({ genreCategories }) {
  return (
    <div className='genre_wrapper'>
      {
      genreCategories.map((category, i) => {
        return (
          <GenreCard
            key={i}
            title={genreCategories[i].title}
            img={genreCategories[i].img}
            />
          )
        })
      }
    </div>
  )
}
