import React from "react";
import * as C from './styles';
import { ReactComponent as Developer } from '../../images/Developer.svg';

export const Header = () => {
    return (
        <C.Container>
            <div>
                <h1>Cadastro de Desenvolvedor(a)</h1>
                <p>Faça seu cadastro na lista e receba um emprego em breve.</p>
            </div>
            <div>
                <Developer  />
            </div>
        </C.Container>
    )
}