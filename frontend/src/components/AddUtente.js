import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class AddUtente extends Component {
    constructor() 
    {
        super()
        
        this.state = {
          Number: '',
          Name: '',
          Sex: '',
          Birth: '',
          redirect: false
        }

        this.handleChange = this.handleChange.bind(this)
        //this.handleOnSubmit = this.handleChange.bind(this)
    }

    handleChange(event) 
    {
      const {name, value} = event.target

      this.setState({
        [name]: value
      })
    }

    /*
    fetch('https://mywebsite.com/endpoint/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        }),
    });
    */

    handleOnSubmit = (e) =>
    {
        e.preventDefault()
        const data = {
            nome: this.state.Name,
            sexo: this.state.Sex,
            data: this.state.Birth,
            nUtente: this.state.Number
        }
        axios.post('http://localhost:3100/newUtente',data)
        .then(data=>{
            this.setState({redirect:true})
        })
        
    }

    render() 
    {
        const {redirect} = this.state
        if(redirect){
            return <Redirect to="/utente"/>
        }else {
            return (
                <form onSubmit={this.handleOnSubmit}>
                    <label>Nome</label>
                    <input class="w3-input w3-round-large"
                        type="text"
                        value={this.state.Name}
                        name="Name"
                        placeholder="Nome do Utente"
                        onChange={this.handleChange}
                    />
                    <label>Número do Utente</label>
                    <input class="w3-input w3-round-large"
                        type="text"
                        value={this.state.Number}
                        name="Number"
                        placeholder="Número do Utente"
                        onChange={this.handleChange}
                    />
                    <label>Data de nascimento do Utente</label>
                    <input class="w3-input w3-round-large"
                        type="date"
                        value={this.state.Birth}
                        name="Birth"
                        placeholder=""
                        onChange={this.handleChange}
                    />
                    <label>Género</label>
                    <input class="w3-input w3-round-large"
                        type="text"
                        value={this.state.Sex}
                        name="Sex"
                        placeholder="Género do utente"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleOnSubmit} class="w3-button w3-white w3-border w3-border-blue w3-round-large w3-hover-light-blue">Adicionar Utente</button>
                </form>
            )
        }
        }

           
}

export default AddUtente;