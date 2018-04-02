import React from 'react';

const Pagination = ({
  pageNumber,
  pageCount,
  clickPagePreviousHandler,
  clickPageNextHandler
}) => {
  console.log(pageNumber, pageCount);
  return (
    <div className="ui one column centered grid" style={{ marginTop: '25px' }}>
      <button
        onClick={clickPagePreviousHandler}
        disabled={pageNumber === 1}
        className="ui labeled icon button"
        style={{ width: '125px' }}
      >
        <i className="left arrow icon" />
        Previous
      </button>
      <div className="ui pagination menu">
        <div
          className="disabled item"
          style={{ color: '#424242', width: '90px' }}
        >
          Page #{pageNumber}
        </div>
      </div>
      <button
        onClick={clickPageNextHandler}
        disabled={pageNumber == pageCount}
        className="ui right labeled icon button"
        style={{ width: '125px', marginLeft: '3px' }}
      >
        <i className="right arrow icon" />
        Next
      </button>
    </div>
  );
};

export default Pagination;
