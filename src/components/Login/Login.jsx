import React, { Component } from 'react'
import axios from 'axios'

import { URL } from '../../constantes'
import logo from '../../assets/images/logo_vertical.png'
import './Login.css'


export default class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          crp: "",
          password: ""
        };
      }

    validateForm() {
    return this.state.crp.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        try {
            
            axios.post(URL, {crp: this.state.crp, password: this.state.password}).then(resp => {
                console.log(resp);
            });
        } catch (e) {
          alert(e.message);
        }
    
    }
    

    render() {
        return(<div className="container">
                    <div className="row">
                        <div className="col-12">
                            <img src={logo} className="logo mx-auto d-flex" alt="fobia logo" />
                                {this.renderForm()}    
                        </div>
                    </div>
                </div>
            )
                
    }

    renderForm() {
        return(
            <form className="col-12 col-md-6 col-lg-4 mx-auto mt-5" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-12">
                            <label><i className="fas fa-user ml-1"/> CRP</label>
                            <input className="form-control" id="crp" value={this.state.crp} onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-12">
                            <label><i className="fas fa-lock ml-1"></i> Senha</label>
                            <input className="form-control" type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col-12 text-center">
                            <input type="submit" value="Entrar" className="bg-dark btn-block mb-3"  disabled={!this.validateForm()}/>
                            
                            <a href="#" className="light-accent text-decoration-none">Esqueceu sua senha?</a>
                        </div>
                    </div>
                
            </form>
        )
    }


}
