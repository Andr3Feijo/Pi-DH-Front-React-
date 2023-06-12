import React from "react";
import Header from "../../components/Header";
import './style.css'
import logo from '../../images/LOGO.jpg'

const Login = () => {
    
   return (<>
    <Header />

   <div className="containner-login texto_garamond">

    <div className="header-login "> 
       <div className="left-header-logion">  
          <img src={logo} alt=""/>
        </div>
        <div className="right-header-login">
          <p>100% seguro</p>
        </div>
    </div>

        <div className="text-login">
            <div className="login">
              <h1>Faça login</h1>
            </div>
           <div className="link-login"> 
            <a href="/users/create">Não sou cadastrado</a>
           </div>
        </div>

        {/*<% if (typeof errors !== 'undefined') { %>
          <ul className="div-errors">
            <% for(let error in errors) { %>
              <li> <%= errors[error].msg %> </li>
            <% } %>
          </ul>
            <% } %>*/}
  
        <div className="inputs-form-login">
          <form action="/users/login" method="POST" className="form-input-create-produto">
            <span>e-mail</span>
            <input type="email" name="email" id="input-email"/>
            <span>senha</span>
            <input type="password" name="pwd" id="input-senha"/>
            <button type="submit" id="btn-login">Entrar</button>
        </form>
        </div>

   </div>


    
    </>)

}

export default Login