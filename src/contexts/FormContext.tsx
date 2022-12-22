import React, { createContext, useContext, useReducer, ReactNode } from "react";

//----------------------------------------------------------------------------
//types dos dados armazenados
type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
};

type Action = {
    type: FormActions;
    payload: any;
};

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
};

type FormProviderProps = {
    children: ReactNode;
};

const initialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}

//4 etapas diferentes
//dados que podem ser acessados por toda a aplicação

//----------------------------------------------------------------------------

//Criar o Context - caixa que vai armazenar os dados
const FormContext = createContext<ContextType | undefined>(undefined);
//createContext tem que ser inicializado com algum valor/argumento

//Criar o Reducer - executa ações específicas 
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
//para fazer alteração em qualquer tela das variáveis aqui contidas no enum, preciso importá-lo

//----------------------------------------------------------------------------

//recebi os dados, executei a ação de troca de dados "FormActions.setCurrentStep:" e retorno um novo state com o CurrentStep modificado
//reducer é apenas para uso interno
const formReducer = (state: State, action: Action ) => {
    switch(action.type){
        case FormActions.setCurrentStep:
            //copio o estado que estava com ...state, e mudo o estado de currentStep
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setLevel:
            return {...state, level: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setGithub:
            return {...state, github: action.payload};
        default:
            return state;
    }
} 

//----------------------------------------------------------------------------

//Criar o Provider - ambiente de acesso aos dados do contexto
//o componente principal da aplicação

export const FormProvider = ({ children }: FormProviderProps) => {

    //initialData é uma variável com os dados iniciais
    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = {state, dispatch};

    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
}

//----------------------------------------------------------------------------

//Criar um Hook - simplificar o processo 

export const useForm = () => {
    const context = useContext(FormContext);

    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    return context;
}