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
    url: `http://www.kopis.or.kr/openApi/restful/pblprfr?service={29625cd97d1e411da84e94311a49ad75}&stdate=20220101&eddate=20230131&cpage=1&rows=5`,
  }).then(function (response) {
    const dataSet = response.data;
    parseStr(dataSet);
    console.log(dataSet);
    setLoading(false);
  });
  //   useEffect(() => {
  //     const url = `http://www.kopis.or.kr/openApi/restful/pblprfr?service={29625cd97d1e411da84e94311a49ad75}&stdate=20220101&eddate=20230131&cpage=1&rows=5&prfstate=02&signgucode=11&signgucodesub=1111`;
  //     axios
  //       .get(url)
  //       .then((responseData) => {
  //         console.log(responseData);
  //         // const data = responseData.data;
  //         // setCulData(data.response.body.items.item[0].url);
  //         setLoading(false);
  //       })
  //       .catch((error) => console.log(error));
  //   }, []);

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
