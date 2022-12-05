import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from '../../routes/Navlink';
import { Ampermetres } from '../Ampermetres/Ampermetres';
import { Ohmetres } from '../Ohmetres/Ohmetres';
import { Report } from '../report/report';

export enum pathEnum {
    main = '/',
    ampermetr = '/ampermetr',
    ohmmeter = '/ohmmeter',
    transformer = '/transformer',
    error404 = '/404',
}



export const MainReportsPage = () => {
    return (
        <div>
            <Nav/>
            <div>
                <div>
                    <Routes>
                        <Route path={pathEnum.ohmmeter} element={<Ohmetres/>}/>
                        <Route path={pathEnum.ampermetr} element={<Ampermetres/>}/>
                        <Route path={pathEnum.transformer} element={<Report/>}/>
                        <Route path={pathEnum.error404} element=
                            {<h1 style={{textAlign: 'center', fontSize: '50px'}}>404: OOPS.. PAGE NOT FOUND</h1>}/>
                    </Routes>
                </div>
            </div>
        </div>

    )
    
}