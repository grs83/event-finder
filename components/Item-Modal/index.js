import React from 'react';

const Modal = ({ clickHandler }) => {
  return (
    <div
      className="ui active dimmer"
      style={{ position: 'fixed', width: '100vw', height: '100vh' }}
    >
      <div className="ui active modal">
        <i className="close icon" onClick={clickHandler} />
        <div className="header">Profile Picture</div>
        <div className="image content">
          <div className="ui medium image">
            <img src="/images/avatar/large/chris.jpg" />
          </div>
          <div className="description">
            <div className="ui header">
              We've auto-chosen a profile image for you.
            </div>
            <p>
              We've grabbed the following image from the{' '}
              <a href="https://www.gravatar.com" target="_blank">
                gravatar
              </a>{' '}
              image associated with your registered e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
