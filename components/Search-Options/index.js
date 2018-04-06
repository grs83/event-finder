import React from 'react';

const Options = ({ handleSubmitOptions, onChangeDate }) => {
  return (
    <div className="four wide column">
      <div className="ui fixed sticky">
        <h3>Filter:</h3>
        <form onSubmit={handleSubmitOptions}>
          <p style={{ marginBottom: '5px' }}>Date:</p>
          <select
            onChange={onChangeDate}
            className="filterInput"
            name="date"
            form="date"
          >
            <option value="today">Today</option>
            <option value="this week">This Week</option>
            <option value="next Week">Next Week</option>
            <option value="future">All Future</option>
          </select>
          <br />
          <p style={{ marginBottom: '5px' }}>Distance:</p>
          <select className="filterInput" name="distance" form="distance">
            <option value="15">Default</option>
            <option value="5">5 Miles</option>
            <option value="10">10 Miles</option>
            <option value="20">20 Miles</option>
            <option value="40">40 Miles</option>
            <option value="60">60 Miles</option>
          </select>
          <br />
          <button
            type="submit"
            className="filterInput pointer"
            style={{ marginTop: '15px' }}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Options;
