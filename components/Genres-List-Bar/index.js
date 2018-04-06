import React from 'react';

const Genresbar = ({ genresCategories, clickHandler, currentCategory }) => {
  return (
    <div
      className="ui one column container grid"
      style={{ marginTop: '20px', height: '50px' }}
    >
      <div className="seven ui buttons">
        {genresCategories.map(
          (genre, i) =>
            genre.title.toLowerCase() !== currentCategory.toLowerCase() ? (
              <button onClick={clickHandler} className="ui button" key={i}>
                {genre.title}
              </button>
            ) : (
              <button
                onClick={clickHandler}
                className="ui active button"
                key={i}
              >
                {genre.title}
              </button>
            )
        )}
      </div>
    </div>
  );
};
export default Genresbar;
