const STORAGE_KEY = 'bookmark';
const MAX_BOOKMARK_LIST_SIZE = 20;

const bookmarkList = new Set(
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
);

const saveToStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(bookmarkList)));
};
const getBookmarkList = () => {
  return Array.from(bookmarkList);
};
const toggle = (id) => {
  if (bookmarkList.has(id)) {
    remove(id);
  } else {
    if (bookmarkList.size >= MAX_BOOKMARK_LIST_SIZE) {
      // TODO 사이즈 예외처리 필요
      return;
    }
    create(id);
  }
  saveToStorage();
};
const create = (id) => {
  bookmarkList.add(id);
};
const remove = (id) => {
  bookmarkList.delete(id);
};

export { getBookmarkList, toggle };
