import React from 'react';
import '../../../src/styles/Styles.css';

const PaginateComponent = (props) => {
  const currentPage = parseInt(props.page);
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const createPaginationLinks = (numPages) => {
    const pages = [];
    for(let i = 1; i <= numPages; i++) {
      pages.push(<li className="page-item  mb-3"><a className="page-link" href={`/home/${i}`}>{i}</a></li>)
    }
    return pages;
  }
  
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {currentPage > 1 
          ? <li className="page-item">
                <a className="page-link" href={`/home/${previousPage}`} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
              </li> 
          : ''   
        }

        {createPaginationLinks(props.numPages)}

        {currentPage < props.numPages
          ? <li className="page-item">
                <a className="page-link" href={`/home/${nextPage}`} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
              </li> 
          : ''
        }
      </ul>
    </nav>
  )
}

export default PaginateComponent