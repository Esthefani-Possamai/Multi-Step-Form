import React, { ChangeEvent, useEffect } from "react";
import * as C from './styles';
import { Theme } from "../../components/theme";
import { Navigate, useNavigate } from 'react-router-dom'
//hook de navegação
import { useForm, FormActions } from '../../contexts/FormContext'

export const Page1 = () => {

    const Navigate = useNavigate()
    const  {state, dispatch } = useForm()

    //if e else para verificação do preenchimento de dados.
    const handleNextStep = () => {
        if (state.name !== '') {
            Navigate('/page2')
        }
        else {
            alert('Informe o seu nome!')
        }
    }

    //quando carregar essa tela, é realizado um dispatch atualizando o passo atual no contexto.
    useEffect (() => {
        dispatch ({
            type: FormActions.setCurrentStep,
            payload: 1
        })
        
    }, [])

    //alterando conforme digito no input - processo simultâneo
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch ({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}