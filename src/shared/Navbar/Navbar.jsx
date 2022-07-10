import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Button";
import {AuthContext} from "../../context/AuthContext";

function Navbar() {
    const {isAuth, setAuth} = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="app d-flex">
                <div className="navbar__link">
                    <NavLink to="/about">О нас</NavLink>
                </div>
                <div className="navbar__link">
                    <NavLink to="/posts">Посты</NavLink>
                </div>
                {
                    isAuth ?
                        <div className="navbar__link">
                            <NavLink to="/login" onClick={(event) => {
                                event.preventDefault();
                                setAuth(false);
                            }}>Выйти</NavLink>
                        </div> : ''
                }
            </div>
        </div>
    );
}

export { Navbar }