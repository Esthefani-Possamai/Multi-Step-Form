import React, { ReactNode } from "react";
import * as C from './styles';
import { Header } from '../header';
import { SideBarItem  } from '../sideBar';
import { useForm } from '../../contexts/FormContext'

type Props = {
    children: ReactNode;
}

export const Theme = ({children}: Props) => {

    const {state} = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header />
                <C.Steps>
                    <C.Sidebar>
                        <SideBarItem 
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SideBarItem 
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/page2"
                            active={state.currentStep === 2}
                        />
                        <SideBarItem 
                            title="Contatos"
                            description="Seus contatos"
                            icon="mail"
                            path="/page3"
                            active={state.currentStep === 3}
                        />

                        <SideBarItem 
                            title="Finalização"
                            description="Avisos e mais"
                            icon="finish"
                            path="/page4"
                            active={state.currentStep === 4}
                        />
                        </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}