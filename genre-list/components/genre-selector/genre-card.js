import React from 'react'

export default function GenreCard({title, img}) {
  return (
    <div className="genre_card">
      <img className="genre_card_img" src={ img }></img>
      <div className="genre_card_overlay"></div>
      <h5 className="genre_card_title">{ title }</h5>
    </div>
  )
}
