import { getBookmarkList } from '../api/bookmarkStorage.js';
import { createBookElement } from './book.js';
import { getItem } from '../api/bookAPI.js';
import { loading } from './loading.js';

const $modal = document.querySelector('.modal');

const getBookmarkBookList = async () => {
  const bookmarkList = getBookmarkList();
  const $bookmarks = [];
  for (let i = 0; i < bookmarkList.length; i++) {
    const bookId = bookmarkList[i];
    const data = await getItem({ id: bookId }).then((data) => data.item[0]);
    $bookmarks.push(createBookElement(data));
  }
  return $bookmarks;
};
const createBookmarkModal = () => {
  const $bookmarkModal = document.createElement('section');
  $bookmarkModal.setAttribute('id', 'bookmarkModal');
  $bookmarkModal.innerHTML = `
    <header class="modalHeader">
      <h2 class="title">즐겨찾는 도서</h2>
      <button class="closeBtn"><i class="fa-solid fa-xmark"></i></button>
    </header>
    <div class="main">
      <ul class="bookmarkList">
      </ul>
    </div>
  `;
  return $bookmarkModal;
};

const handleOpenAndCreateBookmarkModal = async () => {
  const $target = createBookmarkModal();
  const $bookmarkList = $target.querySelector('.bookmarkList');
  const $closeBtn = $target.querySelector('.closeBtn');
  $closeBtn.addEventListener('click', () => {
    $modal.classList.remove('on');
    setTimeout(() => $target.remove(), 300); // 부드럽게 삭제
  });
  const $books = await loading(
    new Promise((resolve) => resolve(getBookmarkBookList())),
  );
  $bookmarkList.append(...$books);
  $modal.appendChild($target);
  $modal.classList.add('on');
};

export { handleOpenAndCreateBookmarkModal };
