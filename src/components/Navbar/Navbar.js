import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Logo from '../../img/Logo-auto-300x45.webp';
import * as RiIcons from 'react-icons/ri';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}> {/*Cor dos icones svg*/}
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <img src={Logo} alt='Logo Autoconsorcios' />
            </div>
            <nav className={sidebar ? 'menu open' : 'menu close'}>
                <ul className='menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bar'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>

                        )
                    })}
                    <li className='nav-text'>
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