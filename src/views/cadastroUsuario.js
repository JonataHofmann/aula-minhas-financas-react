import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import {withRouter} from 'react-router-dom'
class CadastroUsuario extends React.Component
{
    state = {
        nome:'',
        email:'',
        senha:'',
        senhaRepeticao:''
    }

    cadastrar = () =>{
        console.log(this.state);
    }

    cancelar = () =>{
        this.props.history.push('/login')
    }

    render(){
        return(
          
                <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup lable="Nome: *" htmlFor="inputNome">
                                    <input  type="text" 
                                            id="inpupNome" 
                                            className="form-control"
                                            name="nome"
                                            onChange={e=>this.setState({nome:e.target.value})}/>
                                </FormGroup>
                                <FormGroup lable="Email: *" htmlFor="inputEmail">
                                    <input  type="text" 
                                            id="inpupEmail" 
                                            className="form-control"
                                            name="email"
                                            onChange={e=>this.setState({email:e.target.value})} />
                                </FormGroup>
                                <FormGroup lable="Senha: *" htmlFor="inputSenha">
                                    <input  type="password" 
                                            id="inputSenha" 
                                            className="form-control"
                                            name="senha"
                                            onChange={e=>this.setState({senha:e.target.value})} />
                                </FormGroup>
                                <FormGroup lable="Confirme a Senha: *" htmlFor="inputSenhaRepeticao">
                                    <input  type="password" 
                                            id="inputSenhaRepeticao" 
                                            className="form-control"
                                            name="senhaRepeticao"
                                            onChange={e=>this.setState({senhaRepeticao:e.target.value})} />
                                </FormGroup>
                                <button 
                                    onClick={this.cadastrar} 
                                    className="btn btn-success">Salvar</button>
                                <button 
                                    className="btn btn-danger"
                                    onClick={this.cancelar}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </Card>
       

        );
    }
}
export default withRouter(CadastroUsuario);