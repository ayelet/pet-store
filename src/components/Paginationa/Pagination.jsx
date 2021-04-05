import "./Pagination.css";
import React, { useState, useEffect } from "react";

export default function Pagination({
  itemsPerPage,
  totalItemsNumber,
  currentPage,
  onChangePage,
  onPrevPage,
  onNextPage,
  disabledPrev,
  disabledNext,
}) {
  const [pageNumbers, setPageNumbers] = useState([]);
  const [maxPageNum, setMaxPageNum] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [souldDisableNext] = useState("");
  // const [shouldDisablePrev, setShouldDisablePrev] = useState("disabled");

  useEffect(() => {
    const numbers = [];
    for (let i = 1; i < Math.ceil(totalItemsNumber / itemsPerPage); i++) {
      console.log(totalItemsNumber, itemsPerPage, pageNumbers);
      numbers.push(i);
    }
    setPageNumbers(numbers);
    setMaxPageNum(numbers[numbers.length - 1]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log("current page", currentPage);

  //   return () => {
  //     // cleanup;
  //   };
  // }, [currentPage]);

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item" key="0">
          <a
            href="!#"
            className={`page-link  ${disabledPrev ? "disabled" : ""}`}
            onClick={() => onPrevPage()}
          >
            {" "}
            Prev
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="!#"
              className="page-link"
              onClick={() => onChangePage(number, 1, maxPageNum)}
            >
              {number}
            </a>
          </li>
        ))}
        <li
          // className={`page-link ${souldDisableNext}`}
          className="page-item"
          key={pageNumbers.length + 1}
        >
          <a
            href="!#"
            className={`page-link  ${disabledNext ? "disabled" : ""}`}
            onClick={() => onNextPage()}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
