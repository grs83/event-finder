import React from 'react';

const Item = ({ title, img, start_time, venue_name, description }) => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={img} />
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">
          <span className="price">Startin At: $40.00</span>
          <br />
          <span className="date">Date & Time: {start_time}</span>
          <br />
          <span className="venue">{venue_name}</span>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
