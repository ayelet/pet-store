import React, { useState, useEffect } from "react";

export default function Pagination({
  itemsPerPage,
  totalItemsNumber,
  onChangePage,
  onPrevPage,
  onNextPage,
}) {
  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    const numbers = [];
    for (let i = 1; i < Math.ceil(totalItemsNumber / itemsPerPage); i++) {
      console.log(totalItemsNumber, itemsPerPage, pageNumbers);
      numbers.push(i);
    }
    setPageNumbers(numbers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item" key="0">
          <a href="!#" className="page-link" onClick={() => onPrevPage()}>
            {" "}
            Prev
          </a>
        </li>
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
        <li className="page-item" key={pageNumbers.length + 1}>
          <a href="!#" className="page-link" onClick={() => onNextPage()}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
