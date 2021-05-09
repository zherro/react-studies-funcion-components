import React, { Fragment, useEffect, useState } from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Typography } from '@material-ui/core';

function FormRegistry({ validarCPF, aoEnviar }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        console.log(dadosColetados);
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />,
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo();
    }
    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }
    return <>{formularios[etapaAtual]}</>;
}

export default FormRegistry;