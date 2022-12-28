
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonNavigation } from '../../common/ButtonNav';
import { DataHeader } from '../../common/dataHeader';
import { DataInput } from '../../common/input/dataInput';
import { EditableSpan } from '../../common/input/editableSpan';
import { NameOrganization } from '../../common/nameOrganization';
import { HeaderReducerType, setCustumerAC, setDateAC, setHzAC, setkPaAC, setReceiptAC, setReportNumberAC, setStandartsAC, setTemperatureAC, setUserAC, setVoltageAC, setWetAC } from '../../redux/HeaderReducer';
import { addTransformerAC } from '../../redux/ReportReducer';
import { RootReducerType } from '../../redux/store';
import { TransformersData } from '../transformersData/transformersData';
import { Navigate, useNavigate } from "react-router-dom"
import classes from './report.module.css'
import { pathEnum } from '../mainReportsPage/mainReportsPage';

export const Report = () => {

    const headerData = useSelector<RootReducerType, HeaderReducerType>(state => state.header)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const seveData = (data: number[]) => {
        dispatch(addTransformerAC(data))
    }

    const reportNumberHandler = (reportNumber: string) => {
        dispatch(setReportNumberAC(reportNumber));
    }

    const standatrsHandler = (standatrs: string) => {
        dispatch(setStandartsAC(standatrs));
    }

    const userNameHandler = (userName: string) => {
        dispatch(setUserAC(userName));
    }

    const navigatonHandler = () => {
        navigate(pathEnum.main)
    }

    return (
        <div>
            <div>
                <ButtonNavigation onClickCallBack={navigatonHandler} />
            </div>
            <div>
                <NameOrganization />
            </div>
            <div className={classes.reportNumber}>
                Протокол № <EditableSpan title={headerData.reportNumber} changeTitle={reportNumberHandler} />/10/2160 поверки трансформаторов класса 0,5S
            </div>
            <div>
                <DataHeader />
            </div>
            <div>
                Средства поверки: <EditableSpan title={headerData.standarts} changeTitle={standatrsHandler} />
            </div>
            <div>
                ТНПА: ГОСТ 8.217-2003 "Тртансформаторы тока. Методика поверки"
            </div>
            
            <br />
            <div>
                <TransformersData />
            </div>
            <div>
                Данные <DataInput setData={seveData} />
                <br />
            </div>
            <br />
            <div>
                Государственный поверитель ______________________ <EditableSpan title={headerData.user} changeTitle={userNameHandler} />
            </div>


        </div>
    )
}


