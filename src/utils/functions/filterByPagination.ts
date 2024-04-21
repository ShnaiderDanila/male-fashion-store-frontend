export const filterByPagination = <T>(items: T[], currentPage: number, pageSize: number) => {
  const from = (currentPage - 1) * pageSize;
  const to = (currentPage - 1) * pageSize + pageSize;
  return items.slice(from, to);
};
