import React from 'react';
import Item from '../item';
import Pagination from './pagination';

const Items = ({
  events,
  title,
  pageCount,
  pageNumber,
  clickPagePreviousHandler,
  clickPageNextHandler,
  showItems
}) => {
  return (
    <div className="ui container grid" style={{ marginTop: '50px' }}>
      <div className="twelve wide centered column">
        <div className="ui divided items">
          <h2 className="ui center aligned header">{title.toUpperCase()}</h2>
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
          <Pagination
            pageNumber={pageNumber}
            pageCount={pageCount}
            clickPagePreviousHandler={clickPagePreviousHandler}
            clickPageNextHandler={clickPageNextHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Items;
