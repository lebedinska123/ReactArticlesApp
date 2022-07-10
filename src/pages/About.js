import React from "react";

function About() {

    return (
        <div className="app">
            <h1>Приложение-обучение</h1>
            <p>
                Это приложение было создано с целью изучить React, посмотреть различные подходы к написанию компонентов и хуков.
                Приложение реализовано с React 18.
            </p>
            <p>
                В процессе были созданы такие компоненты как: лоадер, пагинация, модальное окно, фильтрация данных на странице.
                Реализована маршрутизация с React Router v6. Подгрузка данных при скролле. Авторизация-заглушка.

            </p>
        </div>
    )
}

export { About }