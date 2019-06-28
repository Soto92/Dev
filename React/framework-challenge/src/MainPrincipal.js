import React from 'react';
import Footer from './Footer';
import './MainPrincipal.css';
import CenterTb from './CenterTb';


function MainPrincipal() {
  return ( 
    <div className="conteudo">
          <div className="headerConteudo">
          <div className="lateralTitle">
              <h4 id="txtTitle">Data Tables Advance tables</h4>
          </div>
          <div className="lateralTitle">
            <ul id="listMain">
              <li id="itenListMain" className="icon-home-outline">
                  Home > 
              </li>
              <li id="itenListMain">
                  Tables > 
              </li>
              <li id="itenListMain">
                  Data Tables
              </li>
            </ul>
          </div>
          </div>
          <CenterTb></CenterTb>
          <footer>
            <Footer></Footer>
          </footer>
    </div>  
  );
}
export default MainPrincipal;