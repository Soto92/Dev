import React from 'react'
import { childrenWithProps } from './utils'
// export default props =>
//     <div>
//         <h1>{props.nome} {props.sobrenome}</h1>
//         <ul>
//             <Filho nome="Mauricio" sobrenome={props.sobrenome}/>
//             <Filho {...props}/>
//             <Filho {...props} nome="Sandra"/>
//         </ul>
//     </div>

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <ul>
           {/* {props.children} */}
           { childrenWithProps(props) }
        </ul>
    </div>