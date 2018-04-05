import React from 'react';

const NoResultsModal = ({ clickHandler, noResultsModal }) => {
  return (
    <div>
      {noResultsModal && (
        <div>
          <div className="ui active dimmer" style={{ position: 'fixed' }} />
          <div
            className="ui basic active modal"
            style={{ position: 'fixed', top: '30%' }}
          >
            <img
              className="ui mini image"
              style={{
                height: '75px',
                width: '75px',
                margin: '0 auto'
              }}
              src="./img/logo-white.png"
            />
            <h2
              style={{
                textAlign: 'center',
                letterSpacing: '1.25px',
                marginBottom: '-5px'
              }}
            >
              EVENT FINDER
            </h2>
            <div
              className="ui icon header"
              style={{ letterSpacing: '1.4px', fontWeight: '200' }}
            >
              No Events Found...
            </div>
            <div
              className="ui centered search"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <div
                onClick={clickHandler}
                className="ui ok inverted button pointer"
                style={{ borderRadius: '20px', marginLeft: '5px' }}
              >
                Try Another Search
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoResultsModal;
