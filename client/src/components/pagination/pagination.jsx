import React from 'react';
import './pagination.css';

const Pagination = ({ pageEnd, paginate}) => {
  const pageNumbers = [];

  for(let i = 1; i <= pageEnd; i++){
    pageNumbers.push(i);
  };

  return(
    <nav className="navPagination">
      <ul className="ulPagination">
        {pageNumbers.map(number => (
          <li key = { number } className="liPagination">
            <button onClick={() => paginate(number)} className="buttonPagination" >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;
