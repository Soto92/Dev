import React from 'react';
import perfil from './img/0.jpeg';
import MainPrincipal from './MainPrincipal';
import './fontello-8dcd702f/css/fontello.css';
import ListLeftPerfil from './ListLeftPerfil';


function LeftPerfil() {
  return ( 
    
    <div className="left">
        <nav className="menu">
          <nav className="dados">
            <div className="perfil">
              <img className="foto" src={perfil} alt="perfil"/>
            </div>
            <div>
              <h5>Mauricio Soto</h5> 
              <h5 className="icon-record">Online</h5>
            </div>
          </nav>
          <div>
            <div className="barra">
                <input type="text" id="txtBusca" placeholder="Search.."/>
                <div className="icon-search"></div>
                </div>
          </div>
          <div>
              <ListLeftPerfil></ListLeftPerfil>
          </div>
        </nav>
           
      <div>
      <MainPrincipal></MainPrincipal>
      </div>    
    </div>

  );
}

export default LeftPerfil;