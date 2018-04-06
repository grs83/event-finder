import React from 'react';
import { TimeConverter, DateConverter, CreateMarkup } from '../util';

const Item = ({
  title,
  image,
  start_time,
  venue_name,
  description,
  clickHandler
}) => {
  const descriptionVerified = description
    ? description.length < 200 ? description : description.slice(0, 200) + '...'
    : 'Sorry, no description at this time.';

  const imageVerified = image
    ? image.block200 ? image.block200.url : './img/logo.png'
    : './img/logo.png';

  return (
    <div className="item pointer grey" onClick={() => clickHandler(title)}>
      <div className="content">
        <div className="header" style={{ marginTop: '2%' }}>
          {title}
        </div>
        <br />
        <span
          className="date"
          style={{ marginTop: '10px', marginBottom: '5px' }}
        >
          Date: {DateConverter(start_time.split(' ')[0])}
        </span>
        <br />
        <span className="time" style={{ marginBottom: '5px' }}>
          Time: {TimeConverter(start_time.split(' ')[1])}
        </span>
        <br />
        <span className="venue">Venue: {venue_name}</span>
        <div className="description">
          <p dangerouslySetInnerHTML={CreateMarkup(descriptionVerified)} />
        </div>
      </div>
      <div className="ui small image" style={{ paddingLeft: '10px' }}>
        <img src={imageVerified} style={{ marginTop: '10px' }} />
      </div>
    </div>
  );
};

export default Item;
