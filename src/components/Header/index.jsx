import React from 'react';
import ImgLogo from "../../images/I-SPACE logo oficial.jpg"
import './style.css'

const Header = () => {
  return (
    <>
    <header className="header texto_garamond">
      <div className="div-topo">
        <div className="logoHeader">
          <a href="/">
            <img src={ImgLogo} alt="" id="img-logo"/>

          </a>
          
        </div>
        <form className="form-header">
          <div className="input-pesquisar">
              <input className="" type="search" placeholder="Pesquise" aria-label="Search"/>
              <button className="button-send" type="submit">
                <p>Buscar</p>
                </button>
          </div>
  
      </form>
      <div className="div-user">
      <li className="">
        <a className="" href="/cadastro">Cadastro</a>
      </li>
      <li className="">
        <a className="" href="../login">Login</a>
      </li>
      </div>
      </div>
     
      <nav className="div-navbar">
              <ul className="ul-nav">
                <li className="/">
                  <a className="" href="/">Inicio</a>
                </li>

                  <li className="">
                    <a className="" href="/productPage/iphone">Iphone</a>
                  </li>
                  <li className="">
                    <a className="" href="/productPage/mac">Mac</a>
                  </li>
                  <li className="">
                    <a className="" href="/productPage/ipad">Ipad</a>
                  </li>
                  
                <li className="">
                  <a className=""  href="/productPage/watch">Watch</a>
                </li>
                <li className="">
                  <a className=""  href="/estoque">Estoque</a>
                </li>
              </ul>  
        </nav>
  
   </header>
   

    </>
  );
};

export default Header;
