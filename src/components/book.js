import { loading } from './loading.js';
import { getList } from '../api/bookAPI.js';
import {
  getBookmarkList,
  toggle as toggleBookmark,
} from '../api/bookmarkStorage.js';
import { handleToast } from './toast.js';

const MAX_DESC_LENGTH = 50;
const $bookList = document.querySelector('.bookList');
const bookMap = new Map();

const updateBookmark = (id) => {
  bookMap
    .get(id)
    .querySelector('.like')
    .classList.toggle('on', getBookmarkList().includes(id));
};

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
      <span class="author">${author.replace(/\(.+\)/g, '').split(', ')[0]}</span> /
      <span class="publisher">${publisher}</span>
	  </p>
	  <a class="more" href="${link}" target="_blank">자세히보기</a>
	  <button class="like ${getBookmarkList().includes(id) ? 'on' : ''}"></button>
	</div>
  `;

  bookMap.has(id) || bookMap.set(id, $book);

  $book.addEventListener('click', ({ target }) => {
    const $likeBtn = target.closest('.like');
    if ($likeBtn) {
      try {
        toggleBookmark(id);
        $likeBtn.classList.toggle('on');
        const $removed = $likeBtn.closest(
          '.modal .bookWrap:not(:has(.like.on))',
        );
        if (!!$removed) {
          $removed.remove();
          updateBookmark(id);
        }
        handleToast(`✅ 정상적으로 처리되었습니다.`, 'success', 'bottom right');
      } catch (error) {
        handleToast(error.message, 'error', 'bottom right');
      }
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
          bookMap.clear();
          $target.append(...item.map(createBookElement));
          return data;
        }),
      ),
    ),
  );
};

export { renderBookList, createBookElement };
