import React from 'react'
import b from '../book.jpg'

const Book = props => {
    const book_style = {backgroundColor: "#F2F5A9", width: "500px"}
    const {title, author, price, type} = props;
    return (
        <div style={book_style}>
            <h2 style={{color: "orange"}}>이번주 베스트셀러</h2>
            <br />
            <img src={b} style={{width: "100px"}}/>
            <h2>{title}</h2>
            <br />
            <p>저자:{author}</p>
            <p>판매가:{price}</p>
            <p>구분:{type}</p>
        </div>
    )
}

Book.defaultProps = {
    title: '내게 무해한 사람', 
    author: '최은영', 
    price: '13,500원', 
    type: '소설'
}
const Props2 = () => {
    return <Book  />
}
export default Props2