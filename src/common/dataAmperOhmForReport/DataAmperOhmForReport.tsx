import React from 'react';
import { ampermetrType } from '../../redux/AmpermetresReducer';
import { Button } from '../button';
import { EditableSpan } from '../input/editableSpan';
import { EditableSpanNumbers } from '../input/editableSpanNumbers';
import styles from './dataAmperOhmForReport.module.css'



export type DataAmperOhmForReportType = {
    ampermetr: ampermetrType[]
    chengeAmpermetresTitle: (id: string, title: string, key: string) => void
    chengeStigmaNumber: (id: string, num: number) => void
    removeAmpermetr: (id: string) => void
}

export enum result {
 good = 'Соответствует',
 bad = 'Не соответствует',
 finishBadResult = 'Не соответствует ОМТ',
 infelicity = 'Основная погрешность не превышает допускаемое значение',
}


export const DataAmperOhmForReport = ({ampermetr, chengeAmpermetresTitle, chengeStigmaNumber, removeAmpermetr, ...props}: DataAmperOhmForReportType) => {

    const chengeTitleHandler = (id: string, title: string, key: string) => {
        chengeAmpermetresTitle(id, title, key)
    }

    const chengeStigmaNumberHandler = (id: string, num: number) => {
        chengeStigmaNumber(id, num)
    }

    const removeAmpermetrHandler = (id: string) => {
        removeAmpermetr(id)
    }

    return (
        <>
        {
            ampermetr.map((el, i) => {
                return(
                    <tr key={el.id}>
                    <td>{i + 1}</td>
                    <td><EditableSpan title={el.type} changeTitle={(title)=>chengeTitleHandler(el.id, title, 'type')} /></td>
                    <td><EditableSpan title={el.number} changeTitle={(title)=>chengeTitleHandler(el.id, title, 'number')} /></td>
                    <td><EditableSpan title={el.class} changeTitle={(title)=>chengeTitleHandler(el.id, title, 'class')} /></td>
                    <td className={el.visual !== result.good ? styles.error : ''}>
                        <EditableSpan title={el.visual} changeTitle={(title)=>chengeTitleHandler(el.id, title, 'visual')} /></td>
                    <td className={el.test !== result.good ? styles.error : ''}>
                        <EditableSpan title={el.test} changeTitle={(title)=>chengeTitleHandler(el.id, title, 'test')} /></td>
                    <td><EditableSpan title={el.infelicity} changeTitle={(title)=>chengeTitleHandler(el.id, title, 'infelicity')} /></td>

                    <td>{(el.visual === result.good)
                        && (el.test === result.good)
                        && (el.infelicity === result.infelicity) 
                        ? <EditableSpan title={el.result} changeTitle={(title)=>chengeTitleHandler(el.id, title, 'result')} />
                         : result.finishBadResult
                    }
                        </td>

                    <td><EditableSpanNumbers title={el.stigma} changeNumber={(num)=>chengeStigmaNumberHandler(el.id, num)} /></td>

                    <Button onClickCallBack={()=> removeAmpermetrHandler(el.id)}/>
                </tr>
                )
            })
        }
       
        </>
    )

}