import React from "react";
import Pagination from "react-js-pagination";

const Paging = ({ page, count, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      nextPageText=">"
      onChange={setPage}
      pageRangeDisplayed={5}
      prevPageText="<"
      totalItemsCount={count}
    />
  );
};

export default Paging;
