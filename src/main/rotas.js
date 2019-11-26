import React from 'react'
import {Route, Switch, BrowserRouter, DefaultRoute } from 'react-router-dom'

import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'

function Rotas(){
    return(
        <BrowserRouter >
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={CadastroUsuario} />
                
                <Route path="/usuario" >
                    <Route path="/create"  component={CadastroUsuario}/>
                </Route>

               
            </Switch>
        
        </BrowserRouter >
    );
}
export default Rotas;
