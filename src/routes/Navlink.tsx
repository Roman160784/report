import React from 'react';
import { NavLink } from 'react-router-dom';
import { pathEnum } from '../main/mainReportsPage/mainReportsPage';
import style from './nav.module.css'


export const Nav = () => {
    return (
        <nav >
            <div>
                <NavLink className={style.decor} to={pathEnum.transformer}>
                    Трансформаторы
                </NavLink>
            </div>
            <div>
                <NavLink className={style.decor} to={pathEnum.ampermetr}>
                    Амперметры/Вольтметры
                </NavLink>
            </div>
            <div>
                <NavLink className={style.decor} to={pathEnum.ohmmeter}>
                    Омметры
                </NavLink>
            </div>
        </nav>
    )
}