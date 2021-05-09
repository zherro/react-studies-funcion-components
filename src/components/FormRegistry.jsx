import React, { Fragment, useEffect, useState } from 'react';
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';

function FormRegistry({ aoEnviar }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if (etapaAtual == formularios.length) {
            console.log(dadosColetados);
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo cadastro</Typography>,
    ];

    function coletarDados(dados) {
        setDados({ ...dadosColetados, ...dados });
        proximo();
    }
    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }
    return <Fragment>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
    </Fragment>;
}

export default FormRegistry;