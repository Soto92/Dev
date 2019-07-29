import React from 'react';
import ReactDOM from 'react-dom';
// import { BomDia as Dia, BoaNoite } from './componentes/Multiplos'
// import X from './componentes/Multiplos';

// ReactDOM.render(
//     <div>
//         <Dia nome="Mauricio" />
//         <BoaNoite nome="Maria" />
//         <X nome="João" />
//     </div>
    
// , document.getElementById('root'));

// import Saudacao from './componentes/Saudacao'
// ReactDOM.render(
//         <div>
//            < Saudacao tipo="Bom Dia" nome="Mauricio" />
//         </div>
        
// , document.getElementById('root'));
import Pai from './componentes/Pai'
import Filho from './componentes/Filho';
ReactDOM.render(
        <div>
           <Pai nome='Claudio' sobrenome='Soto'>
               <Filho nome='Mauricio'/>
               <Filho nome='Sandra'/>
              
            </Pai>
        </div>
        
, document.getElementById('root'));