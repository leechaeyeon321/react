import React from 'react'

// props = {
//     text: "go naver",
//     href: "http://naver.com"
// }
// 구조 분해 할당
// export default function MainHeader({text}) {
//     function MainHeader({text})
//     const obj = {
//         str: "test",
//         num: 10
//     }

//   const { str, num } = obj;
//   console.log(str);
//   console.log(num);
// }

// 구조 분해 할당을 인자에 적용하는 법
// export default function MainHeader({text, href, userID}) {
//   return (
//     <div>
//         <h1>{userID} 님 반갑습니다!</h1>
//         <a href={href}>{text}</a>
//     </div>
//   )
// }
// 구조 분해 할당을 변수에 적용하는 법
export default function MainHeader(props) {
  const {text, href, userID } = props;
  return (
    <div>
        <h1>{userID} 님 반갑습니다!</h1>
        <a href={href}>{text}</a>
    </div>
  )
}