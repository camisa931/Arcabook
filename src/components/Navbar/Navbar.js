import React from 'react';
import logo from '../../images/arcabook-1-crop2.png';

import classes from './Navbar.module.css';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Navbar = (props) => {

    return (
        <nav className={classes.nav}>

            <ul>
                <li><img src={logo} alt='logo' /></li>
                <li>
                    <Link to={"/"} className="nav-link">
                        Home
                    </Link>                  
                </li>
            </ul>

            <ul>
                <li>
                    <Link to={"/create-user"} className="nav-link">
                        Nuevo Usuarios
                    </Link>
                </li>
                <li>
                    <Link to={"/user-list"} className="nav-link">
                        Usuarios
                    </Link>
                </li>
                <li>
                    <Link to={"/create-book"} className="nav-link">
                        Nuevo Libro
                    </Link>
                </li>
                <li>
                    <Link to={"/book-list"} className="nav-link">
                        Libros
                    </Link>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;