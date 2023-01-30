import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  border: 2px solid #ddd;
  border-radius: 0.5em;
  padding 10px;
`;

const Input = styled.input`
  height: 200px;
  width: 95%;
`;

export default function Main() {
  return (
    <>
      <Header />
      <Div>
        <Div></Div>
        <Table>
          <tr>
            <select name="culture">
              <option value="">선택</option>
              <option value="책">책</option>
              <option value="공연">공연</option>
              <option value="전시">전시</option>
              <option value="영화">영화</option>
            </select>
          </tr>
          <tr>
            <td>
              제목:{' '}
              <input type="text" placeholder="제목을 입력하십시오."></input>
            </td>
          </tr>
          <tr>
            <td>내용</td>
          </tr>
          <tr>
            <td>
              <Input type="text" placeholder="리뷰를 입력하십시오."></Input>
            </td>
          </tr>
          <tr>
            <td>
              <button>등록</button>
            </td>
          </tr>
        </Table>
      </Div>
    </>
  );
}
