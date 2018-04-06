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
                description={description}
                image={image}
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
