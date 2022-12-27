import React, { useEffect } from "react";
import * as C from './styles';
import { Theme } from "../../components/theme";
import { useForm, FormActions } from '../../contexts/FormContext'
import { useNavigate, Link } from 'react-router-dom'
import { Card } from "../../components/card";

export const Page4 = () => {
    const Navigate = useNavigate()
    const  {state, dispatch } = useForm()

    useEffect (() => {
        if (state.name === ''){
            Navigate ('/')
        }
        if (state.email === ''){
            Navigate ('/page3')
        }
        if (state.github === ''){
            Navigate ('/page3')
        }
        else {
            dispatch ({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }
    }, [])

    return (
        <Theme>
            <C.Container>
                <p>Finalizado</p>
                <h1>Chegamos ao fim, {state.name}!</h1>
                <p>Confira os seus dados abaixo e os modifique se necessário.</p>
                
                <hr />

                <Card nome={state.name} nivel={state.level} email={state.email} github={state.github} /> 

                <Link to="/page3" className="btn">Voltar</Link>
            </C.Container>

        </Theme>
    )
}
