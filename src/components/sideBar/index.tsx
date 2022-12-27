import React, { ReactNode } from "react";
import * as C from './styles';
import { Link } from 'react-router-dom'
import { ReactComponent as Profile } from '../../images/Profile.svg';
import { ReactComponent as Book } from '../../images/Book.svg';
import { ReactComponent as Mail } from '../../images/Mail.svg';
import { ReactComponent as Finish } from '../../images/Finish.svg';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SideBarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon === 'profile' &&
                        <Profile fill="white" width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <Book fill="white" width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <Mail fill="white" width={24} height={24} />
                    }
                    {icon === 'finish' &&
                        <Finish fill="white" width={30} height={30} />
                    }
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    )
}

