import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Book() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx`;
    axios
      .get(url)
      .then((responseData) => {
        console.log(responseData);
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
