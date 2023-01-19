import React from 'react';
import styled from 'styled-components';

const MyButton = styled.a`
  position: relative; /* 자기가 박힌 위치에서 있음. */
  display: inline-block; /*  */
  cursor: pointer; /* 클릭 */
  vertical-align: middle;
  text-decoration: none; /* a태그 밑줄 없애기 */
  line-height: 1.6em; /* 버튼 height에 맞는 line-height 생성 */
  font-size: 1.2em;
  padding: 1.25em 2em;
  background-color: ${(props) => props.mainColor};
  border: 2px solid ${(props) => props.subColor};
  border-radius: 0.75em;
  user-select: none; /* 드래그가 되는지 안되는지 여부 */
  transition: transform 0.15s ease-out; /* 처음에 빨랐다가 천천히 움직이는 형태 */
  transform-style: preserve-3d;
  margin-top: 1em;
  &::before {
    /* sass 문법 */
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    /* 부모요소랑 동일하게 만들기 */
    background: ${(props) => props.subColor};
    border-radius: inherit; /* 부모랑 동일하게 */
    box-shadow: 0 0 0 2px ${(props) => props.subColor};
    transform: translate3d(0, 0.75em, -1em);
  }
  &:hover {
    background: ${(props) => props.hoverColor};
    transform: translateY(0.25em);
  }
`;

export default function Button({
  text,
  clickEvent,
  mainColor,
  subColor,
  hoverColor,
}) {
  return (
    <MyButton
      onClick={clickEvent}
      mainColor={mainColor}
      subColor={subColor}
      hoverColor={hoverColor}
    >
      {text}
    </MyButton>
  );
}
