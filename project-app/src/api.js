import axios from 'axios';

const Kakao = axios.create({
  baseURL: 'https://dapi.kakao.com', // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: 'KakaoAK + {e1f6c4eca556070d2829362c9f887cee}',
  },
});

// search book api
export const blogSearch = (params) => {
  return Kakao.get('/v3/search/blog', { params });
};
