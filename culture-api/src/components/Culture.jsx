import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Movie() {
  // // const [tempData, setTempData] = useState('');
  const [culData, setCulData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=2f86f16e407ccd98d3a2e9f9d7edd11f&targetDt=20230101`;
    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);
        // const data = responseData.data;
        // setCulData(data.response.body.items.item[0].url);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <p>Loading</p>;
  } else {
    return <>데이터 확인</>;
  }
}
