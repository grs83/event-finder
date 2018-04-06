import React from 'react';

const SearchBar = ({
  search,
  location,
  inputLocationChange,
  inputSearchChange,
  clickHandler,
  clickHandlerLogo
}) => {
  return (
    <div
      className="ui secondary  menu"
      style={{
        marginTop: '0',
        paddingTop: '8px',
        backgroundColor: '#333',
        height: '77px',
        width: '100vw',
        position: 'fixed',
        boxShadow: '0 3px 8px #525252',
        zIndex: '99'
      }}
    >
      <div
        className="ui secondary  menu"
        style={{ margin: '0 auto', width: '1250px' }}
      >
        <img
          className="ui mini image point"
          onClick={clickHandlerLogo}
          style={{
            float: 'left',
            height: '50px',
            marginLeft: '2%',
            marginTop: '5px'
          }}
          src="./img/logo-white.png"
        />
        <h2
          onClick={clickHandlerLogo}
          className="point"
          style={{ color: 'white', marginLeft: '10px' }}
        >
          EVENT FINDER
        </h2>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input
                onChange={inputSearchChange}
                type="text"
                value={search || ''}
                placeholder="Search..."
                style={{
                  width: '300px',
                  marginRight: '3px',
                  textAlign: 'center'
                }}
              />
              <i className="search link icon" />
            </div>
            <div className="ui icon input">
              <input
                onChange={inputLocationChange}
                type="text"
                value={location || ''}
                placeholder="Search Location or Zip"
                style={{ textAlign: 'center' }}
              />
              <i className="location arrow icon" />
            </div>
            <div
              className="ui ok inverted button pointer"
              onClick={clickHandler}
              style={{
                borderRadius: '5px',
                marginLeft: '3px',
                height: '36px',
                width: '125px'
              }}
            >
              Find
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
