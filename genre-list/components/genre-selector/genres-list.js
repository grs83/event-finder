import React from 'react'
import Genre from './genre'
import { genreCategories } from './genres-categories'

export default function GenreList() {
  return (
    <div className="genres_wrapper">
      <h2 className="genres_title">Find Your Enjoyment</h2>
        <Genre genreCategories={genreCategories}/>
    </div>
  )
}
