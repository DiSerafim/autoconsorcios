import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Logo from '../../img/banner-topo.jpeg';
import * as RiIcons from 'react-icons/ri';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: '#E42C30' }}> {/*Cor dos icones svg*/}
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} title='Menu Abrir' />
                </Link>
                <img src={Logo} alt='Logo Autoconsorcios' title='Logo Autoconsorcios' />
            </div>
            <nav className={sidebar ? 'menu open' : 'menu close'}>
                <ul className='menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'  title='Menu Fechar'>
                        <Link to="#" className='menu-bar'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName} title={item.title}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>

                        )
                    })}
                    <li className='nav-text' title='Abrir Chamados'>
                        <a href='http://192.168.100.250/glpi/front/central.php' target='_blanck' >
                            <RiIcons.RiCustomerService2Fill />
                            <span>Chamados</span>
                        </a>
                    </li>
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    );
    
}

export default Navbar;