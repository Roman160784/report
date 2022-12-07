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
}

export const Standards = ({standard, ...props}: StandardsType) => {
    return (
        
        <>
        {
          standard.map(st => {
            return(
                <tr key={st.id}>
                    <td><EditableSpan title={st.name} changeTitle={()=>[]} /></td>
                    <td><EditableSpan title={st.type} changeTitle={()=>[]}/></td>
                    <td><EditableSpan title={st.class} changeTitle={()=>[]}/></td>
                    <td><EditableSpan title={st.number} changeTitle={()=>[]}/></td>
                    <td><EditableSpan title={st.controlDate} changeTitle={()=>[]}/></td>
                    <Button onClickCallBack={()=> {}}/>
                </tr>
            )
          })  
        }
        </>
    )
}