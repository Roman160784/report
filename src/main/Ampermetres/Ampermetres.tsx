import React from 'react';
import { useSelector } from 'react-redux';
import { AmperOhmetresHeaderStandards } from '../../common/amperOhmmetres/amperOhmmetres';
import { Button } from '../../common/button';
import { DataAmperOhmForReport } from '../../common/dataAmperOhmForReport/DataAmperOhmForReport';
import { DataHeader } from '../../common/dataHeader';
import { AmprOhmStandardsInput } from '../../common/input/AmperOhmStandardsInput';
import { EditableSpan } from '../../common/input/editableSpan';
import { NameOrganization } from '../../common/nameOrganization';
import { Standards } from '../../common/standarts/standards';
import { ampermetresReducerType, standardsAmpermetresType } from '../../redux/AmpermetresReducer';
import { RootReducerType } from '../../redux/store';
import classes from './amper.module.css'


export const Ampermetres = () => {

    const ampermetres = useSelector<RootReducerType, ampermetresReducerType[]>(s => s.ampermetres)
    const standardsAmpermetres = ampermetres.filter(el => el.standardsAmpermetres)
    const dataAmpermetres = ampermetres.filter(el => el.ampermetr)
  

    return (

        <div>
            <div>
                <NameOrganization />
            </div>
            <div className={classes.reportNum}>
                Протокол № <EditableSpan title={'123'} changeTitle={() => { }} /> /01/2160
            </div>
            <div>
                <DataHeader />
            </div>
            <div>
                ТНПА: ГОСТ 8.497-83
            </div>
            <br />
            <div>Средства поверки: <AmprOhmStandardsInput setDataForAmperOhm={() => {}}/> <span>введите заводской № СИ</span></div> 
            <br />
            <div>
                <table border={1} >
                    <AmperOhmetresHeaderStandards />

                    {
                        standardsAmpermetres.map(st => {
                            return (
                                <Standards standard={st.standardsAmpermetres} />
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
            <div><AmprOhmStandardsInput setDataForAmperOhm={() => {}}/> <span>введите заводской № СИ</span></div>
            <br />
            <div>
                <table border={1} >
                    <tr>
                        <th>Номер<br /> п.п</th>
                        <th>Тип,<br /> предел измерений</th>
                        <th>Заводской<br /> номер</th>
                        <th>Класс<br /> точночти</th>
                        <th>Внешний осмотр, <br />согласно п. 4.1</th>
                        <th>Опробование,<br /> согласно п. 4.2</th>
                        <th>Определение основной погрешности, <br /> вариации показаний п. 4.4</th>
                        <th>Заключение</th>
                        <th>Номер <br /> клейма-наклейки</th>
                    </tr>
                    {
                        dataAmpermetres.map(data => {
                            return (
                                <DataAmperOhmForReport ampermetr={data.ampermetr} />
                            )
                        })
                    }
                </table>
            </div>
            <br />
            <div>
                Государственный поверитель ______________________ <EditableSpan title={''} changeTitle={() => {}} />
            </div>

        </div>
    )

}