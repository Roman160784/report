import React from 'react';
import { NavLink } from 'react-router-dom';
import { pathEnum } from '../main/mainReportsPage/mainReportsPage';

export const Nav = () => {
    return (
        <nav>
            <div>
                <NavLink to={pathEnum.transformer}>
                    Трансформаторы
                </NavLink>
            </div>
            <div>
                <NavLink to={pathEnum.ampermetr}>
                    Амперметры/Вольтметры
                </NavLink>
            </div>
            <div>
                <NavLink to={pathEnum.ohmmeter}>
                    Омметры
                </NavLink>
            </div>
        </nav>
    )
}