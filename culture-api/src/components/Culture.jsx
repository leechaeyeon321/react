import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Culture() {
  // const [tempData, setTempData] = useState('');
  const [culData, setCulData] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `http://api.kcisa.kr/openapi/service/rest/meta2020/getKOCAperf?serviceKey=927183b2-7bfd-4abd-aff7-7ae2ca0940f5&numOfRows=10&pageNo=1`;
    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);
        const data = responseData.data;
        setCulData(data.response.body.items.item[0].url);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        <img src={culData} alt="" />
      </>
    );
  }
}
