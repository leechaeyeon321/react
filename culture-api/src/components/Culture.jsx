import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Culture() {
  // // const [tempData, setTempData] = useState('');
  // const [culData, setCulData] = useState('');
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=2f86f16e407ccd98d3a2e9f9d7edd11f&targetDt=20120101`;
  //   axios
  //     .get(url)
  //     .then((responseData) => {
  //       console.log(responseData);
  //       // const data = responseData.data;
  //       // setCulData(data.response.body.items.item[0].url);
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // if (loading) {
  //   return <p>Loading</p>;
  // } else {
  //   return (
  //     <>
  //       {/* <img src={culData} alt="" /> */}
  //       데이터 확인
  //     </>
  //   );
  // }
  useEffect(() => {
    axios
      .get('https://openapi.naver.com/v1/search/movie.json', {
        params: { query: '영화이름' },
        headers: {
          'X-Naver-Client-Id': 'hdloT8hr8NgBEFkpD04Z',
          'X-Naver-Client-Secret': 'kG7DAPHBXR',
        },
      })
      .then((response) => {
        console.log('response', response.data.items);
      });
  });
}
