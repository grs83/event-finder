import React from 'react';

export default function Genre({ category: { img, title } }) {
  return (
    <div className="ui cards">
      <div className="ui fluid card">
        <img src={img} />
        <h3>{title}</h3>
      </div>
    </div>
  );
}
