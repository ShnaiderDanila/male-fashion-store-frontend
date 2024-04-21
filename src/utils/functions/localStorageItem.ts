export const setLocalStorageItem = (itemTitle: string, item: unknown) => {
  localStorage.setItem(itemTitle, JSON.stringify(item));
};

export const getLocalStorageItem = (itemTitle: string) => {
  if (itemTitle) {
    const item = JSON.parse(localStorage.getItem(itemTitle) || '');
    return item;
  }
  return;
};
