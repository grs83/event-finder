import React from 'react';

const Location = ({ inputChange, clickHandler, locationModal }) => {
  return (
    <div>
      {!locationModal ? null : (
        <div>
          <div className="ui active dimmer" />
          <div
            className="ui basic active modal"
            style={{ position: 'fixed', top: '30%' }}
          >
            <div className="ui icon header">
              <i className="map outline icon" />
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
