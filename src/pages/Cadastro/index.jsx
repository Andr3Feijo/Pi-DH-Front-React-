import React from "react";
import './style.css';
import Header from '../../components/Header/index'


const Cadastro = () =>{

    return (
      <>
      <Header />
      
      <div className="body-cadastro texto_garamond">

<form
method="POST"
action="/users/create"
className="form-cadastro"
>
{/*<% if (typeof errors !== 'undefined') { %>
  <ul className="div-errors" style="color: red;">
    <% for(let error in errors) { %>
      <li> <%= errors[error].msg %> </li>
    <% } %>
  </ul>
    <% } %>*/}
  <div className="divForm">

    <div className="divInput">
    <div className="labelCadastro">Nome</div>
    <input type="text" name="name"/>
    </div>

    <div className="divInput">
    <div className="labelCadastro">Email</div>
    <input type="text" name="email"/>
    </div>

    <div className="divInput">
    <div className="labelCadastro">Senha</div>
    <input type="text" name="pwd"/>
    </div>

    <div className="divInput">
    <div className="labelCadastro">Confirmação de senha</div>
    <input type="text"/>
    </div>

    <button className="btn-cadastr">
      Cadastre-se
    </button>
  </div>
</form>
</div>
      
      </>
    )

}

export default Cadastro