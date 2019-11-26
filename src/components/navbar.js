import React from 'react'
import NavBarItem from './navbarItem'
function NavBar(){
    return(
        <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
            <div className="container">
                <a href="home.html" className="navbar-brand" 
                style={{fontSize: '20px', fontWeight: 'bolder'}}>Minhas Finanças</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav">
                        <NavBarItem url="/" label="Home"/>
                        <NavBarItem url="/cadastro-usuario" label="Cadastrar Usuário"/>
                        <NavBarItem url="/" label="Usuários"/>
                        <NavBarItem url="/" label="Lançamentos"/>
                        <NavBarItem url="/login" label="Login"/>
                    </ul>
                </div>
            </div>
        </div>
  
    );
}
export default NavBar;