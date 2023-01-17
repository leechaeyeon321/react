import React from 'react'
import styled from 'styled-components'
/* 모듈을 styled로 가져옴. */

const MyDiv = styled.div`
    background-color: #94e5d2;
`
const MyHeading = styled.h1`
    color: blue;
`
const MySpan = styled.span`
    background-color: pink;
    font-weight: 700;
`

export default function TestStyled() {
  return (
    <MyDiv>
        <MyHeading>h1 태그 입니다.</MyHeading>
        <MySpan>span 태그 입니다.</MySpan>
    </MyDiv>
  )
}
