import React, { useState, useCallback, useContext } from 'react';
import { Button } from '../shared/Button';
import Input from "../shared/Input";
import {AuthContext} from "../context/AuthContext";

function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {isAuth, setAuth} = useContext(AuthContext);

    const submitForm = useCallback((event) => {
        event.preventDefault();

        if (login.trim().length !== 0 && password.length !== 0) {
            setAuth(true);
        }
    }, [login, password]);

    return (
        <div className="app">
            <h1>Вход</h1>
            <form onSubmit={submitForm}>
                <div>
                    <Input labelText="Логин" type="text" placeholder="Введите логин" value={login} id="login" onChange={(event) => setLogin(event.target.value)}/>
                </div>
                <div className="mt-2">
                    <Input labelText="Пароль" type="password" placeholder="Введите пароль" value={password} id="pass" onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <Button type="submit" className="mt-2">Войти</Button>
            </form>
        </div>
    );
}

export { Login }