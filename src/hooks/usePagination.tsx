import { useState, ChangeEvent } from 'react';

export const usePagination = (pageSize: number) => {
  const [currentPage, setCurrentPage] = useState(1);

  // const handlePageChange = (_event: ChangeEvent<unknown> | undefined, page: number): void => {
  //   const from = (page - 1) * pageSize;
  //   const to = (page - 1) * pageSize + pageSize;
  // };

  return { currentPage, setCurrentPage };
};

export default usePagination;
