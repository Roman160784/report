import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import classes from './editableSpan.module.css'

type EditableSpanPropsType = {
    title: number
    changeNumber: (title: number) => void
}

export const EditableSpanNumbers = ({ title, changeNumber, ...props }: EditableSpanPropsType) => {

   

    const [value, setValue] = useState<number>(title)
    const [mode, setMode] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
        setError(null)
    }

    // const addDataHandler = () => {
    //     if(value.trim() !== '' && !(value.match(/[a-z]/) || value.match(/[A-Z]/))) {
    //         setData(value.split(' ').map(e => Number(e)))
    //     }else {
    //         setError('Не верные данные') 
    //     }
    // }


    const onBlurHandler = () => {
            changeNumber(value)
            setMode(false)
    }

    return (
        <>
            {mode
                ? <input type="number" min="-999" max="999" step="0.01" value={value} onChange={onChangeHandler}
                         onBlur={onBlurHandler} autoFocus  className={classes.inputName}/>
                : <span style={{color: 'blue'}} onDoubleClick={() => {setMode(true)}}>{title}</span>}
            {error && <div className={classes.error}>{error}</div>}
            {/* <div className={classes.inputClick}>Кликни дважды для изменения названия</div> */}
        </>

    )

}