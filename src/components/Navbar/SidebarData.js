import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import * as GiIcons from 'react-icons/gi';
import * as GrIcons from 'react-icons/gr';
import * as MdIcons from 'react-icons/md';
import * as TbIcons from 'react-icons/tb';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Administrativo',
        path: '/administrativo',
        icon: <FcIcons.FcManager />,
        cName: 'nav-text'
    },
    {
        title: 'Call Center',
        path: '/callcenter',
        icon: <RiIcons.RiCustomerService2Fill />,
        cName: 'nav-text'
    },
    {
        title: 'Diretoria',
        path: '/diretoria',
        icon: <GiIcons.GiDirectorChair />,
        cName: 'nav-text'
    },
    {
        title: 'Dp/Rh',
        path: '/dp',
        icon: <GrIcons.GrResources />,
        cName: 'nav-text'
    },
    {
        title: 'Ferramentas',
        path: '/ferramentas',
        icon: <FaIcons.FaTools />,
        cName: 'nav-text'
    },
    {
        title: 'Financeiro',
        path: '/financeiro',
        icon: <GiIcons.GiReceiveMoney />,
        cName: 'nav-text'
    },
    {
        title: 'Marketing',
        path: '/marketing',
        icon: <MdIcons.MdCampaign />,
        cName: 'nav-text'
    },
    {
        title: 'Parceiros',
        path: '/parceiros',
        icon: <FaIcons.FaHandshake />,
        cName: 'nav-text'
    },
    {
        title: 'Recepção',
        path: '/recepcao',
        icon: <MdIcons.MdOutlineCameraFront />,
        cName: 'nav-text'
    },
    {
        title: 'Serviços Gerais',
        path: '/servicosgerais',
        icon: <TbIcons.TbHotelService />,
        cName: 'nav-text'
    },
    {
        title: 'TI',
        path: '/ti',
        icon: <GrIcons.GrTechnology />,
        cName: 'nav-text'
    },
    {
        title: '...',
        path: '/',
        icon: <MdIcons.MdConstruction />,
        cName: 'nav-text'
    },
];