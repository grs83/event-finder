import React from 'react'

export default function GenreCard({title, src}) {
  return (
    <div>
      <img src={ src }></img>
      <div ></div>
      <h5 >{ title }</h5>
    </div>
  )
}
