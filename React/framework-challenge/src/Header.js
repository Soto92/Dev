import React from 'react';
import './RightPerfilHeader';
import './fontello-8dcd702f/css/fontello.css';
import RightPerfilHeader from './RightPerfilHeader';

function Header() {

  return ( 
    <div className="mainHeader">
      <div className="topo">
       <h5>AdminPanelTutorial </h5>
      </div>  
      <div className="buttonHamburguer">
        <label className="icon-menu" for="menu-bar">
        </label>
        </div>
      <RightPerfilHeader></RightPerfilHeader>
    </div>
  );
}
export default Header;