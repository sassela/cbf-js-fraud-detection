interface PaginationProps {
  totalItems: number,
  itemsPerPage: number,
  currentPage: number,
  onPageChange: (newPage: number) => void;
}


const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }:PaginationProps) => {
  const totalPages = Math.floor(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 7;

    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      pageNumbers.push(i);
    }

    if (totalPages <= maxPageButtons) {
      // if there are a small number of pages, only render the page numbers
      return pageNumbers.map((number) => (
        <li
          key={number}
          className={`page-item${number === currentPage ? ' active' : ''}`}
          onClick={() => onPageChange(number)}
        >
          <a className="page-link" href="#">
            {number}
          </a>
        </li>
      ));
    } else {
      // if there are a larger number of pages render truncated pagination with 'first' and 'last' buttons
      return (
        <>
          <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`} onClick={() => onPageChange(1)}>
            <a className="page-link" href="#">
              First
            </a>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item${number === currentPage ? ' active' : ''}`}
              onClick={() => onPageChange(number)}
            >
              <a className="page-link" href="#">
                {number}
              </a>
            </li>
          ))}
          <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`} onClick={() => onPageChange(totalPages)}>
            <a className="page-link" href="#">
              Last
            </a>
          </li>
        </>
      );
    }
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
        {renderPageNumbers()}
      </ul>
    </nav>
  );
};

export default Pagination;
