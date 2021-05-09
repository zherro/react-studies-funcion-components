import React, { Fragment, useState } from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Typography } from '@material-ui/core';

function FormRegistry({validarCPF, aoEnviar}) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    function formularioAtual(etapa) {
        switch(etapa) {
           case 0:
                return <DadosUsuario aoEnviar={proximo} />;
            case 1:
                return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
            case 2:
                return <DadosEntrega aoEnviar={aoEnviar}/>;
            default:
                return <Typography>Erro ao selecionar formulario</Typography>
    
        }
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <Fragment>
            { formularioAtual(etapaAtual) }
        </Fragment>
    );
}

export default FormRegistry;