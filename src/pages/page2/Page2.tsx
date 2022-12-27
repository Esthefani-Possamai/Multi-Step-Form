import React, { ChangeEvent, useEffect } from "react";
import * as C from './styles';
import { Theme } from "../../components/theme";
import { Navigate, useNavigate, Link } from 'react-router-dom'
//hook de navegação
import { useForm, FormActions } from '../../contexts/FormContext'
import { SelectOption } from "../../components/selectOption";

export const Page2 = () => {

    const Navigate = useNavigate()
    const  {state, dispatch } = useForm()

    //if e else para verificação. Só vou para a próxima página se os dados necessários da tela forem preenchidos. Nesse caso, se o nome não for vazio, vou para a próxima tela.
    const handleNextStep = () => {
        Navigate('/page3')
    }

    //quando carregar essa tela, dou um dispatch atualizando o passo atual no contexto
    //caso eu recarregue essa página, o nome não estará salvo, logo, é feito o if para navegar a página de inserir o nome do usuário
    useEffect (() => {
        if (state.name === ''){
            Navigate('/')
        }
        else {
        dispatch ({
            type: FormActions.setCurrentStep,
            payload: 2
        })
        }
    }, [])

    //quando clico no campo de seleção, passo a props level com determinado valor, que por meio da função setLevel altera o valor de level no contexto
    const setLevel = (level:number) => {
        dispatch ({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve a sua fase na programação?</h1>
                <p>Selecione a opção que melhor condiz com seu estágio profissional.</p>
                <hr />
                <SelectOption 
                icon="🥳"
                title="Sou iniciante"
                description="Comecei a programar há menos de 2 anos"
                selected={state.level === 0}
                onClick={()=>setLevel(0)}
                />

                <SelectOption 
                icon="💡"
                title="Sou programador(a)"
                description="Já programo há mais de dois anos"
                selected={state.level === 1}
                onClick={()=>setLevel(1)}
                />
                
                <Link to="/" className="btn">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}