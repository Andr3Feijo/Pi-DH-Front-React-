import React from "react"
import style from './style.css'

const Header = () => {
  
 document.addEventListener('click',function(e){
  // Hamburger menu
  if(e.target.classNameList.contains('hamburger-toggle')){
    e.target.children[0].classNameList.toggle('active');
  }
})   
  return (
   <>
      <header className="header ">
      <div className="div-topo">
        <div className="">
          <a href="/">
            <img src="/images/I-SPACE logo oficial.jpg" alt="" id="img-logo"/>

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
        <a className="" href="users/create">Cadastro</a>
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
                  <a className=""  href="/sobre">Sobre</a>
                </li>
                <li className="">
                  <a className=""  href="/">Serviços</a>
                </li> 
                <li className="">
                  <a className=""  href="/estoque">Estoque</a>
                </li>
              </ul>  
        </nav>

   </header>
   </>
  )
}









export default Header