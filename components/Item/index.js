import React from 'react';

function timeConverter(time) {
  const part = time.split(':');
  if (part[0] < 12) {
    return part[0] + ':' + part[1] + ' am';
  } else {
    return part[0] - 12 + ':' + part[1] + ' pm';
  }
}

function dateConverter(date) {
  const part = date.split('-');
  return part[1] + '/' + part[2] + '/' + part[0];
}

function createMarkup(text) {
  return { __html: text };
}

const Item = ({ title, image, start_time, venue_name, description }) => {
  const time = start_time.split(' ')[1];
  return (
    <div className="item pointer grey">
      <div className="content">
        <div className="header" style={{ marginTop: '2%' }}>
          {title}
        </div>
        <br />
        <span className="date" style={{ marginBottom: '5px' }}>
          Date: {dateConverter(start_time.split(' ')[0])}
        </span>
        <br />
        <span className="time" style={{ marginBottom: '5px' }}>
          Time: {timeConverter(start_time.split(' ')[1])}
        </span>
        <br />
        <span className="venue">Venue: {venue_name}</span>
        <div className="description">
          <p dangerouslySetInnerHTML={createMarkup(description)} />
        </div>
      </div>
      <div className="ui small image" style={{ paddingLeft: '10px' }}>
        <img src={image} />
      </div>
    </div>
  );
};

export default Item;
