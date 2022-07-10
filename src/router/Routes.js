import React from 'react';
import { Navigate } from 'react-router-dom';

import {About} from "../pages/About";
import {Post} from "../pages/Post";
import {Posts} from "../pages/Posts";
import {Login} from "../pages/Login";


export const publicRoutes = [
    {
        path: '/login',
        element: <Login/>,
        exact: true,
    },
    {
        path: '*',
        element: <Navigate to = "/login" replace= { true } />,
        exact: false,
    }
];

export const privateRoutes = [
    {
        path: '/about',
        element: <About/>,
        exact: true,
    },
    {
        path: '/posts',
        element: <Posts/>,
        exact: true,
    },
    {
        path: '/posts/:id',
        element: <Post/>,
        exact: true,
    },
    {
        path: '*',
        element: <Navigate to = "/posts" replace= { true } />,
        exact: false,
    }
];