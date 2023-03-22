import React, { useState } from "react";
import Pagination from "react-js-pagination";
import Dashboard from './Dashboard';

const MyComponent = () => {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5;
  const myArray = [Photos];

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = myArray.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {Photos}
      {currentItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      
      {Dashboard}
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={myArray.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
};

export default MyComponent;
