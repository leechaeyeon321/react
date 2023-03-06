import axios from 'axios';
import React, { useEffect, useState } from 'react';
import XMLParser from 'react-xml-parser';
function parseStr(dataSet) {
  const dataArr = new XMLParser().parseFromString(dataSet).children;
  console.log(dataArr);
}

async function Play() {
  // // const [tempData, setTempData] = useState('');
  const [culData, setCulData] = useState('');
  const [loading, setLoading] = useState(true);
  await axios({
    method: 'get',
    url: `http://www.kopis.or.kr/openApi/restful/pblprfr?service={}&stdate=20220101&eddate=20230131&cpage=1&rows=5`,
  }).then(function (response) {
    const dataSet = response.data;
    parseStr(dataSet);
    console.log(dataSet);
    setLoading(false);
  });
  if (loading) {
    return <p>Loading</p>;
  } else {
    return (
      <>
        {/* <img src={culData} alt="" /> */}
        데이터 확인
      </>
    );
  }
}

export default Play;
