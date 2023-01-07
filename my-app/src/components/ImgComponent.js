import React from 'react'
import logo from '../logo.svg'
import BtnToNaver from './BtnToNaver';

export default function ImgComponent() {
    const inlineStyle = { marginTop: "32px", backgroundColor: "pink"};
  return (
    <div>
        <img src={logo} alt="이미지" style={inlineStyle}/>
        <BtnToNaver />
    </div>
  )
}
