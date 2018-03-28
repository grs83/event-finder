import React from 'react';
import Genre from '../Genre';

export default function Genres({ genresCategories }) {
  return (
    <div>
      <h2>Find Your Enjoyment</h2>
      <div className="ui two column centered grid">
        <div className="four column centered row">
          {genresCategories.reduce(function(genres, category, index) {
            console.log(index);
          }, [])}
          <div className="column">
            <div className="ui card fluid">
              <div className="content">
                <div className="header">This</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui card fluid">
              <div className="content">
                <div className="header">This</div>
              </div>
            </div>
          </div>
        </div>

        <div className="four column centered row">
          <div className="column">
            <div className="ui card fluid">
              <div className="content">
                <div className="header">This</div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui card fluid">
              <div className="content">
                <div className="header">This</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//   genresCategories.map((category, i) => {
//     return <Genre category={category} />;
//   });
// }
