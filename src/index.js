import { renderBookList } from './components/book.js';
import { initPagination } from './components/pagination.js';

const init = () => {
  // api에서 데이터 불러와서 화면(리스트)에 출력
  renderBookList().then((data) => {
    const { totalResults } = data;
    initPagination(totalResults);
  });
};

init();
