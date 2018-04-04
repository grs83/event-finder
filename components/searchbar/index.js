import React from 'react';

const SearchBar = ({ location }) => {
  return (
    <div
      className="ui secondary  menu"
      style={{ marginTop: '0', backgroundColor: '#333', height: '60px' }}
    >
      <div
        className="ui secondary  menu"
        style={{ margin: '0 auto', width: '1250px' }}
      >
        <img
          className="ui mini image"
          style={{
            float: 'left',
            height: '50px',
            marginLeft: '2%',
            marginTop: '5px'
          }}
          src="./img/logo-white.png"
        />
        <h2 style={{ color: 'white', marginLeft: '10px' }}>EVENT FINDER</h2>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search..."
                style={{ width: '300px', marginRight: '3px' }}
              />
              <i className="search link icon" />
            </div>
            <div className="ui icon input">
              <input
                type="text"
                placeholder={location ? location : 'Search Location or Zip'}
              />
              <i className="location arrow icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
