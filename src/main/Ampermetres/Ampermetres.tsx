import React from 'react';
import { useSelector } from 'react-redux';
import { DataHeader } from '../../common/dataHeader';
import { EditableSpan } from '../../common/input/editableSpan';
import { NameOrganization } from '../../common/nameOrganization';
import { Standards } from '../../common/standarts/standards';
import { ampermetresReducerType, standardsAmpermetresType } from '../../redux/AmpermetresReducer';
import { RootReducerType } from '../../redux/store';
import classes from './amper.module.css'


export const Ampermetres = () => {

    const ampermetres = useSelector <RootReducerType, ampermetresReducerType[]> (s=> s.ampermetres)
    const standardsAmpermetres = ampermetres.filter(el => el.standardsAmpermetres)
    

    return(

        <div>
            <div>
               <NameOrganization/>
               </div>
        <div className={classes.reportNum}>
            Протокол № <EditableSpan title={'123'} changeTitle={()=> {}}/> /01/2160
             </div> 
             <div>
             <DataHeader/>
             </div>
             <div>
                ТНПА: ГОСТ 8.497-83
            </div>
            <div>Средства поверки</div>
            <div>
                
            <table border={1} >
                <tr>
                    <th>Наименование СИ</th>
                    <th>Тип СИ</th>
                    <th>Класс точности </th>
                    <th>Заводской номер </th>
                    <th>Дата метрологической <br/> оценки </th>
                </tr>
                
                {
                    standardsAmpermetres.map(st => {
                        return (
                            <Standards standard={st.standardsAmpermetres}/>
                        )
                    })
                }
                
            </table>
            
            </div>
            <br />
            <div>
            <table border={1} >
                <tr>
                    <th>Номер<br/> п.п</th>
                    <th>Тип,<br/> предел измерений</th>
                    <th>Заводской<br/> номер</th>
                    <th>Класс<br/> точночти</th>
                    <th>Внешний осмотр, <br/>согласно п. 4.1</th>
                    <th>Опробование,<br/> согласно п. 4.2</th>
                    <th>Определение основной погрешности, <br/> вариации показаний п. 4.4</th>
                    <th>Заключение</th>
                    <th>Номер <br/> клейма-наклейки</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Э59</td>
                    <td>1111</td>
                    <td>0,5</td>
                    <td>Соотв</td>
                    <td>Соотв</td>
                    <td>Основная погрешность не превышает допускаемое значение</td>
                    <td>Соотв ОМТ</td>
                    <td>1500001</td>
                </tr>
            </table>
            </div>
        </div>
    )
    
}