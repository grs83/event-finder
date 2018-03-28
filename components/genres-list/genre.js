import React from 'react'
import GenreCard from './genre-card'

export default function Genre({ genresCategories }) {
  return (
    <div>
      {
      genresCategories.map((category, i) => {
        return (
          <GenreCard
            key={i}
            title={genresCategories[i].title}
            src={genresCategories[i].img}
            />
          )
        })
      }
    </div>
  )
}
