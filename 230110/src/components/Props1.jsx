import React from 'react'
const Food = props => {
    return (
        <div>안녕하세요, 제가 좋아하는 음식은 
            <span style={{color: "red"}}>{props.food}</span>
            입니다.</div>
    )
}
Food.defaultProps = {
    food: '아이스크림'
}
const Props1 = () => {
    return <Food />
}
export default Props1