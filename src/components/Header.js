import React from 'react';
import Imagem from '../assets/perfil.png';


function Header() {
  return(
    <header className="site-header">
      <div className="title">
        <h1>facebook.</h1>
      </div>
      
      <div className="logo">
        <h5>Meu perfil</h5>
        <img src={Imagem} />
      </div>
    </header> 
  )
}

export default Header;