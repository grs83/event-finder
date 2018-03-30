import React from 'react';
import Item from '../item';

const Items = () => {
  return (
    <div className="ui grid" style={{ marginTop: '50px' }}>
      <div className="twelve wide centered column">
        <div className="ui divided items">
          <Item />
        </div>
      </div>
    </div>
  );
};

export default Items;
