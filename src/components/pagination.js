import { renderBookList } from './book.js';
import { keyword } from './searchForm.js';

const $pagination = document.querySelector('.pagination');
const $pages = $pagination.querySelector('.pages');
const $prev = $pagination.querySelector('.prev');
const $next = $pagination.querySelector('.next');

const pageSize = 10;
const groupSize = 5;

let currentPage = 1;

let totalPage = 0;
let pageGroup = 0;

const updatePageGroup = (page) => Math.ceil(page / groupSize);

const move = (page) => {
  currentPage = parseInt(page);
  renderBookList({ query: keyword, page: currentPage }) //
    .then(updatePagination);
};

const initPagination = (totalResults) => {
  currentPage = 1;
  totalPage = Math.ceil(totalResults / pageSize);
  pageGroup = 0;
  updatePagination();
};

const makePageButton = (page) => {
  const $button = document.createElement('button');

  $button.textContent = page;
  $button.addEventListener('click', () => {
    move(page);
  });

  return $button;
};

const renderPagination = () => {
  const firstPage = (pageGroup - 1) * groupSize + 1;
  const lastPage = Math.min(totalPage, pageGroup * groupSize);

  $pages.innerHTML = '';
  for (let idx = firstPage; idx <= lastPage; idx++) {
    const $page = makePageButton(idx);
    $pages.appendChild($page);
  }
};
const updatePagination = () => {
  const currentPageGroup = updatePageGroup(currentPage);
  if (currentPageGroup !== pageGroup) {
    pageGroup = currentPageGroup;
    renderPagination();
  }
  Array.from($pages.children).forEach(($page, idx) => {
    const page = (pageGroup - 1) * groupSize + (idx + 1);
    $page.classList.toggle('on', page === currentPage);
  });

  $prev.disabled = currentPage === 1;
  $next.disabled = currentPage === totalPage;

  scrollTo({
    top: 0,
  });
};

$prev.addEventListener('click', () => move(currentPage - 1));
$next.addEventListener('click', () => move(currentPage + 1));

export { currentPage, renderPagination, initPagination };
