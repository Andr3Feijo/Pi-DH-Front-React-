import React from "react";
import {
   BrowserRouter, 
   Routes,
   Route
} from 'react-router-dom'

const Router = () =>{
    return (
        <BrowserRouter>
          <Routes>
            <Route
                exact
                path="/"
                element={null}
            />
             <Route
                exact
                path="/product-detail"
                element={null}
            />
             <Route
                exact
                path="/user"
                element={null}
            />
          </Routes>   
        </BrowserRouter>
    )
}
export default Router