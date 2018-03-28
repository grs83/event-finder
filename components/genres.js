import React from 'react'
import Genre from './genre'
import { genresCategories } from './genres-categories'

export default function GenreList() {
  return (
    <div>
      <h2>Find Your Enjoyment</h2>
        <Genre genresCategories={genresCategories}/>
    </div>
  )
}
