import { renderBookList } from './book.js';
import { initPagination } from './pagination.js';
import { handleToast } from './toast.js';

const MIN_KEYWORD_LENGTH = 1;
const MAX_KEYWORD_LENGTH = 30;

const $searchForm = document.getElementById('searchForm');
const $searchResult = document.querySelector('.searchResult');

let keyword = '';

const handleSearch = () => {
  const { searchInput: $input } = $searchForm;
  const value = $input.value;
  if (
    !value.trim() ||
    value.length < MIN_KEYWORD_LENGTH ||
    value.length > MAX_KEYWORD_LENGTH
  ) {
    throw new Error('⛔ 최소 1글자이상, 최대 30글자까지 입력할 수 있습니다.');
  }

  keyword = value;
  $searchResult.classList.add('on');
  $searchResult.querySelector('.keyword').textContent = keyword;
  renderBookList({ query: keyword }) //
    .then((data) => {
      const { totalResults } = data;
      initPagination(totalResults);
    });
};

$searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  try {
    handleSearch();
  } catch (error) {
    handleToast(error.message, 'error', 'top center');
  }
});

export { keyword };
