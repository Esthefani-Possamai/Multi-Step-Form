import React from "react";
import * as C from './styles';
import { Navigate, useNavigate, Link } from 'react-router-dom'
import { ReactComponent as Edit } from '../../images/Edit.svg';

type Card = {
    nome: string;
    nivel: 0 | 1;
    email: string;
    github: string;
}
export const Card = ({nome, nivel, email, github}: Card) => {

    let perfil: string = ""

    if (nivel === 0) {
        perfil = "iniciante"
    }
    else if (nivel === 1) {
        perfil= "programador(a)"
    }
    
    return (
        <C.Container>
            <C.Secao>
                <p>Seu nome é <h4>{nome}</h4></p>
                <Link to="/" className="editar"><Edit width={24} height={24} /></Link>
            </C.Secao>
            <hr/>
            <C.Secao>
                <p>Com base na sua experiência, você é <h4>{perfil}</h4></p>
                <Link to="/page2" className="editar"><Edit width={24} height={24} /></Link>
            </C.Secao>
            <hr/>
            <C.Secao>
                <p>Poderemos entrar em contato com você por meio do seu e-mail <h4>{email}</h4></p>
                <Link to="/page3" className="editar"><Edit width={24} height={24} /></Link>
            </C.Secao>
            <hr/>
            <C.Secao>
                <p>Ah! E esta é a URL do seu perfil no GitHub <h4>{github}</h4></p>
                <Link to="/page3" className="editar"><Edit width={24} height={24} /></Link>
            </C.Secao>
            <hr/>
        </C.Container>
    )
}