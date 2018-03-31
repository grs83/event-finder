import React from 'react';

const Item = ({ title, image, start_time, venue_name, description }) => {
  return (
    <div className="item pointer grey">
      <div className="content">
        <div className="header" style={{ marginTop: '2%' }}>
          {title}
        </div>
        <br />
        <span className="date" style={{ marginBottom: '5px' }}>
          Date & Time: {start_time}
        </span>
        <br />
        <span className="venue">Venue: {venue_name}</span>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="ui small image" style={{ paddingLeft: '10px' }}>
        <img src={image} />
      </div>
    </div>
  );
};

export default Item;
