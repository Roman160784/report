import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AmperOhmetresHeaderStandards } from '../../common/amperOhmmetres/amperOhmmetres';
import { ButtonNavigation } from '../../common/ButtonNav';
import { DataAmperOhmForReport } from '../../common/dataAmperOhmForReport/DataAmperOhmForReport';
import { DataHeader } from '../../common/dataHeader';
import { AmprOhmStandardsInput } from '../../common/input/AmperOhmStandardsInput';
import { EditableSpan } from '../../common/input/editableSpan';
import { NameOrganization } from '../../common/nameOrganization';
import { Standards } from '../../common/standarts/standards';
import { HeaderReducerType, setReportNumberAC, setUserAC } from '../../redux/HeaderReducer';
import { addOhmetrAC, addStandardForOhmetrAC, chengeOhmetresTitleAC, chengeStandardOhmetrTitleAC, chengeStigmaNumberOhmetrAC, ohmmetresReducerType, removeOhmetrAC, removeStandardOhmetresAC } from '../../redux/OhmmetresReducer';
import { RootReducerType } from '../../redux/store';
import { pathEnum } from '../mainReportsPage/mainReportsPage';
import style from './ohmetr.module.css';

export const Ohmetres = () => {

    const headerData = useSelector<RootReducerType, HeaderReducerType>(state => state.header)
    const ohmetres = useSelector<RootReducerType, ohmmetresReducerType[]>(s => s.ohmetres)
    const standardsOhmetres = ohmetres.filter(el => el.standardsOhmmetres)
    const dataOhmetres = ohmetres.filter(el => el.ohmmetr)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const reportNumberHandler = (reportNumber: string) => {
        dispatch(setReportNumberAC(reportNumber));
    }

    const chengeStandardName = (id: string, title: string, key: string) => {
        dispatch(chengeStandardOhmetrTitleAC(id, title, key))
    }

    const removeStandard = (id: string) => {
        dispatch(removeStandardOhmetresAC(id))
    }
    const addStandard = (title: string) => {
        dispatch(addStandardForOhmetrAC(title))
    }

    const chengeOhmetresParamethr = (id: string, title: string, key: string) => {
        dispatch(chengeOhmetresTitleAC(id, title, key))
    }
    const chengeOhmetresStigmaNumber = (id: string, num: number) => {
        dispatch(chengeStigmaNumberOhmetrAC(id, num))
    }
    const removeOhmetr = (id: string) => {
        dispatch(removeOhmetrAC(id))
    }
    const addOhmetr = (title: string) => {
        dispatch(addOhmetrAC(title))
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
            <div className={style.reportNum}>
                Протокол № <EditableSpan title={headerData.reportNumber} changeTitle={reportNumberHandler} /> /01/2160
            </div>
            <div>
                <DataHeader />
            </div>
            <div>
                ТНПА: ГОСТ 8.409-81
            </div>
            <br />
            <div>Средства поверки: <AmprOhmStandardsInput setDataForAmperOhm={addStandard} /> <span>введите заводской № СИ</span></div>
            <br />
            <div>
                <table border={1} >
                    <AmperOhmetresHeaderStandards />

                    {
                        standardsOhmetres.map(st => {
                            return (
                                <Standards standard={st.standardsOhmmetres}
                                    chengeStandardName={chengeStandardName}
                                    removeStandard={removeStandard}
                                />
                            )
                        })
                    }

                </table>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div><AmprOhmStandardsInput setDataForAmperOhm={addOhmetr} /> <span>введите заводской № СИ</span></div>
            <br />
            <div>
                <table border={1} >
                    <tr>
                        <th>Номер<br /> п.п</th>
                        <th>Тип,<br /> предел измерений</th>
                        <th>Заводской<br /> номер</th>
                        <th>Класс<br /> точночти</th>
                        <th>Внешний осмотр, <br />согласно п. 4.1</th>
                        <th>Опробование,<br /> согласно п. 4.4</th>
                        <th>Определение основной погрешности п. 4.9, <br /> вариации показаний п. 4.9</th>
                        <th>Заключение</th>
                        <th>Номер <br /> клейма-наклейки</th>
                    </tr>
                    {
                        dataOhmetres.map(data => {
                            return (
                                <DataAmperOhmForReport ampermetr={data.ohmmetr}
                                    chengeAmpermetresTitle={chengeOhmetresParamethr}
                                    chengeStigmaNumber={chengeOhmetresStigmaNumber}
                                    removeAmpermetr={removeOhmetr}
                                />
                            )
                        })
                    }
                </table>
            </div>
            <br />
            <div>
                Государственный поверитель ______________________ <EditableSpan title={headerData.user} changeTitle={userNameHandler} />
            </div>
        </div>
    )

}


