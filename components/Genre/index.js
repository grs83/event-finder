import React from 'react';

const Genre = ({ clickHandler, category: { img, title } }) => {
  return (
    <div className="card" onClick={clickHandler}>
      <img className="ui fluid image" src={img} />
      <div
        className="ui top aligned set active dimmer show"
        style={{ backgroundColor: 'rgba(75,75,75,0.5)' }}
      >
        <div className="content">
          <h2
            className="ui top center aligned header"
            style={{ fontSize: '2.25em', letterSpacing: '.25em' }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Genre;
