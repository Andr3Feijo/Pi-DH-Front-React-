import React from "react"; 
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from "./pages/Home/index"
import Login from "./pages/Login/index"
import Cadastro from "./pages/Cadastro/index"
import CriarProduto from "./pages/Criar-Produto";
import Produtos from "./pages/Produtos";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                  exact
                  path="/"
                  element={<Home />}
            />

                 <Route
                  path="/product"
                  element={<Produtos/>}
                />

                <Route
                  path="/product-detail"
                  element={null}
                />

                <Route
                  path="/product-create"
                  element={<CriarProduto />}
                />
                <Route 
                  path="/login"
                  element={<Login />}
                />
                <Route 
                  path="/cadastro"
                  element={<Cadastro />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default Router