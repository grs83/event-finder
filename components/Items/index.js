import React from 'react';
import Item from '../item';

const Items = ({ events, title, showItems, clickHandler }) => {
  return (
    <div className="twelve wide column">
      <div className="ui divided items">
        {events.map(
          ({ title, image, start_time, venue_name, description, id }) => {
            return (
              <Item
                clickHandler={clickHandler}
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
                image={
                  image
                    ? image.block200 ? image.block200.url : './img/logo.png'
                    : './img/logo.png'
                }
                key={id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Items;
