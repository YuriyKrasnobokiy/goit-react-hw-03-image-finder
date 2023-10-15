import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api';

// const apiKey = '39207627-8a410277f132e49ffdfa9ce97';

export const searchImg = async (startPage, value) => {
  const BASE_URL = 'https://pixabay.com/api/?';
  const serchQueryParams = new URLSearchParams({
    key: '39207627-8a410277f132e49ffdfa9ce97',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
    page: startPage,
    q: value,
  });
  const resp = await axios.get(`${BASE_URL}${serchQueryParams}`);
  return resp.data;
};

// searchImg(1, 'cat').then(data => console.log(data));
// export const fetchImages = async searchQuery => {
//   const queryParams = `q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
//   const response = await axios.get(`?${queryParams}`);
//   return response.data.hits;
// };
