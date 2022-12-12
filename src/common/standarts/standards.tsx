import React from 'react';
import { Button } from '../button';
import { EditableSpan } from '../input/editableSpan';

export type standardType = {
    id: string
    name: string
    type: string
    number: string
    class: string
    controlDate: string
}

export type StandardsType = {
    standard: standardType[]
    chengeStandardName: (id: string, title: string, key: string) => void
    removeStandard: (id: string) => void
}

export const Standards = ({standard, chengeStandardName, removeStandard, ...props}: StandardsType) => {

const chengeNameStandard = (id: string, title: string, key: string) => {
    chengeStandardName(id, title, key)
}

    return (
        
        <>
        {
          standard.map(st => {
            return(
                <tr key={st.id}>
                    <td><EditableSpan title={st.name} changeTitle={( title: string)=> chengeNameStandard(st.id, title, 'name')} /></td>
                    <td><EditableSpan title={st.type} changeTitle={( title: string)=> chengeNameStandard(st.id, title, 'type')}/></td>
                    <td><EditableSpan title={st.class} changeTitle={( title: string)=> chengeNameStandard(st.id, title, 'class')}/></td>
                    <td><EditableSpan title={st.number} changeTitle={( title: string)=> chengeNameStandard(st.id, title, 'number')}/></td>
                    <td><EditableSpan title={st.controlDate} changeTitle={( title: string)=> chengeNameStandard(st.id, title, 'controlDate')}/></td>
                    <Button onClickCallBack={()=> {removeStandard(st.id)}}/>
                </tr>
            )
          })  
        }
        </>
    )
}