// /* eslint-disable react-hooks/rules-of-hooks */
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const KAKAO_KEY = '';
// const Kakao = axios.create({
//   baseURL: 'https://dapi.kakao.com',
//   headers: {
//     Authorization: 'KakaoAK ' + KAKAO_KEY,
//   },
// });

// const KakaoSearch = (params) => {
//   return Kakao.get('/v3/search/book', { params });
// };

// const [books, setBooks] = useState([]);
// const navigate = useNavigate();

// const getBooks = async () => {
//   const search = value;
//   try {
//     if (search === '') {
//       setBooks([]);
//     } else {
//       const params = {
//         query: search,
//         size: 45,
//         target: searchOption,
//       };
//       const result = await KakaoSearch(params);
//       if (result) {
//         setBooks(result.data.documents);
//         navigate('/market', { state: result.data.documents });
//       } else {
//         console.log('fail');
//       }
//     }
//   } catch (error) {
//     console.log('error', error);
//   }
// };
