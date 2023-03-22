import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PhotoPagination({ photos }) {
  const [active, setActive] = useState(1);
  let totalPages = 0;
  const pageItems = [];

  if (photos && Array.isArray(photos)) {
    totalPages = Math.ceil(photos.length / 5);
    for (let number = 1; number <= totalPages; number++) {
      pageItems.push(
        <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
          {number}
        </Pagination.Item>
      );
    }
  }

  return (
    <div>
      <Pagination>{pageItems}</Pagination>
    </div>
  );
}

export default PhotoPagination