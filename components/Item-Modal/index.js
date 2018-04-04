import React from 'react';

function timeConverter(time) {
  const part = time.split(':');
  if (part[0] < 12) {
    return part[0] + ':' + part[1] + ' am';
  } else {
    return part[0] - 12 + ':' + part[1] + ' pm';
  }
}

function dateConverter(date) {
  const part = date.split('-');
  return part[1] + '/' + part[2] + '/' + part[0];
}

function createMarkup(text) {
  return { __html: text };
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
              {`Starts at: ${timeConverter(
                start_time.split(' ')[1]
              )} | Ends at: ${
                stop_time
                  ? timeConverter(stop_time.split(' ')[1])
                  : 'No End Time'
              } | On: ${dateConverter(
                start_time.split(' ')[0]
              )} | At: ${venue_name}`}
            </div>
            <div>
              <div
                style={{
                  fontSize: '1em',
                  fontWeight: '200',
                  maxHeight: '225px',
                  overflow: 'scroll'
                }}
              >
                <p
                  dangerouslySetInnerHTML={createMarkup(description)}
                  style={{
                    fontSize: '12px'
                  }}
                />
              </div>
              {venue_url ? (
                <a target="blank" href={venue_url}>
                  More Info >
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
