import React from 'react'
import Genre from './genre'
import { genreCardCategories } from './genre-details'

export default function GenreList() {
  return (
    <div className="genres_wrapper">
      <h2 className="genres_title">Find Your Enjoyment</h2>
        <Genre details={genreCardCategories}/>
    </div>
  )
}
