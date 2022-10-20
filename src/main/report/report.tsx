
import React from 'react';
import { useDispatch } from 'react-redux';
import { DataInput } from '../../common/input/dataInput';
import { EditableSpan } from '../../common/input/editableSpan';
import { addTransformerAC } from '../../redux/ReportReducer';
import { TransformersData } from '../transformersData/transformersData';
import classes from './report.module.css'

export const Report = () => {
   
    const dispatch = useDispatch()

    const seveData = (data: number[]) => {
        dispatch(addTransformerAC(data))
        console.log(data); 
    }

    const reportNumberHandler = (reportNumber: string) => {
        console.log(reportNumber); 
    }

    const custumerHandler = (custumer: string) => {
        console.log(custumer); 
    }

    const receiptHandler = (receipt: string) => {
        console.log(receipt); 
    }

    const dateHandler = (date: string) => {
        console.log(date); 
    }

    const voltageHandler = (volt: string) => {
        console.log(volt); 
    }

    const hzHandler = (hz: string) => {
        console.log(hz); 
    }

    const temperatureHandler = (temperature: string) => {
        console.log(temperature); 
    }

    const wetHandler = (wet: string) => {
        console.log(wet); 
    }

    const kPaHandler = (kPa: string) => {
        console.log(kPa); 
    }

    const standatrsHandler = (standatrs: string) => {
        console.log(standatrs); 
    }

    const userNameHandler = (userName: string) => {
        console.log(userName); 
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
                Протокол № <EditableSpan title={'111'} changeTitle={reportNumberHandler}/>/10/2160 поверки трансформаторов класса 0,5S
                </div>
                <div>
                   Наименование организации заказчика: <EditableSpan title={'ЦСМС'} changeTitle={custumerHandler}/>
                </div>
                <div>
                    номер квитанции-счёт: 2160-<EditableSpan title={'123'} changeTitle={receiptHandler}/>
                </div>
                <div>
                    Дата проведения поверки начало/окончание: <EditableSpan title={'11.11.2021'} changeTitle={dateHandler}/>
                </div>
            <div>
            Условия проведения поверки: напряжение питающей сети, В - <EditableSpan title={'228.0'} changeTitle={voltageHandler}/>; 
            частота питающей сети, ГЦ - <EditableSpan title={'50.0'} changeTitle={hzHandler}/>;   
            <br />
            температура окружающей среды, С - <EditableSpan title={'20.0'} changeTitle={temperatureHandler}/>;
             относительная влажность воздуха, % - <EditableSpan title={'51.0'} changeTitle={wetHandler}/>,
              атмосферное давление, кПа - <EditableSpan title={'100.0'} changeTitle={kPaHandler}/>
            </div>
            <div>
                Средства поверки: <EditableSpan title={'YO-YO'} changeTitle={standatrsHandler}/>
            </div>
            <div>
                ТНПА: ГОСТ 8.217-2003 "Тртансформаторы тока. Методика поверки"
            </div>
            <div>
            <br />
           Данные <DataInput setData={ seveData}   /> 
            <br />
            </div>
            <br />
            <div>
                <TransformersData/> 
            </div>
           <div>
            Государственный поверитель ______________________ <EditableSpan title={'YO-YO'} changeTitle={userNameHandler}/>
           </div>
            
            
        </div>
    )
}


