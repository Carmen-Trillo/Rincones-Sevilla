/* import React, { useState } from "react";

function Pagination() {
  const [items, setItems] = useState([...]); // array de elementos a paginar
  const [currentPage, setCurrentPage] = useState(1); // número de página actual
  const itemsPerPage = 5; // número de elementos por página

  function getCurrentItems() {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return items.slice(indexOfFirstItem, indexOfLastItem);
  }

  function handlePageChange(event, value) {
    setCurrentPage(value);
  }
  
  function handlePageChange(event, value) {
    setCurrentPage(value);
  }
  
  return (
    <div>
      {getCurrentItems().map(item => (
        // renderiza cada elemento
      ))}
      <div>
        count={Math.ceil(items.length / itemsPerPage)} // número total de páginas
        page={currentPage}
        onChange={handlePageChange}
      </div>
    </div>
  );
} */