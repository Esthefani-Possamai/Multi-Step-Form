import React, { createContext, useContext, useReducer, ReactNode } from "react";

//types 
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

//Dados que podem ser acessados por toda a aplicação

//Context - armazenamento dos dados
const FormContext = createContext<ContextType | undefined>(undefined);
//createContext inicializado com algum valor/argumento

//Reducer
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}
//para fazer alteração das variáveis em qualquer uma das telas, preciso importar o FormActions no escopo

const formReducer = (state: State, action: Action ) => {
    switch(action.type){
        case FormActions.setCurrentStep:
            //copio o estado que estava com ...state e altero o estado de currentStep
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

//Provider - ambiente de acesso aos dados do contexto

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

//Hook
export const useForm = () => {
    const context = useContext(FormContext);

    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
    return context;
}