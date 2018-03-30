import React from 'react';
import Genre from '../Genre';

const Genres = ({ genresCategories }) => {
  return (
    <div>
      <h2 className="ui center aligned huge header">Find Your Enjoyment</h2>
      <div className="ui one column doubling stackable grid container">
        <div className="column">
          <div className="ui two stackable cards">
            {genresCategories.map((category, i) => {
              return <Genre key={i} category={category} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
