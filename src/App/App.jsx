import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../shared/Navbar/Navbar.jsx";
import { AppRoute } from '../utils/AppRoute';
import { AuthContext } from '../context/AuthContext';

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isAppLoading, setIsAppLoading] = useState(true);

    let setAuth = useCallback((isAuth) => {
        localStorage.setItem('ReactAppAuth', isAuth);
        setIsAuth(isAuth);
    }, [isAuth, setIsAuth]);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('ReactAppAuth'))) {
            setIsAuth(true);
        }

        setIsAppLoading(false);
    }, []);

    return (
        <div>
            <AuthContext.Provider value={{isAuth, setAuth, isAppLoading }}>
                <BrowserRouter>
                    <Navbar/>
                    <AppRoute/>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export { App }