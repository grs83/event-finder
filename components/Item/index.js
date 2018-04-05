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
          <p dangerouslySetInnerHTML={CreateMarkup(description)} />
        </div>
      </div>
      <div className="ui small image" style={{ paddingLeft: '10px' }}>
        <img src={image} style={{ marginTop: '10px' }} />
      </div>
    </div>
  );
};

export default Item;
