import React from 'react'

// export default function ListChild(props) {
//     const {h2, p} = props
//   return (
//     <div>
//         <h2>{h2}</h2>
//         <p>{p}</p>
//         <hr />
//     </div>
//   )
// }
export default function ListChild({title, content}) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <hr />
    </div>
  )
}
