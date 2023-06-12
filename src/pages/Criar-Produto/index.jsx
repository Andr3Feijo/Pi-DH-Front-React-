import React from "react";
import './style.css'
import Header from "../../components/Header";

const CriarProduto = () => {

    return (<>
    <Header />
    
<main className="mainCreate">
    <div className="container products-wrapper">
        <div className="row containertitle">
            <div className="col-12 createTitle">
                <h1 className="products-title">Formulário de Inclusão de Produto</h1>
            </div>
        </div>
        <div className="col-12 createFormulario">
            <form action="/product" method="POST" enctype="multipart/form-data" className="form01">
                <div className="row product-detail">
                    <div className="col-12 col-md-6 cardCreate">
                        <label for="name" className="form-label">Nome:</label>
                        <input type="text" id="name" name="name" placeholder="Informe o nome do produto" className="form-input"/>
                    </div>
                    <div className="col-12 col-md-6 cardCreate">
                        <label for="price" className="form-label">Preço:</label>
                        <input type="number" id="price" name="price" placeholder="Informe o preço do produto" className="form-input"/>
                    </div>
                    <div className="col-12 col-md-6 cardCreate">
                        <label for="discount" className="form-label">Desconto:</label>
                        <input type="number" id="discount" name="discount" placeholder="Informe o desconto do produto" className="form-input"/>
                    </div>
                    <div className="col-12 cardCreate">
                        <label for="type" className="form-label">Tipo:</label>
                        <select name="type" id="type" className="form-label">
                          <option value="1">iPhone</option>
                          <option value="2">Mac</option>
                          <option value="3">iPad</option>
                          <option value="4">Watch</option>
                        </select>
                        
                    </div>
                    <div className="col-12 col-md-6 cardCreate">
                        <label for="image" className="form-label">Imagem:</label>
                        <input type="file" id="image" name="image" className="form-input input-img"/>
                    </div>
                    <div className="col-12 cardCreate">
                        <button type="submit" className="buy-now-button">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</main>

    
    </>)

}

export default CriarProduto