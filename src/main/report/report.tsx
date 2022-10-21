
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataInput } from '../../common/input/dataInput';
import { EditableSpan } from '../../common/input/editableSpan';
import { HeaderReducerType, setCustumerAC, setDateAC, setHzAC, setkPaAC, setReceiptAC, setReportNumberAC, setStandartsAC, setTemperatureAC, setUserAC, setVoltageAC, setWetAC } from '../../redux/HeaderReducer';
import { addTransformerAC } from '../../redux/ReportReducer';
import { RootReducerType } from '../../redux/store';
import { TransformersData } from '../transformersData/transformersData';
import classes from './report.module.css'

export const Report = () => {

    const headerData = useSelector<RootReducerType, HeaderReducerType>(state => state.header)

    const dispatch = useDispatch()



    const seveData = (data: number[]) => {
        dispatch(addTransformerAC(data))
    }

    const reportNumberHandler = (reportNumber: string) => {
        dispatch(setReportNumberAC(reportNumber));
    }

    const custumerHandler = (custumer: string) => {
        dispatch(setCustumerAC(custumer));
    }

    const receiptHandler = (receipt: string) => {
        dispatch(setReceiptAC(receipt));
    }

    const dateHandler = (date: string) => {
        dispatch(setDateAC(date));
    }

    const voltageHandler = (volt: string) => {
        dispatch(setVoltageAC(volt));
    }

    const hzHandler = (hz: string) => {
        dispatch(setHzAC(hz));
    }

    const temperatureHandler = (temperature: string) => {
        dispatch(setTemperatureAC(temperature));
    }

    const wetHandler = (wet: string) => {
        dispatch(setWetAC(wet));
    }

    const kPaHandler = (kPa: string) => {
        dispatch(setkPaAC(kPa));
    }

    const standatrsHandler = (standatrs: string) => {
        dispatch(setStandartsAC(standatrs));
    }

    const userNameHandler = (userName: string) => {
        dispatch(setUserAC(userName));
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
                Протокол № <EditableSpan title={headerData.reportNumber} changeTitle={reportNumberHandler} />/10/2160 поверки трансформаторов класса 0,5S
            </div>
            <div>
                Наименование организации заказчика: <EditableSpan title={headerData.custumer} changeTitle={custumerHandler} />
            </div>
            <div>
                номер квитанции-счёт: 2160-<EditableSpan title={headerData.receipt} changeTitle={receiptHandler} />
            </div>
            <div>
                Дата проведения поверки начало/окончание: <EditableSpan title={headerData.date} changeTitle={dateHandler} />
            </div>
            <div>
                Условия проведения поверки: напряжение питающей сети, В - <EditableSpan title={headerData.voltage} changeTitle={voltageHandler} />;
                частота питающей сети, ГЦ - <EditableSpan title={headerData.hz} changeTitle={hzHandler} />;
                <br />
                температура окружающей среды, С - <EditableSpan title={headerData.temperature} changeTitle={temperatureHandler} />;
                относительная влажность воздуха, % - <EditableSpan title={headerData.wet} changeTitle={wetHandler} />,
                атмосферное давление, кПа - <EditableSpan title={headerData.kPa} changeTitle={kPaHandler} />
            </div>
            <div>
                Средства поверки: <EditableSpan title={headerData.standarts} changeTitle={standatrsHandler} />
            </div>
            <div>
                ТНПА: ГОСТ 8.217-2003 "Тртансформаторы тока. Методика поверки"
            </div>
            <div>
                <br />
                Данные <DataInput setData={seveData} />
                <br />
            </div>
            <br />
            <div>
                <TransformersData />
            </div>
            <div>
                Государственный поверитель ______________________ <EditableSpan title={headerData.user} changeTitle={userNameHandler} />
            </div>


        </div>
    )
}


