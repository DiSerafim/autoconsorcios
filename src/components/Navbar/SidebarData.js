import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Colaborador',
        path: '/colaboradores',
        icon: <FcIcons.FcManager />,
        cName: 'nav-text'
    },
    {
        title: 'Empresa',
        path: '/empresa',
        icon: <FcIcons.FcAbout />,
        cName: 'nav-text'
    },
    {
        title: 'Em Obsevação',
        path: '/observacao',
        icon: <MdIcons.MdConstruction />,
        cName: 'nav-text'
    },
];