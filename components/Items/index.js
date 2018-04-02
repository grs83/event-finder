import React from 'react';
import Item from '../item';

const Items = ({ events }) => {
  return (
    <div className="ui grid" style={{ marginTop: '50px' }}>
      <div className="twelve wide centered column">
        <div className="ui divided items">
          {events.map(
            ({ title, image, start_time, venue_name, description, id }) => {
              return (
                <Item
                  title={title}
                  time={start_time}
                  venue={venue_name}
                  description={description}
                  img={!image ? './img/arts.jpg' : image.url}
                  key={id}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Items;
