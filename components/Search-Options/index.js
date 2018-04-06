import React from 'react';

const Options = () => {
  return (
    <div className="four wide column">
      <div className="ui fixed sticky">
        <h3>Filter:</h3>
        <form>
          <span />
          <select className="filterInput" name="date" form="date">
            <option value="today">Today</option>
            <option value="this week">This Week</option>
            <option value="Next Week">Next Week</option>
            <option value="future">All Future</option>
          </select>
          <br />
          <select className="filterInput" name="distance" form="distance">
            <option value="15">Default</option>
            <option value="5">5 Miles</option>
            <option value="10">10 Miles</option>
            <option value="20">20 Miles</option>
            <option value="40">40 Miles</option>
            <option value="60">60 Miles</option>
          </select>
          <br />
          <input type="submit" className="filterInput pointer" />
        </form>
      </div>
    </div>
  );
};

export default Options;
