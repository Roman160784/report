import React, { ChangeEvent, useState, KeyboardEvent } from 'react';

export type DataInputPropsType = {
setData: (data: number[]) => void
}


export const DataInput = ({setData, ...props}: DataInputPropsType) => {


    const [value, setValue] = useState('')

    // const [data, setData] = useState('')
   
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)   
        
    }

    const addDataHandler = () => {
        if(value.trim() !== '') {
            setData(value.split(' ').map(e => Number(e)))
        }
    }

    const onKeyDownhandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            addDataHandler()
        }
        setValue('')
    }

    return (
        <input value={value} type="text" onChange={onChangeHandler} onKeyDown={onKeyDownhandler}/>
    )
}