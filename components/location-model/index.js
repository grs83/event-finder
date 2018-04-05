import React from 'react';

const Location = ({ inputChange, clickHandler, locationModal }) => {
  return (
    <div>
      {locationModal && (
        <div>
          <div className="ui active dimmer" />
          <div
            className="ui basic active modal"
            style={{ position: 'fixed', top: '30%' }}
          >
            <h2
              style={{
                textAlign: 'center',
                letterSpacing: '1.25px'
              }}
            >
              Welcome To Event Finder!
            </h2>
            <img
              className="ui mini image"
              style={{
                height: '75px',
                width: '75px',
                margin: '0 auto'
              }}
              src="./img/logo-white.png"
            />
            <div
              className="ui icon header"
              style={{ letterSpacing: '1.25px', fontWeight: '200' }}
            >
              Where do you want to search?
            </div>
            <div
              className="ui centered search"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <input
                onChange={inputChange}
                style={{ width: '50%', textAlign: 'center' }}
                className="prompt"
                placeholder="Enter A Location or Zip Code"
                name="location"
              />
              <div
                onClick={clickHandler}
                className="ui ok inverted button pointer"
                style={{ borderRadius: '20px', marginLeft: '5px' }}
              >
                Lets Go
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
