import React, { useState, useEffect } from "react";

export default function Pagination(itemsPerPage, totalItemsNumber, onChangePage) {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const numbers = [];
    for (let i = 1; i < Math.ceil(totalItemsNumber / itemsPerPage); i++) {
      console.log(totalItemsNumber, itemsPerPage, pageNumbers);
      numbers.push(i);
    }
    setPageNumbers(numbers);
  }, []);

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="!#"
              className="page-link"
              onClick={() => onChangePage(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
