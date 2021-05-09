import { Component, Fragment } from 'react';
import FormRegistry from './components/FormRegistry';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Form Registry</h1>
        <FormRegistry aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Fragment>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
