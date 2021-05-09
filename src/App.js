import { Component, Fragment } from 'react';
import FormRegistry from './components/FormRegistry';
import ValidacoesCadastro from './conetext/ValidacoesCadastro';

import { validarCPF, validarSenha } from "./model/cadastro";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Form Registry</h1>

        <ValidacoesCadastro.Provider
          value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }} >
          <FormRegistry aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>

      </Fragment>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

// function validarCPF(cpf){
//   if(cpf.length !== 11){
//     return {valido:false, texto:"CPF deve ter 11 digitos."}
//   }else{
//     return {valido:true, texto:""}
//   }
// }

export default App;
