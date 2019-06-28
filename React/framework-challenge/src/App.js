import React from 'react';
import './App.css';
import LeftPerfil from './LeftPerfil';
import Header from './Header';
import './fontello-8dcd702f/css/fontello.css';

function App() {
  return ( 
    <div className = "App" >
        <Header></Header>
      <main>
      <input type="checkbox" id="menu-bar"></input>
        <LeftPerfil></LeftPerfil>
      </main>
    </div>
  );
}

export default App;