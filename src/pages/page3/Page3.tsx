import React, { ChangeEvent, useEffect } from "react";
import * as C from './styles';
import { Theme } from "../../components/theme";
import { Navigate, useNavigate, Link } from 'react-router-dom'
//hook de navegação
import { useForm, FormActions } from '../../contexts/FormContext'

export const Page3 = () => {

    const Navigate = useNavigate()
    const  {state, dispatch } = useForm()

    //if e else para verificação. Só vou para a próxima página se os dados necessários da tela forem preenchidos. Nesse caso, se o nome não for vazio, vou para a próxima tela.
    const handleNextStep = () => {
        if (state.email !== '' && state.github !== '') {
            Navigate('/page4')
        }
        else {
            alert('Informe os seus meios de contato!')
        }
    }

    //quando carregar essa tela, dou um dispatch atualizando o passo atual no contexto
    useEffect (() => {
        if (state.name === ''){
            Navigate('/')
        }
        else {
        dispatch ({
            type: FormActions.setCurrentStep,
            payload: 3
        })
        }
    }, [])

    //alterando conforme digito no input - processo simultâneo
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch ({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch ({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }
    return(
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Informe seus meios de contato, {state.name} :)</h1>
                <p>Preencha os campos para que possamos entrar em contato com você.</p>

                <hr />

                <label>
                    Qual o seu e-mail?
                    <input 
                        type="email"
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual o seu GitHub?
                    <input 
                        type="url"
                        autoFocus
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/page2" className="btn">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar</button>
            </C.Container>
        </Theme>
    )
}