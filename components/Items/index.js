import React from 'react';
import Item from '../item';

const Items = ({ events }) => {
  return (
    <div className="ui container grid" style={{ marginTop: '50px' }}>
      <div className="twelve wide centered column">
        <div className="ui divided items">
          {events.map(
            ({ title, image, start_time, venue_name, description, id }) => {
              return (
                <Item
                  title={title}
                  start_time={start_time}
                  venue_name={venue_name}
                  description={
                    description
                      ? description.length < 200
                        ? description
                        : description.slice(0, 200) + '...'
                      : 'Sorry, no description at this time.'
                  }
                  image={image ? image.url : './img/logo.png'}
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
