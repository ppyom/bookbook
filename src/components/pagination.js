import { renderBookList } from './book.js';

const $pagination = document.querySelector('.pagination');
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
  renderBookList({ page: currentPage }).then(updatePagination);
};

const initPagination = (totalResults) => {
  totalPage = Math.ceil(totalResults / pageSize);
  pageGroup = 0;
  updatePagination();
};

const makePageButton = (page) => {
  const $button = document.createElement('button');

  $button.textContent = page;
  $button.addEventListener('click', () => {
    $pagination.querySelector('.on').classList.remove('on');
    $button.classList.add('on');
    move(page);
  });

  return $button;
};

const renderPagination = () => {
  const $pages = $pagination.querySelector('.pages');

  const firstPage = (pageGroup - 1) * groupSize + 1;
  const lastPage = Math.min(totalPage, pageGroup * groupSize);

  $pages.innerHTML = '';
  for (let idx = firstPage; idx <= lastPage; idx++) {
    const $page = makePageButton(idx);
    if (idx === firstPage) {
      $page.classList.add('on');
    }
    $pages.appendChild($page);
  }
};
const updatePagination = () => {
  const currentPageGroup = updatePageGroup(currentPage);

  if (currentPageGroup !== pageGroup) {
    pageGroup = currentPageGroup;
    renderPagination();
  }

  $prev.disabled = currentPage === 1;
  $next.disabled = currentPage === totalPage;
};

$prev.addEventListener('click', () => move(currentPage - 1));
$next.addEventListener('click', () => move(currentPage + 1));

export { currentPage, renderPagination, initPagination };
