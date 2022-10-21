import React, { ChangeEvent, useState } from 'react';
import classes from './editableSpan.module.css'

type EditableSpanPropsType = {
    title: string
    changeTitle: (title: string) => void
}

export const EditableSpan = ({ title, changeTitle, ...props }: EditableSpanPropsType) => {

   

    const [value, setValue] = useState<string>(title)
    const [mode, setMode] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
        setError(null)
       
    }

    const onBlurHandler = () => {
         if (value.trim() !== '') {
            changeTitle(value)
            setValue('')
            setMode(false)
        }
    }

    return (
        <>
            {mode
                ? <input type="text" value={value} onChange={onChangeHandler}
                         onBlur={onBlurHandler} autoFocus  className={classes.inputName}/>
                : <span style={{color: 'blue'}} onDoubleClick={() => {setMode(true)}}>{title}</span>}
            {error && <div className={classes.error}>{error}</div>}
            {/* <div className={classes.inputClick}>Кликни дважды для изменения названия</div> */}
        </>

    )

}