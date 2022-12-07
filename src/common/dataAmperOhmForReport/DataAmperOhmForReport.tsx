import React from 'react';
import { ampermetrType } from '../../redux/AmpermetresReducer';
import { Button } from '../button';
import { EditableSpan } from '../input/editableSpan';
import { EditableSpanNumbers } from '../input/editableSpanNumbers';

export type DataAmperOhmForReportType = {
    ampermetr: ampermetrType[]
}


export const DataAmperOhmForReport = ({ampermetr, ...props}: DataAmperOhmForReportType) => {

    return (
        <>
        {
            ampermetr.map((el, i) => {
                return(
                    <tr key={el.id}>
                    <td>{i + 1}</td>
                    <td><EditableSpan title={el.type} changeTitle={()=>[]} /></td>
                    <td><EditableSpan title={el.number} changeTitle={()=>[]} /></td>
                    <td><EditableSpan title={el.class} changeTitle={()=>[]} /></td>
                    <td><EditableSpan title={el.visual} changeTitle={()=>[]} /></td>
                    <td><EditableSpan title={el.test} changeTitle={()=>[]} /></td>
                    <td><EditableSpan title={el.infelicity} changeTitle={()=>[]} /></td>
                    <td><EditableSpan title={el.result} changeTitle={()=>[]} /></td>
                    <td><EditableSpanNumbers title={el.stigma} changeNumber={()=>[]} /></td>
                    <Button onClickCallBack={()=> {}}/>
                </tr>
                )
            })
        }
       
        </>
    )

}