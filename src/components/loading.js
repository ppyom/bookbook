const createLoadingElement = () => {
  const $loading = document.createElement('div');
  $loading.classList.add('loading');
  $loading.innerHTML = `
  <i class="fa-solid fa-book"></i>
  <i class="fa-solid fa-book-tanakh"></i>
  <i class="fa-solid fa-book-bookmark"></i>
  <i class="fa-solid fa-book-quran"></i>
  `;
  return $loading;
};

const loading = (fn) => {
  const $loading = createLoadingElement();
  document.body.append($loading);
  return fn.finally(() => {
    $loading.remove();
  });
};

export { loading };
