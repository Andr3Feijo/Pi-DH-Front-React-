import React from "react";
import './style.css'
import Header from '../../components/Header/index'

const Produtos = () =>{
    return (

        <>
        <Header />

        <div className="main-watch">

    <div className="aside-watch">

        <div className="title-aside">
          <h1>Apple</h1>
                      <button id="toggle-button"> Filtros </button>   
                      <a href="/product/create"> 
                        <button className="action-button-create" >
                            Criar novo item 
                        </button> </a>      
        </div>
        
        <div className="line"></div>

        <div className="category-aside">
            <div className="div-filtro">

          <h2>Modelos</h2>
            <ul className="itens-list">
              <li className="item-aside">
                
                <input type="checkbox" id="modelo-1" name="modelo" value="modelo-1"/>
                <label for="modelo-1">Modelo 1</label>
              </li>
              <li className="item-aside">
                <input type="checkbox" id="modelo-2" name="modelo" value="modelo-2"/>
                <label for="modelo-2">Modelo 2</label>
              </li>
              <li className="item-aside">
                <input type="checkbox" id="modelo-2" name="modelo" value="modelo-3"/>
                <label for="modelo-2">Modelo 3</label>
              </li>
              <li className="item-aside">
                <input type="checkbox" id="modelo-2" name="modelo" value="modelo-4"/>
                <label for="modelo-2">Modelo 4</label>
              </li>
              <li className="item-aside">
                <input type="checkbox" id="modelo-2" name="modelo" value="modelo-5"/>
                <label for="modelo-2">Modelo 5</label>
              </li>
            </ul>

            </div>
            <ul>
              <h2>Cor</h2>

            <div className="itens-list">

            <li className="item-aside">
            <input type="checkbox" id="cor-prata" name="cor" value="prata"/>
            <label for="cor-prata">Prata</label>
          </li>


            </div>


          <li className="item-aside">
            <input type="checkbox" id="cor-preto" name="cor" value="preto"/>
            <label for="cor-preto">Preto</label>
          </li>
          <li className="item-aside">
            <input type="checkbox" id="cor-azul" name="cor" value="azul"/>
            <label for="cor-azul">Azul</label>
          </li>
          <li className="item-aside">
            <input type="checkbox" id="cor-vermelho" name="cor" value="vermelho"/>
            <label for="cor-vermelho">Vermelho</label>
          </li>
        </ul>
        <ul>

          <h2>Armazenamento</h2>
          <li className="item-aside">      
            <input type="checkbox" id="cor-prata" name="cor" value="prata"/>
            <label for="cor-prata">64GB</label>
          </li>
      <li className="item-aside">      
        <input type="checkbox" id="cor-prata" name="cor" value="prata"/>
        <label for="cor-prata">120GB</label>
      </li>
      <li className="item-aside">
        <input type="checkbox" id="cor-preto" name="cor" value="preto"/>
        <label for="cor-preto">260GB</label>
      </li>
      </ul>
          </div>
    </div>

    <section className="watch-products">
      
      <div className="products-container">
        {/*<% products.forEach((product) => { %>
          <a href="/product/detail/<%= product.id %>" className="products-card" data-modelo="<%= product.modelo %>" data-cor="<%= product.cor %>" data-storage="<%= product.armazenamento %>">
            <figure className="product-box_image">
              <img src="/images/produtos/<%= product.image %>" alt="imagem do produto">
            </figure>
            <h3><%= product.name %></h3>
            <p><%= toThousand(Number(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })) %> </p>
          </a>
        <% }) %>*/}
      </div>
    </section>
    

</div>

        
        </>

    )
}

export default Produtos