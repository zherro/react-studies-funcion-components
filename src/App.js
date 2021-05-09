import { Component, Fragment } from 'react';
import FormRegistry from './components/FormRegistry';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Form Registry</h1>
        <FormRegistry />
      </Fragment>
    );
  }
}

export default App;
