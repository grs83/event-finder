import React from 'react';

const Item = () => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src="http://d1marr3m5x4iac.cloudfront.net/images/medium…runch-featuring-natalie-hanna-mendoza-qua-78.jpeg" />
      </div>
      <div className="content">
        <div className="header">
          Soulful Brunch featuring the Natalie Hanna Mendoza Quartet
        </div>
        <div className="meta">
          <span className="price">Startin At: $40.00</span>
          <br />
          <span className="date">Date & Time: 2018-04-08 11:00:00</span>
          <br />
          <span className="venue">Venue: The Canyon Club</span>
        </div>
        <div className="description">
          <p>
            The beautiful new Canyon Club, Santa Clarita, CA presents the
            Natalie Hanna Mendoza Jazz Quartet for their Soulful Brunch, April 8
            and April 22, 2018
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;
