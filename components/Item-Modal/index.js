import React from 'react';
import { TimeConverter, DateConverter, CreateMarkup } from '../util';

function headerDetails(start_time, stop_time, venue_name) {
  return `Starts at: ${TimeConverter(start_time.split(' ')[1])} | Ends at: ${
    stop_time ? TimeConverter(stop_time.split(' ')[1]) : 'No End Time'
  } | On: ${DateConverter(start_time.split(' ')[0])} | At: ${venue_name}`;
}

const Modal = ({
  clickHandler,
  event: {
    title,
    description,
    image,
    start_time,
    stop_time,
    venue_name,
    venue_url
  }
}) => {
  const descriptionVerified = !description
    ? 'Sorry, no description available at this time.'
    : description;
  return (
    <div
      className="ui active dimmer"
      style={{ position: 'fixed', width: '100vw', height: '100vh' }}
    >
      <div
        className="ui active modal"
        style={{ position: 'fixed', top: '20%' }}
      >
        <i className="close icon" onClick={clickHandler} />
        <div
          className="header"
          style={{ fontSize: '30px', textAlign: 'center' }}
        >
          {title}
        </div>
        <div className={'image content'}>
          <div
            className="ui large image"
            style={{ width: '300px', objectFit: 'cover' }}
          >
            {' '}
            <img
              src={
                image
                  ? image.large ? image.large.url : './img/logo.png'
                  : './img/logo.png'
              }
              style={{ width: '300px', objectFit: 'cover' }}
            />
          </div>
          <div className="description" style={{ width: '500px' }}>
            <div className="ui header">
              {headerDetails(start_time, stop_time, venue_name)}
            </div>
            <div>
              <div
                style={{
                  maxHeight: '225px',
                  overflow: 'scroll'
                }}
              >
                <p
                  dangerouslySetInnerHTML={CreateMarkup(descriptionVerified)}
                  style={{
                    fontSize: '14px'
                  }}
                />
              </div>
              {venue_url && (
                <a
                  style={{ marginTop: '10px', float: 'right' }}
                  target="blank"
                  href={venue_url}
                >
                  More Info >
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
