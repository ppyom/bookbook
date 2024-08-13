const createToastElement = (message, type) => {
  const $toast = document.createElement('div');
  $toast.classList.add('toast');
  $toast.classList.add(type);
  $toast.textContent = `${message}`;
  return $toast;
};

const handleToast = (message, type, position = '', timeout = 2000) => {
  const $toast = createToastElement(message, type);
  $toast.classList.add(...position.split(' '));
  const closeTimer = setTimeout(() => {
    close();
  }, timeout);
  const close = () => {
    $toast.classList.remove('on');
    setTimeout(() => $toast.remove(), 300);
    clearTimeout(closeTimer);
  };
  $toast.addEventListener('click', close);
  document.body.appendChild($toast);
  setTimeout(() => $toast.classList.add('on'));
};

export { handleToast };
