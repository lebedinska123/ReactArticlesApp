import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from '../router/Routes';
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../shared/Loader/Loader";

function AppRoute() {
    const {isAuth, setIsAuth, isAppLoading} = useContext(AuthContext);

    if (isAppLoading) {
        return <Loader/>;
    }

    return (
        <Routes>
            {
                isAuth ? privateRoutes.map((route) =>
                    <Route exact={route.exact} path={route.path} element={route.element} key={route.path} />
                ) : ''
            }
            {
                !isAuth ? publicRoutes.map((route) =>
                    <Route exact={route.exact} path={route.path} element={ route.element } key={route.path} />
                ) : ''
            }
        </Routes>
    );
}

export { AppRoute }