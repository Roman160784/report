
import React from 'react';
import { DataInput } from '../../common/input/dataInput';
import { TransformersData } from '../transformersData/transformersData';
import classes from './report.module.css'

export const Report = () => {
   
    const seveData = (data: number[]) => {
        console.log(data);
        
    }


    return (
        <div>
            <div>
                Компетентность Республиканского унитарного предприятия
                <br />
                "Гомельский центр стандартизации метрологии и сертификации"
                <br />
                подтверждена БГЦА на соответствие требованиям СТБ ИСО/МЭК 17025-2007
                <br />
                Аттестат аккредитации BY/112 02.3.0.0056, действует до 06.09.2024
                <br />
                ул. Лепешинского, 1, г. Гомель, 246015, тел. 26-33-31
            </div>
            <div className={classes.reportNumber}>
                Протокол № 1111/10/2160 поверки трансформаторов класса 0,5S
                </div>
                <div>
                   Наименование организации заказчика 
                </div>
                <div>
                    номер квитанции-счёт 2160-
                </div>
                <div>
                    Дата проведения поверки начало/окончание
                </div>
            <div>
            Условия проведения поверки: напряжение питающей сети, В - 228; частота питающей сети, ГЦ - 50,0;   
            <br />
            температура окружающей среды, С - 24; относительная влажность воздуха, % - 32, атмосферное давление, кПа - 100,0
            </div>
            <div>
                Средства поверки
            </div>
            <div>
                ТНПА: ГОСТ 8.217-2003 "Тртансформаторы тока. Методика поверки"
            </div>
            <div>
            <br />
           Данные <DataInput setData={ seveData}   /> 
            <br />
            </div>
            <div>
                <TransformersData/>
            </div>
           
            
            
        </div>
    )
}


