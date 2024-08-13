import config from '../config.js';

const baseurl = config.api.baseurl;

const getItemList = async (options) => {
  const { type = 'ItemNewAll', page, sort } = options;
  const url = createURL('itemList', { page, sort });
  url.searchParams.append('type', type);
  return fetch(url).then((res) => res.json());
};
const search = async (options) => {
  const { query, page, sort } = options;
  const url = createURL('search', { page, sort });
  url.searchParams.append('query', query);
  return fetch(url).then((res) => res.json());
};

const getList = async (options = {}) => {
  if (!!options.query) {
    return search(options);
  } else {
    return getItemList(options);
  }
};

const getItem = async (options) => {
  const { id, page, sort } = options;
  const url = createURL(`item/${id}`, { page, sort });
  return fetch(url).then((res) => res.json());
};

const createURL = (endpoint, { page = 1, sort = 'Accuracy' } = {}) => {
  const url = `${baseurl}/${endpoint}`;
  const defaultSearchParams = new URLSearchParams({
    page,
    sort,
  });
  return new URL(`${url}?${defaultSearchParams.toString()}`);
};

export { getList, getItem };
