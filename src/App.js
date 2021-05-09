import { Component, Fragment } from 'react';
import FormRegistry from './components/FormRegistry';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Form Registry</h1>
        <FormRegistry aoEnviar={aoEnviarForm} />
      </Fragment>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
