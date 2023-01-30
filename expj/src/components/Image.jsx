import React from 'react';
import catImg from '../cat.jpg';

export default function Image() {
  const imgStyle = { width: '300px' };
  return (
    <>
      <img src="/images/cat.jpg" alt="고양이" style={imgStyle} />;
      <img src={catImg} alt="고양이" style={imgStyle} />;
    </>
  );
}
