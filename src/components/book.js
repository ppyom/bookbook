import { loading } from './loading.js';
import { getList } from '../api/bookAPI.js';
import {
  getBookmarkList,
  toggle as toggleBookmark,
} from '../api/bookmarkStorage.js';

const MAX_DESC_LENGTH = 50;
const $bookList = document.querySelector('.bookList');

const createBookElement = (book) => {
  const {
    isbn13: id,
    title,
    description,
    cover = 'src/assets/images/no_image.png',
    link,
    author,
    publisher,
    priceStandard,
  } = book;
  const $book = document.createElement('li');
  $book.classList.add('bookWrap');
  $book.innerHTML = `
  <div class="book">
	  <div class="imageWrap">
      <img src="${cover}" alt="book cover" />
      <div class="description">
        ${
          description.length > MAX_DESC_LENGTH
            ? `${description.substring(0, MAX_DESC_LENGTH)}...`
            : description
        }
      </div>
	  </div>
	  <p class="title">
		    ${title}
	  </p>
	  <p class="price">${priceStandard.toLocaleString()}원</p>
	  <p>
      <span class="author">${author}</span> /
      <span class="publisher">${publisher}</span>
	  </p>
	  <a class="more" href="${link}" target="_blank">자세히보기</a>
	  <button class="like ${getBookmarkList().includes(id) ? 'on' : ''}"></button>
	</div>
  `;

  $book.addEventListener('click', ({ target }) => {
    const $likeBtn = target.closest('.like');
    if ($likeBtn) {
      toggleBookmark(id);
      $likeBtn.classList.toggle('on');
      // TODO bookmarkList 내부의 bookmark 해제 시
      //  현재 bookList에 표시되어있는 bookmark도 해제되로록 처리 필요
    }
  });

  return $book;
};

const renderBookList = async (options, $target = $bookList) => {
  return loading(
    new Promise((resolve) =>
      resolve(
        getList(options).then((data) => {
          const { item } = data;
          $target.innerHTML = '';
          $target.append(...item.map(createBookElement));
          return data;
        }),
      ),
    ),
  );
};

export { renderBookList, createBookElement };
