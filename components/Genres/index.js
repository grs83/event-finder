import React from 'react';
import Genre from '../Genre';

const Genres = ({ clickHandler, genresCategories }) => {
  return (
    <div>
      <h2
        className="ui center aligned huge header"
        style={{ marginTop: '15px', fontSize: '2.5em' }}
      >
        Find Your Enjoyment
      </h2>
      <div
        className="ui one column doubling stackable grid container"
        style={{ marginTop: '15px' }}
      >
        <div className="column">
          <div className="ui two stackable cards">
            {genresCategories.map((category, i) => {
              return (
                <Genre
                  key={i}
                  category={category}
                  clickHandler={clickHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
