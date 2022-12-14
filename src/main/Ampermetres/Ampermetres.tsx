import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AmperOhmetresHeaderStandards } from '../../common/amperOhmmetres/amperOhmmetres';
import { Button } from '../../common/button';
import { ButtonNavigation } from '../../common/ButtonNav';
import { DataAmperOhmForReport } from '../../common/dataAmperOhmForReport/DataAmperOhmForReport';
import { DataHeader } from '../../common/dataHeader';
import { AmprOhmStandardsInput } from '../../common/input/AmperOhmStandardsInput';
import { EditableSpan } from '../../common/input/editableSpan';
import { NameOrganization } from '../../common/nameOrganization';
import { Standards } from '../../common/standarts/standards';
import { addAmpermetrAC, addStandardAC, ampermetresReducerType, chengeAmpermetresTitleAC, chengeStandardTitleAC, chengeStigmaNumberAC, removeAmpermetrAC, removeStandardAC, standardsAmpermetresType } from '../../redux/AmpermetresReducer';
import { HeaderReducerType, setReportNumberAC, setUserAC } from '../../redux/HeaderReducer';
import { RootReducerType } from '../../redux/store';
import { pathEnum } from '../mainReportsPage/mainReportsPage';
import style from './amper.module.css'


export const Ampermetres = () => {

    const ampermetres = useSelector<RootReducerType, ampermetresReducerType[]>(s => s.ampermetres)
    const standardsAmpermetres = ampermetres.filter(el => el.standardsAmpermetres)
    const dataAmpermetres = ampermetres.filter(el => el.ampermetr)
    const headerData = useSelector<RootReducerType, HeaderReducerType>(state => state.header)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const chengeStandardName = (id: string, title: string, key: string) => {
        dispatch(chengeStandardTitleAC(id, title, key))
    }

    const chengeAmpermetresTitle = (id: string, title: string, key: string) => {
        dispatch(chengeAmpermetresTitleAC(id, title, key))
    }

    const removeStandard = (id: string) => {
        dispatch(removeStandardAC(id))
    }

    const addStandard = (title: string) => {
        dispatch((addStandardAC(title)))
    }

    const chengeStigmaNumber = (id: string, num: number) => {
        dispatch(chengeStigmaNumberAC(id, num))
    }

    const removeAmpermetr = (id: string) => {
        dispatch(removeAmpermetrAC(id))
    }

    const addAmpermetr = (title: string) => {
        dispatch(addAmpermetrAC(title))
    }

    const reportNumberHandler = (reportNumber: string) => {
        dispatch(setReportNumberAC(reportNumber));
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
                ???????????????? ??? <EditableSpan title={headerData.reportNumber} changeTitle={reportNumberHandler} /> /01/2160
            </div>
            <div>
                <DataHeader />
            </div>
            <div>
                ????????: ???????? 8.497-83
            </div>
            <br />
            <div>???????????????? ??????????????: <AmprOhmStandardsInput setDataForAmperOhm={addStandard} /> <span>?????????????? ?????????????????? ??? ????</span></div>
            <br />
            <div>
                <table border={1} >
                    <AmperOhmetresHeaderStandards />

                    {
                        standardsAmpermetres.map(st => {
                            return (
                                <Standards standard={st.standardsAmpermetres}
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
           
            <div>
                <table border={1} >
                    <tr>
                        <th>??????????<br /> ??.??</th>
                        <th>??????,<br /> ???????????? ??????????????????</th>
                        <th>??????????????????<br /> ??????????</th>
                        <th>??????????<br /> ??????????c????</th>
                        <th>?????????????? ????????????, <br />???????????????? ??. 4.1</th>
                        <th>??????????????????????,<br /> ???????????????? ??. 4.2</th>
                        <th>?????????????????????? ???????????????? ??????????????????????, <br /> ???????????????? ?????????????????? ??. 4.4</th>
                        <th>????????????????????</th>
                        <th>?????????? <br /> ????????????-????????????????</th>
                    </tr>
                    {
                        dataAmpermetres.map(data => {
                            return (
                                <DataAmperOhmForReport ampermetr={data.ampermetr}
                                    chengeAmpermetresTitle={chengeAmpermetresTitle}
                                    chengeStigmaNumber={chengeStigmaNumber}
                                    removeAmpermetr={removeAmpermetr}
                                />
                            )
                        })
                    }
                </table>
            </div>
            <br />
            <div><AmprOhmStandardsInput setDataForAmperOhm={addAmpermetr} /> <span>?????????????? ?????????????????? ??? ????</span></div>
            <br />
            <div>
                ?????????????????????????????? ???????????????????? ______________________ <EditableSpan title={headerData.user} changeTitle={userNameHandler} />
            </div>

        </div>
    )

}