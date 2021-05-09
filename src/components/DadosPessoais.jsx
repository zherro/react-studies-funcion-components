import React,{useState, useContext} from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from '../conetext/ValidacoesCadastro';

function DadosPessoais({aoEnviar}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);

  const [erros, setErros] = useState({cpf:{valido:true, texto:""}, nome: { valido: true, texto: "" }})

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    console.log("possoEnviar ?");
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()) {
          aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}

        name="nome"
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}

        name="cpf"
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
