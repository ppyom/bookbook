import { renderBookList } from './book.js';
import { initPagination } from './pagination.js';

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
    // 입력값에 대한 처리
    return;
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
  handleSearch();
});

export { keyword };
