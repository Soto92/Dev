import React from 'react';
import perfil from './img/0.jpeg';

function RightPerfilHeader() {
  return ( 
      <div className="container">
        <div className="RightSup">
          <div className="perfilRight">
           <img className="foto02" src={perfil} alt="perfil"/>
          </div>
          <div>
            <h5>Mauricio Soto</h5> 
          </div>
        </div>
      </div>
  );
}
export default RightPerfilHeader;