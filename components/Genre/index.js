import React from 'react';

export default function Genre({ category: { img, title } }) {
  return (
    <div className="card">
      <div className="ui segment">
        <img className="ui fluid image" src={img} />
        <div
          className="ui top aligned set active dimmer show"
          style={{ backgroundColor: 'rgba(75,75,75,0.6)' }}
        >
          <div className="content">
            <h2
              className="ui large top center aligned header"
              style={{ letterSpacing: '5px' }}
            >
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
